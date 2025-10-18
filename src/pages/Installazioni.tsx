import kitsuneImage from "@/assets/kitsune.png";

const Installazioni = () => {
  const installations = [
    {
      title: "Mostra: Oggetti di Uso Quotidiano",
      description: "Un viaggio attraverso gli oggetti che caratterizzano la vita quotidiana giapponese, dalle bacchette ai furoshiki, dai bento alle ceramiche tradizionali. Scopri come il design e la funzionalità si fondono nell'estetica giapponese.",
      icon: "🏺",
      location: "Sala Principale"
    },
    {
      title: "Angolo Kimono",
      description: "Immergiti in un autentico angolo giapponese ricreato con cura. Scopri l'arte della vestizione del kimono, prova l'esperienza di indossarlo e fotografati in un ambiente che riproduce fedelmente un piccolo mondo giapponese.",
      icon: "👘",
      location: "Sala Tradizioni"
    },
    {
      title: "Libreria del Viaggio",
      description: "Una selezione curata di libri di viaggio, narrativa e saggistica dedicati al Giappone. Sfoglia le pagine che raccontano storie, tradizioni e esperienze del Sol Levante. Un angolo perfetto per gli amanti della lettura e della cultura giapponese.",
      icon: "📚",
      location: "Angolo Lettura"
    },
    {
      title: "Mercatino Giapponese",
      description: "Bancarelle con prodotti autentici giapponesi e articoli di cultura pop: manga, anime, gadget, snack tipici, oggettistica tradizionale e moderna. Un'occasione per portare a casa un pezzo di Giappone.",
      icon: "🏮",
      location: "Area Mercato"
    }
  ];

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
              {installations.map((installation, index) => (
                <div
                  key={index}
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
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                          📍 {installation.location}
                        </span>
                      </div>
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
                  <strong>15 Novembre:</strong> 10:00 - 20:00
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong>16 Novembre:</strong> 10:00 - 20:00
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
