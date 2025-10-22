import { Link } from "react-router-dom";
import kitsuneImage from "@/assets/kitsune.png";

interface FoodItem {
  id: string;
  name: string;
  nameJapanese: string;
  description: string;
  image: string;
}

const Food = () => {
  const foodItems: FoodItem[] = [
    {
      id: "curry-udon",
      name: "Curry Udon",
      nameJapanese: "カレーうどん",
      description: "Udon spessi serviti in un brodo al curry delicato e profumato, con tofu fritto e cipollotti.\nUn piatto caldo, cremoso e ricco di sapore — il comfort food ideale nelle giornate fresche!",
      image: "/food/curry-udon.jpeg"
    },
    {
      id: "kitsune-udon",
      name: "Kitsune Udon",
      nameJapanese: "きつねうどん",
      description: "Un piatto giapponese semplice ma pieno di gusto: udon spessi e morbidi serviti in un brodo leggero di dashi, con tofu fritto dolce e cipollotti freschi.\nUn piatto caldo e confortante, perfetto per riscaldarsi e sentirsi subito in Giappone!",
      image: "/food/kitsune-udon.jpeg"
    },
    {
      id: "yakitori",
      name: "Yakitori",
      nameJapanese: "焼き鳥",
      description: "Spiedini di pollo grigliati con salsa di soia dolce e mirin: teneri, succosi e irresistibili!\nIn Giappone è uno dei cibi da strada più amati, protagonista di festival e bancarelle durante le feste.\nPerfetto da gustare con gli amici — uno tira l'altro!　ideale da gustare in compagnia con un buon bicchiere di birra o sake.",
      image: "/food/yakitori.jpeg"
    },
    {
      id: "yakitori-donburi",
      name: "Yakitori Donburi",
      nameJapanese: "焼き鳥丼",
      description: "Riso bianco caldo coperto con pezzi di pollo grigliato, cipollotti e semi di sesamo.\nUn piatto semplice ma pieno di sapore, ideale per chi ama il gusto autentico della cucina casalinga giapponese.",
      image: "/food/yakitori-donburi.jpeg"
    },
    {
      id: "miso-shiru",
      name: "Miso Shiru",
      nameJapanese: "味噌汁",
      description: "La zuppa giapponese più amata: brodo dashi con pasta di miso, tofu e alga wakame.\nLeggera, sana e piena di umami — perfetta per accompagnare qualsiasi piatto!",
      image: "/food/miso-shiru.jpeg"
    },
    {
      id: "dorayaki",
      name: "Dorayaki",
      nameJapanese: "どら焼き",
      description: "Due soffici pancake giapponesi con un delizioso ripieno di pasta di fagioli rossi dolci.\nÈ il dolce preferito di Doraemon, il famoso personaggio dei manga!\nPerfetto per una merenda golosa o un piccolo momento di dolcezza.",
      image: "/food/dorayaki.jpeg"
    },
    {
      id: "daifuku",
      name: "Daifuku",
      nameJapanese: "大福",
      description: "Piccoli dolcetti di mochi ripieni di pasta di fagioli rossi dolci.\nSoffici, morbidi e leggermente elastici — una piccola esplosione di dolcezza giapponese in ogni morso!",
      image: "/food/daifuku.jpeg"
    },
    {
      id: "taiyaki",
      name: "Taiyaki",
      nameJapanese: "たい焼き",
      description: "Un dolce a forma di pesce con una cialda croccante e un cuore di pasta di fagioli rossi.\nÈ uno snack tipico delle fiere giapponesi, simbolo di fortuna e allegria — irresistibile appena sfornato!",
      image: "/food/taiyaki.jpeg"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                I Sapori del Festival
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Alcune delle prelibatezze che saranno offerte durante il festival da Sagami
              </p>
            </div>

            {/* Intro Section with Sagami Logo */}
            <div className="mb-12 p-8 bg-card border-2 border-border">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <img
                  src="/food/sagami.jpeg"
                  alt="Sagami"
                  className="w-32 h-32 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    I Piatti del Festival
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Queste sono le foto e le descrizioni dei piatti e dei dolci che verranno serviti durante l'evento da{" "}
                    <a
                      href="https://sagami.it/locali/sagami-milano/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80 font-semibold"
                    >
                      Sagami
                    </a>
                    , ristorante giapponese a Milano.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Gli chef{" "}
                    <Link to="/protagonisti" className="text-primary underline hover:text-primary/80 font-semibold">
                      Miho
                    </Link>
                    {" "}e{" "}
                    <Link to="/protagonisti" className="text-primary underline hover:text-primary/80 font-semibold">
                      Tomo
                    </Link>
                    {" "}porteranno al festival i sapori autentici della tradizione giapponese.
                  </p>
                </div>
              </div>
            </div>

            {/* Food Items Grid */}
            <div className="space-y-8">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 md:p-8 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full md:w-48 h-48 object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {item.name} <span className="text-xl md:text-2xl text-primary">({item.nameJapanese})</span>
                      </h2>
                      <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
