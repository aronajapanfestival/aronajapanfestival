import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import kitsuneImage from "@/assets/kitsune.png";
import programmaData from "@/data/programma.json";
import ReactMarkdown from "react-markdown";

interface ProgramEvent {
  id: string;
  day: string;
  title: string;
  from: string;
  to?: string;
  description?: string;
  notes?: string;
  who?: string[];
  category: string;
}

const Programma = () => {
  const [selectedDay, setSelectedDay] = useState<string>("15/11/2025");
  const [selectedFilter, setSelectedFilter] = useState<string>("tutti");

  // Extract unique days from data
  const days = useMemo(() => {
    const uniqueDays = Array.from(new Set(programmaData.map((event: ProgramEvent) => event.day)));
    return uniqueDays.sort();
  }, []);

  // Extract unique categories (excluding "Generale")
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        programmaData
          .map((event: ProgramEvent) => event.category)
          .filter((cat) => cat.toLowerCase() !== "generale")
      )
    );
    return uniqueCategories.sort();
  }, []);

  // Filter events by day and category
  const filteredSchedule = useMemo(() => {
    return programmaData
      .filter((event: ProgramEvent) => event.day === selectedDay)
      .filter(
        (event: ProgramEvent) =>
          selectedFilter === "tutti" || event.category.toLowerCase() === selectedFilter.toLowerCase()
      )
      .sort((a: ProgramEvent, b: ProgramEvent) => {
        // Sort by time
        const timeA = a.from.split(":").map(Number);
        const timeB = b.from.split(":").map(Number);
        return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
      });
  }, [selectedDay, selectedFilter]);

  // Format time range
  const formatTime = (from: string, to?: string) => {
    if (to) {
      return `${from}-${to}`;
    }
    return from;
  };


  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Programma
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Due giorni ricchi di eventi, attività e scoperte
              </p>
              <p className="text-base text-muted-foreground">
                Ingresso libero con tessera ARCI • Alcuni eventi su prenotazione
              </p>
              <p className="text-base text-muted-foreground">
                Sono previste attività con offerta minima • Cibo e bevande a pagamento
              </p>
            </div>

            {/* Day Selection */}
            <div className="flex flex-col md:flex-row justify-center gap-3 mb-12 px-4">
              {days.map((day, index) => (
                <Button
                  key={day}
                  size="lg"
                  variant={selectedDay === day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day)}
                  className="font-semibold tracking-wide uppercase w-full md:w-auto"
                >
                  {day.replace("/2025", "")} - Giorno {index + 1}
                </Button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button
                size="sm"
                variant={selectedFilter === "tutti" ? "default" : "outline"}
                onClick={() => setSelectedFilter("tutti")}
                className="text-sm tracking-wide uppercase"
              >
                Tutti
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedFilter === category.toLowerCase() ? "default" : "outline"}
                  onClick={() => setSelectedFilter(category.toLowerCase())}
                  className="text-sm tracking-wide uppercase"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Schedule */}
            <div className="space-y-4">
              {filteredSchedule.length === 0 ? (
                <div className="p-12 text-center bg-card border border-border">
                  <p className="text-xl text-muted-foreground">
                    Spiacenti, nella giornata del <strong>{selectedDay.replace("/2025", "")}</strong> non sono previsti eventi nella categoria <strong>{selectedFilter === "tutti" ? "selezionata" : selectedFilter}</strong>.
                  </p>
                </div>
              ) : (
                filteredSchedule.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col md:flex-row gap-4 p-6 bg-card border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex-shrink-0 md:w-48">
                      <span className="text-2xl font-bold text-primary">
                        {formatTime(event.from, event.to)}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                      {event.who && event.who.length > 0 && (
                        <p className="text-muted-foreground mb-2">
                          {event.who.join(", ")}
                        </p>
                      )}
                      {event.description && (
                        <div className="text-muted-foreground mb-2">
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  className="text-primary underline hover:text-primary/80 font-medium"
                                  target={props.href?.startsWith('http') ? '_blank' : undefined}
                                  rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                />
                              ),
                              p: ({ node, ...props }) => <span {...props} />
                            }}
                          >
                            {event.description}
                          </ReactMarkdown>
                        </div>
                      )}
                      {event.notes && (
                        <div className="text-sm text-muted-foreground italic mt-3 pt-3 border-t border-border/50">
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  className="text-primary underline hover:text-primary/80 font-medium"
                                  target={props.href?.startsWith('http') ? '_blank' : undefined}
                                  rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                />
                              ),
                              p: ({ node, ...props }) => <span {...props} />
                            }}
                          >
                            {event.notes}
                          </ReactMarkdown>
                        </div>
                      )}
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase rounded">
                        {event.category}
                      </span>
                    </div>
                  </div>
                ))
              )}
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
