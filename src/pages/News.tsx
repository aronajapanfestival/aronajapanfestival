import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  preview: string;
  image?: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "inaugurazione-festival-2024",
    title: "Inaugurazione Festival 2024: Un Successo Straordinario",
    date: "2024-10-15",
    preview: "La prima edizione dell'Arona Japan Festival ha superato ogni aspettativa, con migliaia di visitatori che hanno partecipato alle attività culturali giapponesi..."
  },
  {
    id: "2",
    slug: "workshop-calligrafia-giapponese",
    title: "Workshop di Calligrafia Giapponese: Grande Partecipazione",
    date: "2024-10-10",
    preview: "Il workshop di calligrafia giapponese ha registrato il tutto esaurito. I partecipanti hanno avuto l'opportunità di imparare l'arte dello shodo con maestri esperti..."
  },
  {
    id: "3",
    slug: "annuncio-programma-2025",
    title: "Annunciato il Programma per l'Edizione 2025",
    date: "2024-10-05",
    preview: "Siamo entusiasti di annunciare le prime anticipazioni del programma per la prossima edizione del festival, che si terrà nel 2025 con ancora più eventi e sorprese..."
  },
  {
    id: "4",
    slug: "partnership-culturale-giappone",
    title: "Nuova Partnership Culturale con il Giappone",
    date: "2024-09-28",
    preview: "L'Arona Japan Festival ha siglato una partnership con importanti istituzioni culturali giapponesi per portare autentiche esperienze tradizionali ai visitatori...",
  },
  {
    id: "5",
    slug: "volontari-cercasi",
    title: "Cercasi Volontari per la Prossima Edizione",
    date: "2024-09-20",
    preview: "Stiamo cercando volontari appassionati di cultura giapponese per aiutarci a organizzare la prossima edizione del festival. Un'opportunità unica di fare esperienza...",
  }
];

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              News & Comunicati
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tutte le ultime notizie e gli aggiornamenti sull'Arona Japan Festival
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {newsData.map((news) => (
              <Link key={news.id} to={`/news/${news.slug}`} className="block mb-8">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={16} />
                      <time dateTime={news.date}>
                        {new Date(news.date).toLocaleDateString("it-IT", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {news.preview}
                    </p>
                    <span className="inline-block mt-4 text-primary font-semibold group-hover:underline">
                      Leggi di più →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
