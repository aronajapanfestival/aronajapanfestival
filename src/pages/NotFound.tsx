import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kitsuneImage from "@/assets/kitsune.png";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <img src={kitsuneImage} alt="Kitsune" className="w-32 h-32 mx-auto mb-8 opacity-50" />
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Pagina non trovata</p>
        <p className="mb-8 text-lg text-muted-foreground">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Torna alla Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
