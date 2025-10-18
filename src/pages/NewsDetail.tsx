import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsDetailData {
  slug: string;
  title: string;
  date: string;
  image?: string;
  content: string;
}

const newsDetailsData: NewsDetailData[] = [
  {
    slug: "inaugurazione-festival-2024",
    title: "Inaugurazione Festival 2024: Un Successo Straordinario",
    date: "2024-10-15",
    image: "/hero-bg.png",
    content: `La prima edizione dell'Arona Japan Festival ha superato ogni aspettativa, registrando la presenza di migliaia di visitatori entusiasti che hanno partecipato alle numerose attività culturali giapponesi.

L'evento, che si è svolto nel suggestivo scenario di Arona, ha offerto un'immersione completa nella cultura del Sol Levante, con workshop di calligrafia, cerimonie del tè, dimostrazioni di arti marziali e molto altro ancora.

Il sindaco della città ha dichiarato: "Siamo orgogliosi di aver ospitato un evento di tale portata che ha saputo unire la nostra comunità e celebrare la bellezza della cultura giapponese."

I visitatori hanno particolarmente apprezzato:
- Le installazioni artistiche ispirate all'arte giapponese tradizionale
- Gli stand gastronomici con autentico cibo giapponese
- Le performance di musica tradizionale e contemporanea
- I workshop interattivi per tutte le età

L'organizzazione ha già iniziato a lavorare per rendere l'edizione del prossimo anno ancora più coinvolgente e memorabile.`
  },
  {
    slug: "workshop-calligrafia-giapponese",
    title: "Workshop di Calligrafia Giapponese: Grande Partecipazione",
    date: "2024-10-10",
    image: "/bg.png",
    content: `Il workshop di calligrafia giapponese, uno degli eventi più attesi del festival, ha registrato il tutto esaurito con settimane di anticipo.

I partecipanti hanno avuto l'opportunità unica di imparare l'antica arte dello shodo sotto la guida di maestri calligrafi giapponesi, che hanno condiviso tecniche, filosofia e storia di questa forma d'arte millenaria.

Durante le sessioni, i partecipanti hanno appreso:
- Le basi dei tratti fondamentali della calligrafia giapponese
- L'uso corretto del pennello e dell'inchiostro
- Il significato culturale e spirituale dello shodo
- Come creare i propri primi kanji

"È stata un'esperienza trasformativa," ha commentato uno dei partecipanti. "Non si tratta solo di scrivere, ma di trovare equilibrio e armonia nel movimento."

Il successo del workshop ha portato gli organizzatori a pianificare ulteriori sessioni per il futuro.`
  },
  {
    slug: "annuncio-programma-2025",
    title: "Annunciato il Programma per l'Edizione 2025",
    date: "2024-10-05",
    content: `Siamo entusiasti di annunciare le prime anticipazioni del programma per la prossima edizione del festival, che si terrà nel 2025 con ancora più eventi, workshop e sorprese per tutti gli appassionati della cultura giapponese.

La prossima edizione vedrà l'aggiunta di:
- Nuove installazioni artistiche immersive
- Un'area dedicata alla tecnologia e innovazione giapponese
- Masterclass di cucina giapponese con chef rinomati
- Proiezioni di film d'animazione giapponesi
- Un mercatino con prodotti artigianali autentici dal Giappone

Inoltre, stiamo lavorando per portare artisti e performer direttamente dal Giappone per offrire ai visitatori un'esperienza ancora più autentica.

I dettagli completi del programma saranno annunciati nei prossimi mesi. Seguiteci sui social media per rimanere aggiornati!`
  },
  {
    slug: "partnership-culturale-giappone",
    title: "Nuova Partnership Culturale con il Giappone",
    date: "2024-09-28",
    content: `L'Arona Japan Festival ha siglato una partnership strategica con importanti istituzioni culturali giapponesi, tra cui il Japan Foundation e diverse associazioni culturali nipponiche.

Questa collaborazione permetterà di:
- Portare artisti e maestri direttamente dal Giappone
- Accedere a materiali e risorse culturali autentiche
- Organizzare scambi culturali tra Italia e Giappone
- Creare programmi educativi sulla cultura giapponese

"Questa partnership rappresenta un passo fondamentale per la crescita del nostro festival," ha dichiarato il direttore artistico. "Potremo offrire ai visitatori esperienze sempre più autentiche e significative."

La collaborazione include anche la possibilità di scambi culturali, con artisti italiani che avranno l'opportunità di esporre le proprie opere in Giappone.`
  },
  {
    slug: "volontari-cercasi",
    title: "Cercasi Volontari per la Prossima Edizione",
    date: "2024-09-20",
    content: `Stiamo cercando volontari appassionati di cultura giapponese per aiutarci a organizzare la prossima edizione del festival. È un'opportunità unica di fare esperienza, conoscere persone con interessi simili e contribuire attivamente alla realizzazione di un evento straordinario.

Posizioni disponibili:
- Assistenza durante i workshop e le attività
- Supporto logistico e organizzativo
- Accoglienza e informazioni per i visitatori
- Assistenza agli stand gastronomici
- Supporto per le installazioni artistiche

Cosa offriamo:
- Formazione specifica sulla cultura giapponese
- Accesso gratuito a tutti gli eventi del festival
- Attestato di partecipazione
- Possibilità di partecipare gratuitamente a workshop selezionati
- L'opportunità di essere parte di un progetto culturale importante

Se sei interessato e vuoi far parte del nostro team, invia la tua candidatura attraverso la pagina contatti specificando le tue aree di interesse e disponibilità.

Ti aspettiamo!`
  }
];

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const newsItem = newsDetailsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">News non trovata</h1>
          <Link to="/news">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Torna alle news
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/news" className="inline-block mb-8">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={16} />
                Torna alle news
              </Button>
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar size={16} />
                <time dateTime={newsItem.date}>
                  {new Date(newsItem.date).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </time>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {newsItem.title}
              </h1>
            </header>

            {/* Featured Image */}
            {newsItem.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {newsItem.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/news">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft size={16} />
                  Torna alle news
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
