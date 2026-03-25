import { useEffect } from "react";

const Apply = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[650px]" style={{ minHeight: 700 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
          style={{ width: "100%", height: "100%", border: "none", minHeight: 700 }}
          id="inline-MVHwB9FzUKRmU4crVP2m"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="The Realty Network Signup Form"
          data-height="1609"
          data-layout-iframe-id="inline-MVHwB9FzUKRmU4crVP2m"
          data-form-id="MVHwB9FzUKRmU4crVP2m"
          title="The Realty Network Signup Form"
        />
      </div>
    </main>
  );
};

export default Apply;
