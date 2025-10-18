import kitsuneImage from "@/assets/kitsune.png";

const Protagonisti = () => {
  const protagonists = [
    {
      name: "Prof. Yuki Tanaka",
      role: "Storico",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bio: "Docente di Storia del Giappone presso l'Università di Tokyo, specializzato nel periodo feudale e nella cultura samurai. Ha pubblicato numerosi saggi sulla storia giapponese.",
      events: ["Conferenza: Storia del Giappone Feudale"]
    },
    {
      name: "Maestra Sakura Yamamoto",
      role: "Maestra di Cerimonia del Tè",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      bio: "Maestra certificata di cerimonia del tè con 20 anni di esperienza. Insegna l'arte del chanoyu e la filosofia zen che sta alla base di questa antica tradizione.",
      events: ["Laboratorio: Cerimonia del Tè", "Installazione: Angolo Kimono"]
    },
    {
      name: "Chef Hiroshi Nakamura",
      role: "Chef Sushi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bio: "Chef con formazione a Tokyo, specializzato in cucina tradizionale giapponese e arte del sushi. Ha lavorato in ristoranti stellati in Giappone e Italia.",
      events: ["Workshop: Preparazione Sushi", "Degustazione: Sake"]
    },
    {
      name: "Akira Matsumoto",
      role: "Maestro di Calligrafia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bio: "Artista e calligrafo con oltre 30 anni di esperienza. Specializzato nello stile kaisho e sosho, tiene workshop e mostre in tutto il mondo.",
      events: ["Laboratorio: Calligrafia", "Installazione: Mostra Oggetti Quotidiani"]
    },
    {
      name: "Kenji Watanabe",
      role: "Musicista",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      bio: "Virtuoso dello shamisen, strumento tradizionale giapponese. Ha suonato in teatri e festival internazionali, portando la musica tradizionale alle nuove generazioni.",
      events: ["Concerto: Shamisen"]
    },
    {
      name: "Dr. Emiko Suzuki",
      role: "Esperta di Cultura Pop",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      bio: "Docente di Media Studies specializzata in manga e anime. Autrice di saggi sulla cultura pop giapponese e il suo impatto globale.",
      events: ["Conferenza: Manga e Anime", "Installazione: Mercatino Giapponese"]
    },
    {
      name: "Maestro Takeshi Ito",
      role: "Maestro di Kendo",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
      bio: "7° Dan di Kendo, ha dedicato la sua vita alle arti marziali giapponesi. Insegna non solo la tecnica, ma anche i valori e la filosofia del bushido.",
      events: ["Dimostrazione: Arti Marziali"]
    },
    {
      name: "Yumi Kobayashi",
      role: "Artista Origami",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
      bio: "Artista dell'origami premiata internazionalmente. Le sue opere complesse hanno ridefinito i confini di quest'arte tradizionale giapponese.",
      events: ["Laboratorio: Origami Avanzato", "Installazione: Mostra Oggetti Quotidiani"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                I Protagonisti
              </h1>
              <p className="text-xl text-muted-foreground">
                Gli esperti e gli artisti che animano il festival
              </p>
            </div>

            {/* Protagonists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {protagonists.map((person, index) => (
                <div
                  key={index}
                  className="bg-card border-4 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Photo - Panini style */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-muted to-background">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-5 bg-card">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {person.bio}
                    </p>

                    {/* Events */}
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                        Eventi:
                      </p>
                      {person.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-16 p-8 bg-primary/5 border-2 border-primary text-center">
              <p className="text-lg text-foreground">
                <strong>Vuoi diventare protagonista del festival?</strong>
                <br />
                <span className="text-muted-foreground">
                  Contattaci per proporre workshop, conferenze o esibizioni
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Protagonisti;
