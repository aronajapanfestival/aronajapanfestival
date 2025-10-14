import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Arona Japan Festival" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Un viaggio nella cultura giapponese nel cuore di Arona
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
                <Link to="/protagonisti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Protagonisti
                </Link>
              </li>
              <li>
                <Link to="/venue" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Venue
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
                <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  News & Comunicati
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy & GDPR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase mb-4 text-foreground">
              Social
            </h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ajf-festival" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
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
    </footer>;
};
export default Footer;