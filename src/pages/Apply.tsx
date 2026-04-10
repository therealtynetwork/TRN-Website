import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CONFIRMATION_PATH = "/apply/confirmation";

const Apply = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    const redirectToConfirmation = () => {
      navigate(CONFIRMATION_PATH);
    };

    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "object" &&
        (event.data.type === "form:submit" ||
          event.data.formSubmitted === true ||
          event.data.action === "formSubmitted")
      ) {
        redirectToConfirmation();
      }

      if (
        typeof event.data === "string" &&
        (event.data.includes("formSubmit") ||
          event.data.includes("form_submitted") ||
          event.data.includes("thank"))
      ) {
        redirectToConfirmation();
      }
    };

    window.addEventListener("message", handleMessage);

    const checkInterval = setInterval(() => {
      try {
        const iframe = document.getElementById(
          "inline-MVHwB9FzUKRmU4crVP2m"
        ) as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          // Cross-origin will throw — that's expected on redirect
        }
      } catch {
        clearInterval(checkInterval);
        redirectToConfirmation();
      }
    }, 1000);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
      clearInterval(checkInterval);
    };
  }, [navigate]);

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
