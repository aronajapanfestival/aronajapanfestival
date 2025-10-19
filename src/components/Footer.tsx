import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook } from "lucide-react";
import logo from "@/assets/aronajapanfestival.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Arona Japan Festival" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Un viaggio nella cultura giapponese<br />
              nel cuore di Arona
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase mb-4 text-foreground">
              Collegamenti
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/festival" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Il Festival
                </Link>
              </li>
              <li>
                <Link to="/programma" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programma
                </Link>
              </li>
              <li>
                <Link to="/installazioni" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Installazioni
                </Link>
              </li>
              <li>
                <Link to="/protagonisti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Protagonisti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase mb-4 text-foreground">
              Informazioni
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dove-siamo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dove Siamo
                </Link>
              </li>
              <li>
                <Link to="/seguici" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Seguici
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy & Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase mb-4 text-foreground">
              Media
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aronajapanfestival" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              {/* Facebook e TikTok temporaneamente disabilitati */}
              {/* <a href="https://www.facebook.com/aronajapanfestival" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@aronajapanfestival" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a> */}
              <a href="mailto:info@aronajapanfestival.it" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Ca' de Pop</p>
              <p className="text-sm text-muted-foreground">Via Roma 76/80</p>
              <p className="text-sm text-muted-foreground">Arona</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">2025 Arona Japan Festival</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
