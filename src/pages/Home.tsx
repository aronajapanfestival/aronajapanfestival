import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import SeigaihaPattern from "@/components/SeigaihaPattern";
import kitsuneImage from "@/assets/kitsune.png";
import ajfLogo from "@/assets/ajf-logo.png";
import ajfLogoCircle from "@/assets/ajf-logo-circle.png";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Red Accent Bar - Full Page */}
      <div className="fixed top-0 left-0 w-2 md:w-3 h-full bg-primary z-50"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Seigaiha Pattern - Right Side */}
        <SeigaihaPattern />
        
        {/* Large Kitsune Image - Right Side */}
        <div className="absolute right-0 xl:right-20 top-0 h-full w-3/5 md:w-1/2 xl:w-[55%] max-w-[700px] xl:max-w-[800px]">
          <img 
            src={kitsuneImage} 
            alt="Kitsune" 
            className="h-full w-full object-contain object-right opacity-90"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="mt-12 relative">
                  <div className="flex flex-col items-start gap-0 max-w-[520px]">
                    <span className="font-glory text-[14vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] xl:text-[83px] leading-none uppercase tracking-wider text-black" style={{ marginLeft: '5%' }}>
                      Arona
                    </span>
                    <span className="font-glory text-[26vw] sm:text-[20vw] md:text-[16vw] lg:text-[14vw] xl:text-[180px] leading-none uppercase tracking-wider text-[#6c8da1] -mt-2">
                      Japan
                    </span>
                    <span className="font-glory text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] xl:text-[103px] leading-none uppercase tracking-wider text-black -mt-2" style={{ marginLeft: '10%' }}>
                      Festival
                    </span>
                  </div>
              </div>

              {/* Date Box */}
              <div className="mb-8 mt-6">
                <p className="text-3xl md:text-4xl lg:text-5xl font-glory font-bold uppercase whitespace-nowrap text-primary tracking-widest">
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

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programma">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide uppercase text-base">
                    Programma
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/newsletter">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold tracking-wide uppercase text-base">
                    Newsletter
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Countdown on desktop */}
            <div className="hidden lg:flex justify-center items-end">
              <Countdown />
            </div>
          </div>
          
          {/* Countdown on mobile */}
          <div className="lg:hidden mt-8">
            <Countdown />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#e8e8e8' }}>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-foreground">Ultime News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ospiti Speciali Annunciati",
                image: kitsuneImage,
                text: "Siamo entusiasti di annunciare la presenza di ospiti speciali che condivideranno la loro esperienza sulla cultura giapponese contemporanea..."
              },
              {
                title: "Workshop di Calligrafia",
                image: kitsuneImage,
                text: "Iscriviti al nostro workshop di calligrafia giapponese, un'esperienza unica per imparare l'arte antica della scrittura tradizionale..."
              },
              {
                title: "Menu Gastronomico Svelato",
                image: kitsuneImage,
                text: "Scopri il menu speciale del festival con piatti tradizionali preparati da chef esperti nella cucina giapponese autentica..."
              }
            ].map((news, index) => (
              <a 
                key={index} 
                href="#" 
                className="block bg-white/50 backdrop-blur-sm border-2 border-foreground/20 p-4 rounded hover:border-primary hover:bg-white/70 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{news.title}</h3>
                <div className="flex gap-4">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-28 h-16 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground/80 line-clamp-3">{news.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Seigaiha Pattern */}
        <SeigaihaPattern />
        
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
                  className="group relative py-8 px-4 md:px-6 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg"
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
          <img 
            src={ajfLogoCircle} 
            alt="Arona Japan Festival" 
            className="w-40 h-40 mx-auto mb-8"
          />
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
