import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsData from "@/data/news.json";
import ReactMarkdown from "react-markdown";
import { parseDate } from "@/lib/newsUtils";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  text: string;
}

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Extract ID from slug (format: "slug-text-123")
  const newsId = slug ? parseInt(slug.split("-").pop() || "0") : 0;
  const newsItem = (newsData as NewsItem[]).find((item) => item.id === newsId);

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
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase rounded">
                  {newsItem.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <time>
                    {parseDate(newsItem.date).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </time>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {newsItem.title}
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-primary underline hover:text-primary/80 font-medium"
                      target={props.href?.startsWith('http') ? '_blank' : undefined}
                      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p {...props} className="text-foreground mb-6 leading-relaxed" />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong {...props} className="font-bold text-foreground" />
                  ),
                  img: ({ node, ...props }) => {
                    // Ensure src starts with / for public folder access
                    const src = props.src?.startsWith('/') ? props.src : `/${props.src}`;
                    return (
                      <img
                        {...props}
                        src={src}
                        className="rounded-lg my-6 w-full max-w-lg h-auto object-cover mx-auto"
                        loading="lazy"
                      />
                    );
                  },
                }}
              >
                {newsItem.text}
              </ReactMarkdown>
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
