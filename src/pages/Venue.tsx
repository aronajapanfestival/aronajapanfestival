import kitsuneImage from "@/assets/kitsune.png";
import { MapPin, Clock, Euro } from "lucide-react";

const Venue = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                La Venue
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
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-foreground">Ca' de Pop</h2>
                  <p className="text-lg text-muted-foreground">
                    Via Roma 76/80, Arona (NO)
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La Casa del Popolo di Arona è uno spazio culturale storico che rappresenta il cuore 
                  pulsante della comunità locale. Situata nel centro di Arona, Ca' de Pop offre 
                  ambienti versatili e accoglienti perfetti per ospitare eventi culturali, workshop, 
                  mostre e spettacoli.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Con le sue sale ampie e gli spazi dedicati, la struttura si presta idealmente 
                  ad accogliere il festival giapponese, creando un'atmosfera intima e coinvolgente 
                  per tutti i partecipanti. Gli spazi sono stati organizzati per ospitare 
                  contemporaneamente diverse attività: conferenze, laboratori, installazioni e 
                  l'area gastronomica.
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
                    L'ingresso al festival richiede il <strong>tesseramento ARCI</strong> dal costo di <strong>20 euro</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La tessera ARCI è valida per l'anno in corso e permette l'accesso a tutti gli eventi 
                    del festival e alle strutture ARCI su tutto il territorio nazionale. Il tesseramento 
                    può essere effettuato direttamente all'ingresso della venue.
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

            {/* Opening Hours */}
            <div className="mb-12 p-8 bg-card border-2 border-border">
              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Orari di Apertura
                  </h2>
                  <div className="space-y-2 text-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Sabato 15 Novembre:</strong> 10:00 - 22:00
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Domenica 16 Novembre:</strong> 10:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
                Mappa del Festival
              </h2>
              <div className="bg-muted border-2 border-border aspect-[16/10] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="text-muted-foreground mx-auto mb-4" size={64} />
                  <p className="text-lg text-muted-foreground">
                    Piantina del festival
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Inserire qui la mappa dettagliata degli spazi)
                  </p>
                </div>
              </div>
            </div>

            {/* How to Reach */}
            <div className="p-8 bg-card border-2 border-primary">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Come Raggiungerci
              </h2>
              
              {/* Google Maps Embed */}
              <div className="mb-6 rounded overflow-hidden border-2 border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.8!2d8.558!3d45.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzI1LjIiTiA4wrAzMyczMC40IkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della venue"
                ></iframe>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2">In Auto</h3>
                  <p>
                    La venue si trova nel centro di Arona, facilmente raggiungibile dall'autostrada A26. 
                    Parcheggi disponibili nelle vicinanze.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">In Treno</h3>
                  <p>
                    La stazione ferroviaria di Arona dista circa 10 minuti a piedi dalla venue.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">In Autobus</h3>
                  <p>
                    Diverse linee urbane fermano nelle vicinanze di Via Roma.
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

export default Venue;
