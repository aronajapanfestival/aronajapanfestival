import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import kitsuneImage from "@/assets/kitsune.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${kitsuneImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">ARONA</span>
              <br />
              <span className="text-secondary">JAPAN</span>
              <br />
              <span className="text-foreground">FESTIVAL</span>
            </h1>
            
            <div className="flex flex-col items-center space-y-2 mb-12">
              <p className="text-4xl md:text-6xl font-bold text-primary">
                15-16
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                Novembre 2025
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" size={24} />
                <span className="text-foreground font-medium">Ca' de Pop, Via Roma 76/80</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <Calendar className="text-primary" size={24} />
                <span className="text-foreground font-medium">Due giorni di cultura giapponese</span>
              </div>
            </div>

            <div className="mb-16">
              <Countdown />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase">
                Iscriviti alla Newsletter
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold tracking-wide uppercase">
                Scopri il Programma
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img src={kitsuneImage} alt="Kitsune" className="w-32 h-32 mx-auto mb-8 animate-fade-in" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Un Viaggio nella Cultura Giapponese
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Il festival celebra la ricchezza della cultura giapponese attraverso conferenze, 
              laboratori, spettacoli dal vivo, gastronomia tradizionale e molto altro. 
              Un'esperienza immersiva nel cuore di Arona.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Conferenze", value: "CONFERENZE" },
                { label: "Gastronomia", value: "GASTRONOMIA" },
                { label: "Libri", value: "LIBRI" },
                { label: "Cultura", value: "CULTURA" },
                { label: "Laboratori", value: "LABORATORI" },
                { label: "Mostre", value: "MOSTRE" },
                { label: "Film", value: "FILM" },
                { label: "Conferenze", value: "CONFERENZE" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-primary/5 border border-primary/20 text-center"
                >
                  <p className="text-sm font-bold tracking-widest text-primary uppercase">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Non Perdere Nessun Aggiornamento
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere tutte le novità sul programma, 
            gli ospiti e le attività del festival.
          </p>
          <Link to="/newsletter">
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold tracking-wide uppercase border-2">
              Iscriviti Ora
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
