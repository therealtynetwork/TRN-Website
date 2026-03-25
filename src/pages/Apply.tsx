import { useEffect } from "react";

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m";

const Apply = () => {
  useEffect(() => {
    window.location.href = FORM_URL;
  }, []);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground text-sm">Redirecting to application form...</p>
    </main>
  );
};

export default Apply;
