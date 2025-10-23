import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Countdown from "@/components/Countdown";
import SeigaihaPattern from "@/components/SeigaihaPattern";
import kitsuneImage from "@/assets/kitsune.png";
import ajfLogo from "@/assets/aronajapanfestival.png";
import newsData from "@/data/news.json";
import { useMemo, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { createSlug, parseDate, getPreview } from "@/lib/newsUtils";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  text: string;
}

const Home = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  // Get latest 3 news, sorted by date (most recent first)
  const latestNews = useMemo(() => {
    return (newsData as NewsItem[])
      .sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 3);
  }, []);

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
                    <p className="text-lg text-muted-foreground">Via Roma 78/80, Arona</p>
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
                {/* Newsletter temporaneamente disabilitata */}
                {/* <Link to="/newsletter">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold tracking-wide uppercase text-base">
                    Newsletter
                  </Button>
                </Link> */}
              </div>
            </div>

            {/* Right Content - Countdown on desktop */}
            <div className="hidden lg:flex justify-center items-end lg:mt-10">
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
      <section className="py-16 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 font-bold uppercase tracking-wider mb-8">
            Ultime News
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => {
              const slug = createSlug(news.title);
              return (
                <Link
                  key={news.id}
                  to={`/news/${slug}-${news.id}`}
                  className="block bg-background/10 backdrop-blur-sm border-2 border-background/20 p-4 rounded hover:border-primary hover:bg-background/15 transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <h3 className="font-bold text-lg mb-3 text-background group-hover:text-primary transition-colors duration-300 min-h-[3.5rem]">
                    {news.title}
                  </h3>
                  <p className="text-sm text-background/80 line-clamp-3 mb-4 flex-grow">
                    {getPreview(news.text, 100)}
                  </p>
                  <div className="flex justify-end">
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      Leggi tutto →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 font-bold uppercase tracking-wider mb-4">
              Contribuiscono all'evento
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full px-8 md:px-0"
            >
              <CarouselContent className="px-0">
                {/* Grandangolo Viaggi */}
                <CarouselItem>
                  <div className="p-6 md:p-8 bg-background border-2 border-border rounded-lg h-[600px] flex flex-col">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src="/contributors/grandangolo-viaggi-min.png"
                        alt="Grandangolo Viaggi"
                        className="h-24 object-contain mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground">Grandangolo Viaggi</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-left flex-grow overflow-hidden">
                      Siamo un'agenzia specializzata in viaggi tailor made e di gruppo.
                      Non siamo solo agenti di viaggio con esperienza pluriennale, siamo soprattutto viaggiatori appassionati. Abbiamo imparato che il viaggio è molto più di un semplice spostamento: è un'opportunità per esplorare, crescere e creare ricordi indelebili.
                      Siamo pronti ad accoglierti su appuntamento in un ambiente giovane e rilassato, per ascoltare le tue esigenze e costruire insieme il viaggio dei tuoi sogni.
                      Samantha, Manuel, Milena
                    </p>
                    <div className="text-center">
                      <a
                        href="https://grandangoloviaggi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Visita il sito
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Pianeta Lingua */}
                <CarouselItem>
                  <div className="p-6 md:p-8 bg-background border-2 border-border rounded-lg h-[600px] flex flex-col">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src="/contributors/pianeta-lingua.png"
                        alt="Pianeta Lingua"
                        className="h-24 object-contain mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground">Pianeta Lingua</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-left flex-grow overflow-hidden">
                      Pianeta Lingua offre formazione linguistica personalizzata con insegnanti madrelingua. Da oltre 15 anni accompagna studenti e aziende nell'apprendimento delle lingue straniere con un metodo innovativo che mette lo studente al centro.
                    </p>
                    <div className="text-center">
                      <a
                        href="https://pianetalingua.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Visita il sito
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Tipolitografia Ala */}
                <CarouselItem>
                  <div className="p-6 md:p-8 bg-background border-2 border-border rounded-lg h-[600px] flex flex-col">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src="/contributors/ala.png"
                        alt="Tipolitografia Ala"
                        className="h-24 object-contain mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground">Tipolitografia Ala</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-left flex-grow overflow-hidden">
                      Da 45 ANNI accanto a te. Grafica e stampa 4.0 a 360°. Supportiamo la crescita aziendale
                      attraverso i nostri servizi di comunicazione. Dal 1976 ad oggi, per non fermarci mai.
                    </p>
                    <div className="text-center">
                      <a
                        href="https://www.tipolito-ala.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        Visita il sito
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12" />
              <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Donation message */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Per supportare l'evento con una libera donazione, scrivi a{" "}
                <a
                  href="mailto:info@aronajapanfestival.it"
                  className="text-primary underline hover:text-primary/80 font-medium"
                >
                  info@aronajapanfestival.it
                </a>
                {" "}- ogni contributo è prezioso!
              </p>
            </div>
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
                <Link
                  key={index}
                  to="/programma"
                  className="group relative py-8 px-4 md:px-6 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></div>
                  <p className="relative text-sm md:text-base font-bold tracking-widest text-primary uppercase text-center">
                    {item}
                  </p>
                </Link>
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
            src={ajfLogo}
            alt="Arona Japan Festival"
            className="w-40 h-40 mx-auto mb-8"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Segui il Festival
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-3xl mx-auto">
            Seguici sui social per rimanere aggiornato su tutte le novità,
            il programma e le attività del festival.
          </p>
          <Link to="/seguici">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide uppercase text-lg shadow-xl">
              Seguici sui Social
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
