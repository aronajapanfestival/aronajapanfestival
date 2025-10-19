import { useEffect } from "react";
import kitsuneImage from "@/assets/kitsune.png";

const Privacy = () => {
  useEffect(() => {
    // Load iubenda script
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Privacy & Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Informazioni sul trattamento dei dati personali e sull'utilizzo dei cookie
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12 p-8 bg-card border-2 border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h2>
              <div className="prose prose-lg max-w-none">
                <a
                  href="https://www.iubenda.com/privacy-policy/63594851"
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-primary hover:underline font-medium text-lg"
                  title="Privacy Policy"
                >
                  Consulta la Privacy Policy completa →
                </a>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="p-8 bg-card border-2 border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Cookie Policy</h2>
              <div className="prose prose-lg max-w-none">
                <a
                  href="https://www.iubenda.com/privacy-policy/63594851/cookie-policy"
                  className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-primary hover:underline font-medium text-lg"
                  title="Cookie Policy"
                >
                  Consulta la Cookie Policy completa →
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-12 p-6 bg-primary/5 border-2 border-primary text-center">
              <p className="text-muted-foreground">
                Per qualsiasi domanda riguardo al trattamento dei tuoi dati personali,
                <br />
                contattaci all'indirizzo{" "}
                <a href="mailto:info@aronajapanfestival.it" className="text-primary underline hover:text-primary/80 font-medium">
                  info@aronajapanfestival.it
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
