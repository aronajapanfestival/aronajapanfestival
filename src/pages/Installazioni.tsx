import kitsuneImage from "@/assets/kitsune.png";
import installazioniData from "@/data/installazioni.json";

interface Installation {
  id: string;
  title: string;
  icon: string;
  description: string;
  who?: string[];
  notes?: string;
}

const Installazioni = () => {
  const installations: Installation[] = installazioniData;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Installazioni
              </h1>
              <p className="text-xl text-muted-foreground">
                Esplora gli spazi dedicati alla cultura giapponese
              </p>
            </div>

            {/* Installations Grid */}
            <div className="space-y-8">
              {installations.map((installation) => (
                <div
                  key={installation.id}
                  className="p-8 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl">{installation.icon}</div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        {installation.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        {installation.description}
                      </p>
                      {installation.who && installation.who.length > 0 && (
                        <p className="text-base text-muted-foreground italic mb-3">
                          A cura di {installation.who.join(", ")}
                        </p>
                      )}
                      {installation.notes && (
                        <p className="text-sm text-muted-foreground italic mt-3 pt-3 border-t border-border/50">
                          {installation.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-16 p-8 bg-primary/5 border-2 border-primary">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Orari di Apertura
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Sabato 15 Novembre:</strong> 15:00 - 19:30
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong>Domenica 16 Novembre:</strong> 11:00 - 18:00
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Tutte le installazioni sono accessibili gratuitamente durante l'orario di apertura del festival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installazioni;
