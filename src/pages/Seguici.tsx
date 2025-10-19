import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kitsune from "@/assets/kitsune.png";

const Seguici = () => {

  useEffect(() => {
    // Load Instagram embed script
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Load Facebook SDK - Temporaneamente disabilitato
    // const facebookScript = document.createElement("script");
    // facebookScript.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v18.0";
    // facebookScript.async = true;
    // facebookScript.defer = true;
    // facebookScript.crossOrigin = "anonymous";
    // document.body.appendChild(facebookScript);

    // Load TikTok embed script - Temporaneamente disabilitato
    // const tiktokScript = document.createElement("script");
    // tiktokScript.src = "https://www.tiktok.com/embed.js";
    // tiktokScript.async = true;
    // document.body.appendChild(tiktokScript);

    return () => {
      if (document.body.contains(instagramScript)) {
        document.body.removeChild(instagramScript);
      }
      // if (document.body.contains(facebookScript)) {
      //   document.body.removeChild(facebookScript);
      // }
      // if (document.body.contains(tiktokScript)) {
      //   document.body.removeChild(tiktokScript);
      // }
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <img
              src={kitsune}
              alt="Kitsune"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Seguici
            </h1>
            <p className="text-xl text-muted-foreground">
              Resta aggiornato su tutte le novità del festival
            </p>
          </div>

          {/* Social Media Grid */}
          <div className="flex justify-center mb-12">
            {/* Instagram */}
            <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg overflow-hidden h-[650px] flex flex-col max-w-md w-full">
              <div className="flex items-center gap-2 mb-2">
                <Instagram className="text-primary" size={24} />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Instagram</h2>
              </div>
              <a
                href="https://www.instagram.com/aronajapanfestival/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 text-primary hover:underline font-bold text-sm"
              >
                @aronajapanfestival
              </a>
              <div className="flex flex-col items-center overflow-hidden">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/aronajapanfestival/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "100%",
                    minWidth: "auto",
                    padding: 0,
                    width: "100%",
                  }}
                />
              </div>
            </div>

            {/* Facebook - Temporaneamente disabilitato */}
            {/* <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg overflow-hidden h-[650px] flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Facebook className="text-primary" size={24} />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Facebook</h2>
              </div>
              <a
                href="https://www.facebook.com/aronajapanfestival"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 text-primary hover:underline font-bold text-sm"
              >
                @aronajapanfestival
              </a>
              <div className="flex flex-col items-center overflow-hidden">
                <div id="fb-root"></div>
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/aronajapanfestival"
                  data-tabs="timeline"
                  data-width="340"
                  data-height="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/aronajapanfestival"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/aronajapanfestival">
                      Arona Japan Festival
                    </a>
                  </blockquote>
                </div>
              </div>
            </div> */}

            {/* TikTok - Temporaneamente disabilitato */}
            {/* <div className="bg-card border-2 border-border p-4 md:p-6 rounded-lg overflow-hidden md:col-span-2 lg:col-span-1 h-[650px] flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="text-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">TikTok</h2>
              </div>
              <a
                href="https://www.tiktok.com/@aronajapanfestival"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 text-primary hover:underline font-bold text-sm"
              >
                @aronajapanfestival
              </a>
              <div className="flex flex-col items-center overflow-hidden">
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@aronajapanfestival"
                  data-unique-id="aronajapanfestival"
                  data-embed-type="creator"
                  style={{ maxWidth: "100%", minWidth: "auto", width: "100%" }}
                >
                  <section>
                    <a
                      target="_blank"
                      href="https://www.tiktok.com/@aronajapanfestival"
                    >
                      @aronajapanfestival
                    </a>
                  </section>
                </blockquote>
              </div>
            </div> */}
          </div>

          {/* Newsletter Section - Temporaneamente disabilitata */}
          {/* <div className="max-w-2xl mx-auto bg-primary/5 border-2 border-primary p-8 rounded-lg text-center">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Mail className="text-primary" size={32} />
              <h2 className="text-3xl font-bold text-foreground">Newsletter</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti esclusivi sul festival
            </p>
            <Link to="/newsletter">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase">
                Iscriviti alla Newsletter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Seguici;
