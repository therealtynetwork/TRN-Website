import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const esc = (s: string) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  try {
    const body = await req.json();
    const { name, email, country, budget, markets, investmentType, message, referredBy } = body;

    if (!name || !email || !country || !budget || !markets || !investmentType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("investor_enquiries").insert({
      name: name.trim(),
      email: email.trim(),
      country: country.trim(),
      budget: budget.trim(),
      markets: markets.trim(),
      investment_type: investmentType.trim(),
      message: (message || "").trim(),
      referred_by: (referredBy || "").trim() || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save enquiry" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "TRN Investors <onboarding@resend.dev>",
            to: ["jake@therealty-network.com"],
            subject: `New Investor Enquiry: ${String(name).slice(0, 100)} (${String(country).slice(0, 100)})`,
            html: `
              <h2>New Investor Enquiry</h2>
              <p><strong>Name:</strong> ${esc(name)}</p>
              <p><strong>Email:</strong> ${esc(email)}</p>
              <p><strong>Country:</strong> ${esc(country)}</p>
              <p><strong>Budget:</strong> ${esc(budget)}</p>
              <p><strong>Markets:</strong> ${esc(markets)}</p>
              <p><strong>Type:</strong> ${esc(investmentType)}</p>
              <p><strong>Message:</strong> ${message ? esc(message) : "N/A"}</p>
              <p><strong>Referred by:</strong> ${referredBy ? esc(referredBy) : "N/A"}</p>
            `,
          }),
        });
        if (!emailRes.ok) {
          console.error("Resend error:", await emailRes.text());
        }
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
