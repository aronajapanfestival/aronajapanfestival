import kitsuneImage from "@/assets/kitsune.png";
import { MapPin, Euro } from "lucide-react";

const DoveSiamo = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Dove Siamo
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Ca' de Pop - Casa del Popolo di Arona
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Via+Roma+76+Arona+Italy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors"
              >
                <MapPin size={20} />
                Visualizza su Google Maps
              </a>
            </div>

            {/* Location Info */}
            <div className="mb-12 p-8 bg-card border-2 border-border">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="/cadepop.png"
                  alt="Ca' de Pop"
                  className="w-24 h-24 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-foreground">Ca' de Pop</h2>
                  <p className="text-lg text-muted-foreground">
                    Via Roma 78/80, Arona (NO)
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ca' de Pop — al secolo la Casa del Popolo di Arona — è un luogo unico, dove cultura, creatività e socialità si intrecciano ogni giorno.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tra il grande salone per concerti e mostre, la saletta piena di libri e l'accogliente angolo bar, la Casa ospita incontri, laboratori, spettacoli e momenti di convivialità.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durante l'anno diventa anche scuola di italiano per persone da tutto il mondo e laboratorio di solidarietà grazie al progetto Sottobosco, spazio all'aperto dedicato a inclusione e creatività.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  È qui che il festival trova la sua casa naturale: un luogo che vive di idee, passioni e partecipazione.
                </p>
              </div>
            </div>

            {/* ARCI Membership Info */}
            <div className="mb-12 p-8 bg-primary/5 border-2 border-primary">
              <div className="flex items-start gap-4 mb-4">
                <Euro className="text-primary flex-shrink-0 mt-1" size={32} />
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Tesseramento ARCI
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    L'ingresso al festival richiede il <strong>tesseramento ARCI</strong> dal costo di <strong>10 euro</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La tessera ARCI è <strong>valida fino a Dicembre 2026</strong> e permette l'accesso a tutti gli eventi
                    del festival e alle strutture ARCI su tutto il territorio nazionale. Il tesseramento può essere effettuato <strong>direttamente all'ingresso della sede</strong>.
                    <br />
                    La tessera dà inoltre diritto a <strong>sconti e agevolazioni</strong> presso locali, circoli, eventi e iniziative convenzionate con ARCI in tutta Italia. Scopri tutti i vantaggi sul sito{" "}
                    <a href="https://www.arci.it/convenzioni/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Arci.it
                    </a>.
                  </p>
                  <div className="bg-card p-4 rounded border border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Nota:</strong> Se sei già in possesso di una tessera ARCI valida, 
                      non è necessario effettuare un nuovo tesseramento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Arona */}
            <div className="mb-12 p-8 bg-card border-2 border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Arona</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Arona (Novara), sulle sponde del Lago Maggiore, è un importante centro commerciale e turistico, che offre splendidi scenari naturalistici, ma anche importanti monumenti, possibilità di rilassarsi e di praticare tanti sport all'aperto.
                </p>
                <p>
                  La sua posizione geografica la rende un punto strategico per lo snodo del turismo sul Lago Maggiore. La ridente cittadina piemontese, incastonata nel "Basso Lago", si trova infatti a soli poco più di 20 km dall'Aeroporto di Milano Malpensa e a circa 90 km dall'aeroporto di Milano Linate, aeroporti internazionali collegati con tutto il mondo. Inoltre il collegamento autostradale e ferroviario la rendono facilmente raggiungibile dalle varie parti d'Italia e dalle vicine nazioni europee.
                </p>
                <p className="text-sm">
                  Ulteriori informazioni sulla città e sul turismo: {" "}
                  <a href="https://www.comune.arona.no.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-medium">
                    www.comune.arona.no.it
                  </a>
                  {" "}e{" "}
                  <a href="https://www.prolocoarona.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-medium">
                    www.prolocoarona.it
                  </a>
                </p>
              </div>
            </div>

            {/* How to Reach */}
            <div className="p-8 bg-card border-2 border-primary">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Come Raggiungerci</h2>

              {/* Google Maps Embed */}
              <div className="mb-8 rounded overflow-hidden border-2 border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.8!2d8.5558!3d45.7574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a1c6e6b6b6b%3A0x6e6b6b6b6b6b6b6b!2sVia%20Roma%2C%2076%2C%2028041%20Arona%20NO%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della sede"
                ></iframe>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">In aereo</h3>
                  <p className="mb-2">
                    Aeroporti Milano Malpensa e Milano Linate -{" "}
                    <a href="https://www.sea-aeroportimilano.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      www.sea-aeroportimilano.it
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">In treno</h3>
                  <p className="mb-2">
                    Stazione di Arona -{" "}
                    <a href="https://www.trenitalia.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      www.trenitalia.it
                    </a>
                    {", "}
                    <a href="https://www.trenord.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      www.trenord.it
                    </a>
                  </p>
                  <p className="mb-1">Fermata delle tratte:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Novara - Arona</li>
                    <li>Milano - Domodossola</li>
                    <li>Torino - Arona</li>
                  </ul>
                  <p className="mt-3">
                    La stazione ferroviaria dista circa 10 minuti a piedi dalla sede.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">In auto</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Autostrada A26 - A8 uscita al casello di Castelletto Ticino o Arona -{" "}
                      <a href="https://www.autostrade.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        www.autostrade.it
                      </a>
                    </li>
                    <li>Strada Statale 32 da Novara</li>
                    <li>Strada Statale 33 del Sempione</li>
                  </ul>
                  <p className="mt-3">
                    Parcheggi disponibili nei dintorni della stazione.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">In battello</h3>
                  <p>
                    Imbarcadero di Arona -{" "}
                    <a href="https://www.navigazionelaghi.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      www.navigazionelaghi.it
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">In autobus</h3>
                  <p>Con le autolinee: {" "}
                    <a href="https://www.pirazzi.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Pirazzi
                    </a>
                    {", "}
                    <a href="https://www.comazzibus.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Comazzi
                    </a>
                    {", "}
                    <a href="https://www.stnnet.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Stn
                    </a>
                    {", "}
                    <a href="https://www.safduemila.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      S.A.F. duemila
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoveSiamo;
