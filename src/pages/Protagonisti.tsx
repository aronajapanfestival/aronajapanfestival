import kitsuneImage from "@/assets/kitsune.png";
import protagonistiData from "@/data/protagonisti.json";
import programmaData from "@/data/programma.json";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Protagonist {
  id: number;
  name: string;
  role?: string;
  events?: string[];
  photo: string;
}

interface ProgramEvent {
  id: number;
  day: string;
  title: string;
  from: string;
  to?: string;
  description?: string;
  notes?: string;
  who?: string[];
  category: string;
}

const Protagonisti = () => {
  const protagonists: Protagonist[] = protagonistiData;
  const programma: ProgramEvent[] = programmaData;
  const [selectedPerson, setSelectedPerson] = useState<Protagonist | null>(null);

  // Helper function to get event details by ID
  const getEventById = (eventId: string): ProgramEvent | undefined => {
    return programma.find(event => event.id === parseInt(eventId));
  };

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
              {protagonists.map((person) => (
                <div
                  key={person.id}
                  onClick={() => person.events && person.events.length > 0 && setSelectedPerson(person)}
                  className={`bg-card border-4 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden flex flex-col h-full ${
                    person.events && person.events.length > 0 ? 'cursor-pointer' : ''
                  }`}
                >
                  {/* Photo - Panini style */}
                  <div className="relative aspect-[3/3.5] overflow-visible bg-gradient-to-b from-muted to-background">
                    <img
                      src={`/protagonisti/${person.photo}`}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Name and Role Box - overlapping photo and content */}
                  <div className="relative -mt-[34px] mx-3 z-10">
                    <div className="bg-black/90 backdrop-blur-sm p-3 rounded">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {person.name}
                      </h3>
                      {person.role && (
                        <p className="text-sm font-bold text-primary uppercase tracking-wide">
                          {person.role.split('.')[0].split(',')[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-5 bg-card flex flex-col flex-grow">
                    {person.role ? (
                      <div className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
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
                          {person.role}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground italic">
                        Biografia non ancora disponibile
                      </div>
                    )}

                    {/* Click hint for events */}
                    {person.events && person.events.length > 0 && (
                      <div className="mt-auto pt-4">
                        <p className="text-xs text-center text-primary font-semibold uppercase tracking-wide">
                          Clicca per vedere gli eventi →
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Event Modal */}
            <Dialog open={!!selectedPerson} onOpenChange={() => setSelectedPerson(null)}>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedPerson?.name}
                  </DialogTitle>
                </DialogHeader>

                {selectedPerson && (
                  <div className="space-y-6">
                    {/* Full Bio */}
                    {selectedPerson.role && (
                      <div className="text-base text-muted-foreground leading-relaxed">
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
                          }}
                        >
                          {selectedPerson.role}
                        </ReactMarkdown>
                      </div>
                    )}

                    {/* Events List */}
                    {selectedPerson.events && selectedPerson.events.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold mb-4 text-foreground">
                          Eventi ({selectedPerson.events.length})
                        </h3>
                        <div className="space-y-4">
                          {selectedPerson.events.map((eventId) => {
                            const event = getEventById(eventId);
                            if (!event) return null;

                            return (
                              <div key={eventId} className="p-4 bg-card border-2 border-border rounded-lg">
                                <div className="flex items-start gap-4 mb-2">
                                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase rounded">
                                    {event.category}
                                  </span>
                                </div>
                                <h4 className="text-base font-bold text-foreground mb-2">
                                  {event.title}
                                </h4>
                                {event.description && (
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {event.description}
                                  </p>
                                )}
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <span>📅 {event.day.replace("/2025", "")}</span>
                                  {event.from && (
                                    <span>⏰ {event.from}{event.to ? `-${event.to}` : ''}</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Info Box */}
            <div className="mt-16 p-8 bg-primary/5 border-2 border-primary text-center">
              <p className="text-lg text-foreground">
                <strong>Vuoi diventare protagonista del festival?</strong>
                <br />
                <span className="text-muted-foreground">
                  Contattaci per proporre workshop, conferenze o esibizioni.
                  <br />
                  Scrivi una mail a{" "}
                  <a href="mailto:info@aronajapanfestival.it" className="text-primary underline hover:text-primary/80 font-medium">
                    info@aronajapanfestival.it
                  </a>{" "}
                  per candidarti.
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
