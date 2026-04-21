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
    const { name, email, country, agency, niche, social, whyJoin, biggestGoal, referredBy } = body;

    if (!name || !email || !country || !whyJoin || !biggestGoal) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("applications").insert({
      name: name.trim(),
      email: email.trim(),
      country: country.trim(),
      agency: (agency || "").trim(),
      niche: (niche || "").trim(),
      social: (social || "").trim(),
      why_join: whyJoin.trim(),
      biggest_goal: biggestGoal.trim(),
      referred_by: (referredBy || "").trim() || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save application" }),
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
            from: "TRN Applications <onboarding@resend.dev>",
            to: ["jake@therealty-network.com"],
            subject: `New TRN Application: ${String(name).slice(0, 100)} (${String(country).slice(0, 100)})`,
            html: `
              <h2>New Application Received</h2>
              <p><strong>Name:</strong> ${esc(name)}</p>
              <p><strong>Email:</strong> ${esc(email)}</p>
              <p><strong>Country:</strong> ${esc(country)}</p>
              <p><strong>Agency:</strong> ${agency ? esc(agency) : "N/A"}</p>
              <p><strong>Niche:</strong> ${niche ? esc(niche) : "N/A"}</p>
              <p><strong>Social:</strong> ${social ? esc(social) : "N/A"}</p>
              <p><strong>Why join:</strong> ${esc(whyJoin)}</p>
              <p><strong>Biggest goal:</strong> ${esc(biggestGoal)}</p>
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
