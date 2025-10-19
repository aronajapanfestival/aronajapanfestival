import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { toast } = useToast();

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

  useEffect(() => {
    // Check if user came from confirmation email
    if (searchParams.get('confirmed') === 'true') {
      setIsConfirmed(true);
      toast({
        title: "Iscrizione confermata!",
        description: "Grazie per aver confermato la tua iscrizione. Riceverai le nostre newsletter.",
      });
    }
  }, [searchParams, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacy) {
      toast({
        title: "Accetta la privacy policy",
        description: "Devi accettare la privacy policy per iscriverti.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: '', // No name field
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante l\'iscrizione');
      }

      // Redirect to confirmation page
      navigate('/newsletter/conferma');
    } catch (error) {
      toast({
        title: "Errore",
        description: error instanceof Error ? error.message : "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Newsletter
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Resta aggiornato su tutti gli eventi e le novità del festival
              </p>
              <p className="text-base text-muted-foreground">
                Niente spam, solo pillole di Giappone e aggiornamenti sul festival.
                Promesso! 🌸
              </p>
            </div>

            <div className="bg-card border border-border p-8 md:p-12">
              {isConfirmed ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Iscrizione Confermata!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Grazie per aver confermato la tua iscrizione alla newsletter dell'Arona Japan Festival. Riceverai tutte le novità e gli aggiornamenti sul festival.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => setIsConfirmed(false)} variant="outline">
                      Iscriviti con un'altra email
                    </Button>
                    <Link to="/programma">
                      <Button className="bg-primary hover:bg-primary/90">
                        Scopri il Programma
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tua@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={privacy}
                    onCheckedChange={(checked) => setPrivacy(checked as boolean)}
                  />
                  <input
                    type="checkbox"
                    required
                    checked={privacy}
                    onChange={() => {}}
                    className="sr-only"
                    tabIndex={-1}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Ho letto e accetto la{" "}
                    <a href="https://www.iubenda.com/privacy-policy/63594851" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-primary hover:underline" title="Privacy Policy">
                      privacy policy
                    </a>{" "}
                    e acconsento al trattamento dei miei dati personali per ricevere
                    comunicazioni relative all'Arona Japan Festival (GDPR compliant).
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Iscrizione in corso..." : "Iscriviti"}
                </Button>
              </form>
              )}

              {!isConfirmed && (
                <div className="mt-8 p-4 bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  Inviamo newsletter solo per eventi importanti. 
                  Puoi disiscriverti in qualsiasi momento.
                </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
