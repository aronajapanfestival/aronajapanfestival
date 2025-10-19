import { Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NewsletterConferma = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Mail className="w-24 h-24 text-primary" />
                  <CheckCircle className="w-10 h-10 text-green-500 absolute -bottom-2 -right-2 bg-background rounded-full" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Controlla la tua Email!
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Ti abbiamo inviato un'email con un link di conferma.
              </p>
            </div>

            <div className="bg-card border-2 border-primary p-8 md:p-12 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Controlla la tua casella email</h3>
                    <p className="text-muted-foreground">
                      Abbiamo inviato un'email all'indirizzo che hai fornito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Clicca il link di conferma</h3>
                    <p className="text-muted-foreground">
                      Apri l'email e clicca sul pulsante di conferma per completare l'iscrizione.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Sei iscritto!</h3>
                    <p className="text-muted-foreground">
                      Una volta confermata, inizierai a ricevere le nostre newsletter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded">
                <p className="text-sm text-foreground">
                  <strong>Non hai ricevuto l'email?</strong>
                  <br />
                  Controlla la cartella spam o promozioni. L'email potrebbe impiegare qualche minuto ad arrivare.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Torna alla Home
                  </Button>
                </Link>
                <Link to="/programma">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Scopri il Programma
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterConferma;
