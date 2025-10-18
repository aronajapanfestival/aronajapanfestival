import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacy) {
      toast({
        title: "Accetta la privacy policy",
        description: "Devi accettare la privacy policy per iscriverti.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Iscrizione completata!",
      description: "Riceverai presto le nostre newsletter.",
    });

    setEmail("");
    setNome("");
    setPrivacy(false);
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
              <p className="text-xl text-muted-foreground">
                Resta aggiornato su tutti gli eventi e le novità del festival
              </p>
            </div>

            <div className="bg-card border border-border p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2 text-foreground">
                    Nome
                  </label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Il tuo nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

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
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    Ho letto e accetto la{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </a>{" "}
                    e acconsento al trattamento dei miei dati personali per ricevere 
                    comunicazioni relative all'Arona Japan Festival (GDPR compliant).
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  Iscriviti
                </Button>
              </form>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  Inviamo newsletter solo per eventi importanti. 
                  Puoi disiscriverti in qualsiasi momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
