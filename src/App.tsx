import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Festival from "./pages/Festival";
import Programma from "./pages/Programma";
import Newsletter from "./pages/Newsletter";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/festival" element={<Festival />} />
              <Route path="/programma" element={<Programma />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/contatti" element={<Contatti />} />
              {/* Placeholder routes */}
              <Route path="/installazioni" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">Installazioni - Coming Soon</h1></div>} />
              <Route path="/protagonisti" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">Protagonisti - Coming Soon</h1></div>} />
              <Route path="/venue" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">Venue - Coming Soon</h1></div>} />
              <Route path="/media" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">Media - Coming Soon</h1></div>} />
              <Route path="/news" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">News & Comunicati - Coming Soon</h1></div>} />
              <Route path="/privacy" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl font-bold">Privacy & GDPR - Coming Soon</h1></div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
