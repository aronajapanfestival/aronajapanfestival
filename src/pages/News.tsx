import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useMemo } from "react";
import newsData from "@/data/news.json";
import kitsuneImage from "@/assets/kitsune.png";
import { createSlug, parseDate, getPreview } from "@/lib/newsUtils";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  text: string;
}

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Sort news by date (most recent first) and filter by category
  const sortedAndFilteredNews = useMemo(() => {
    let filtered = newsData as NewsItem[];

    if (selectedCategory) {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    return filtered.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    });
  }, [selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = newsData.map(news => news.category);
    return Array.from(new Set(cats));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <img src={kitsuneImage} alt="Kitsune" className="w-24 h-24 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              News
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tutte le ultime notizie e gli aggiornamenti sull'Arona Japan Festival
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border-2 border-border text-muted-foreground hover:border-primary"
                }`}
              >
                Tutte
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border-2 border-border text-muted-foreground hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {sortedAndFilteredNews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nessuna news disponibile in questa categoria
                </p>
              </div>
            ) : (
              sortedAndFilteredNews.map((news) => {
                const slug = createSlug(news.title);
                return (
                  <Link key={news.id} to={`/news/${slug}-${news.id}`} className="block mb-8">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase rounded">
                            {news.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={16} />
                            <time>
                              {parseDate(news.date).toLocaleDateString("it-IT", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                              })}
                            </time>
                          </div>
                        </div>
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                          {news.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">
                          {getPreview(news.text)}
                        </p>
                        <span className="inline-block mt-4 text-primary font-semibold group-hover:underline">
                          Leggi di più →
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
