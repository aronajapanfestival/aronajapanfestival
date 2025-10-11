import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, MapPin } from "lucide-react";

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo al più presto.",
    });
    setFormData({ nome: "", email: "", messaggio: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Contatti
              </h1>
              <p className="text-xl text-muted-foreground">
                Hai domande? Siamo qui per aiutarti
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Inviaci un Messaggio</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2 text-foreground">
                      Nome
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Il tuo nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tua@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium mb-2 text-foreground">
                      Messaggio
                    </label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      placeholder="Il tuo messaggio..."
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide uppercase"
                  >
                    Invia Messaggio
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Informazioni di Contatto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:info@aronajapanfestival.it" className="text-muted-foreground hover:text-primary">
                          info@aronajapanfestival.it
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Instagram className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                        <a
                          href="https://instagram.com/ajf-festival"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          @ajf-festival
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Sede</h3>
                        <p className="text-muted-foreground">
                          Ca' de Pop<br />
                          Via Roma 76/80<br />
                          Arona, Italia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card border border-border">
                  <h3 className="font-bold text-foreground mb-4">Domande Frequenti (FAQ)</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• L'ingresso al festival è gratuito</li>
                    <li>• Alcuni laboratori richiedono prenotazione</li>
                    <li>• Il festival è accessibile a tutti</li>
                    <li>• Sono disponibili servizi di ristorazione</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
