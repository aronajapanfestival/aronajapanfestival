import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import SeigaihaPattern from "@/components/SeigaihaPattern";
import kitsuneImage from "@/assets/kitsune.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Seigaiha Pattern - Right Side */}
        <SeigaihaPattern />
        
        {/* Large Kitsune Image - Right Side */}
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5">
          <img 
            src={kitsuneImage} 
            alt="Kitsune" 
            className="h-full w-full object-contain object-right opacity-90"
          />
        </div>

        {/* Red Accent Bar */}
        <div className="absolute top-0 left-0 w-2 md:w-3 h-full bg-primary"></div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              {/* Vertical Text Accent */}
              <div className="flex items-start gap-8 mb-8">
                <div className="hidden md:block writing-mode-vertical text-xl font-bold tracking-widest text-primary">
                  文化祭
                </div>
                <div>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                    <span className="block text-foreground">ARONA</span>
                    <span className="block text-primary my-2">JAPAN</span>
                    <span className="block text-foreground">FESTIVAL</span>
                  </h1>
                </div>
              </div>

              {/* Date Box */}
              <div className="bg-primary text-primary-foreground p-8 mb-8 max-w-md">
                <p className="text-3xl md:text-4xl font-serif uppercase whitespace-nowrap">
                  15-16 Novembre 2025
                </p>
              </div>

              {/* Location & Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={28} />
                  <div>
                    <p className="text-xl font-bold text-foreground">Ca' de Pop</p>
                    <p className="text-lg text-muted-foreground">Via Roma 76/80, Arona</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary mt-1 flex-shrink-0" size={28} />
                  <p className="text-lg text-foreground font-medium">
                    Due giorni di cultura giapponese
                  </p>
                </div>
              </div>

              {/* Countdown */}
              <div className="mb-8">
                <Countdown />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/newsletter">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide uppercase text-base">
                    Newsletter
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/programma">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold tracking-wide uppercase text-base">
                    Programma
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Seigaiha Pattern */}
        <SeigaihaPattern />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-primary text-primary-foreground px-6 py-2 font-bold uppercase tracking-wider mb-6">
                  Il Festival
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Un Viaggio nella Cultura Giapponese
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Il festival celebra la ricchezza della cultura giapponese attraverso conferenze, 
                  laboratori, spettacoli dal vivo, gastronomia tradizionale e molto altro. 
                  Un'esperienza immersiva nel cuore di Arona.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={kitsuneImage} 
                  alt="Kitsune" 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain animate-fade-in drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* Activity Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "CONFERENZE",
                "GASTRONOMIA",
                "LIBRI",
                "CULTURA",
                "LABORATORI",
                "MOSTRE",
                "FILM",
                "MUSICA",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></div>
                  <p className="relative text-sm md:text-base font-bold tracking-widest text-primary uppercase text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Non Perdere Nessun Aggiornamento
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-3xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere tutte le novità sul programma, 
            gli ospiti e le attività del festival.
          </p>
          <Link to="/newsletter">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide uppercase text-lg px-12 py-6 h-auto border-4 border-primary shadow-xl">
              Iscriviti Ora
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
