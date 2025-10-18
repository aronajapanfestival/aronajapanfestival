import { useState } from "react";
import { Button } from "@/components/ui/button";
import kitsuneImage from "@/assets/kitsune.png";

const Programma = () => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");
  const [selectedFilter, setSelectedFilter] = useState<string>("tutti");

  const filters = ["Tutti", "Conferenze", "Laboratori", "Spettacoli", "Gastronomia"];

  const schedule = {
    day1: [
      { time: "10:00", title: "Apertura Festival", type: "generale", description: "Cerimonia di inaugurazione" },
      { time: "11:00", title: "Storia del Giappone Feudale", type: "conferenze", description: "Con Prof. Tanaka" },
      { time: "14:00", title: "Laboratorio di Calligrafia", type: "laboratori", description: "Per principianti" },
      { time: "16:00", title: "Cerimonia del Tè", type: "laboratori", description: "Dimostrazione tradizionale" },
      { time: "18:00", title: "Degustazione Sake", type: "gastronomia", description: "Con sommelier certificato" },
      { time: "20:00", title: "Concerto di Shamisen", type: "spettacoli", description: "Musica tradizionale giapponese" },
    ],
    day2: [
      { time: "10:00", title: "Manga e Anime", type: "conferenze", description: "L'evoluzione del fumetto giapponese" },
      { time: "12:00", title: "Preparazione Sushi", type: "gastronomia", description: "Workshop pratico" },
      { time: "14:00", title: "Laboratorio di Origami", type: "laboratori", description: "Tecniche avanzate" },
      { time: "16:00", title: "Arti Marziali", type: "spettacoli", description: "Dimostrazione di Kendo" },
      { time: "18:00", title: "Cinema Giapponese", type: "conferenze", description: "Proiezione e discussione" },
      { time: "20:00", title: "Chiusura Festival", type: "generale", description: "Evento conclusivo" },
    ],
  };

  const filteredSchedule = schedule[selectedDay].filter(
    (event) => selectedFilter === "tutti" || event.type === selectedFilter.toLowerCase()
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Programma
              </h1>
              <p className="text-xl text-muted-foreground">
                Due giorni ricchi di eventi, attività e scoperte
              </p>
            </div>

            {/* Day Selection */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                variant={selectedDay === "day1" ? "default" : "outline"}
                onClick={() => setSelectedDay("day1")}
                className="font-semibold tracking-wide uppercase"
              >
                15 Novembre - Giorno 1
              </Button>
              <Button
                size="lg"
                variant={selectedDay === "day2" ? "default" : "outline"}
                onClick={() => setSelectedDay("day2")}
                className="font-semibold tracking-wide uppercase"
              >
                16 Novembre - Giorno 2
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={selectedFilter === filter.toLowerCase() ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter.toLowerCase())}
                  className="text-sm tracking-wide uppercase"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Schedule */}
            <div className="space-y-4">
              {filteredSchedule.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 p-6 bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 md:w-32">
                    <span className="text-2xl font-bold text-primary">{event.time}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase rounded">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-primary/5 border-2 border-primary text-center">
              <p className="text-lg text-foreground">
                <strong>Nota:</strong> Il programma è soggetto a variazioni. 
                Controlla questa pagina regolarmente per gli aggiornamenti più recenti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programma;
