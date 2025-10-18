import kitsuneImage from "@/assets/kitsune.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const Festival = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Il Festival
              </h1>
              <p className="text-xl text-muted-foreground">
                Una celebrazione della cultura giapponese ad Arona
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">La Nostra Missione</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'Arona Japan Festival nasce con l'obiettivo di promuovere e diffondere la cultura 
                  giapponese attraverso un evento accessibile a tutti. Il festival offre un'opportunità 
                  unica di esplorare le tradizioni, l'arte, la gastronomia e la modernità del Giappone 
                  in un contesto accogliente e coinvolgente.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Cosa Offriamo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Conferenze",
                      description: "Approfondimenti su storia, cultura e società giapponese con esperti del settore"
                    },
                    {
                      title: "Laboratori",
                      description: "Esperienze pratiche di calligrafia, origami, cerimonia del tè e molto altro"
                    },
                    {
                      title: "Gastronomia",
                      description: "Degustazioni e dimostrazioni di cucina tradizionale giapponese"
                    },
                    {
                      title: "Spettacoli",
                      description: "Performance di arti marziali, danza tradizionale e musica dal vivo"
                    },
                    {
                      title: "Installazioni",
                      description: "Mostre fotografiche, esposizioni d'arte e mercatini tematici"
                    },
                    {
                      title: "Cinema",
                      description: "Proiezioni di film e anime che hanno segnato la cultura giapponese"
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-6 bg-background border border-border">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800", alt: "Tempio giapponese" },
                { src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800", alt: "Cultura giapponese" },
                { src: "https://images.unsplash.com/photo-1576891230932-b35cea92ff0e?w=800", alt: "Cibo giapponese" },
                { src: "https://images.unsplash.com/photo-1547618229-ade8a48f3908?w=800", alt: "Festival giapponese" },
              ].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 bg-white">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Frecce laterali - visibili solo su desktop */}
            <CarouselPrevious className="hidden md:flex bg-black text-white border-white hover:bg-white hover:text-black" />
            <CarouselNext className="hidden md:flex bg-black text-white border-white hover:bg-white hover:text-black" />
          </Carousel>
          
          {/* Frecce sotto - visibili solo su mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button 
              onClick={scrollPrev}
              className="p-4 bg-white text-black border-2 border-white rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="Immagine precedente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 bg-white text-black border-2 border-white rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="Immagine successiva"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Gli Organizzatori</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il festival è organizzato da un team di appassionati della cultura giapponese, 
                  in collaborazione con associazioni culturali locali e partner istituzionali. 
                  Il nostro obiettivo è creare un ponte culturale tra l'Italia e il Giappone.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Partner e Sponsor</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il festival è reso possibile grazie al supporto di partner e sponsor che condividono 
                  la nostra passione per la cultura giapponese. Per informazioni su come diventare 
                  partner del festival, contattaci all'indirizzo{" "}
                  <a href="mailto:info@aronajapanfestival.it" className="text-primary hover:underline">
                    info@aronajapanfestival.it
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festival;
