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
import Installazioni from "./pages/Installazioni";
import Protagonisti from "./pages/Protagonisti";
import DoveSiamo from "./pages/DoveSiamo";
import Newsletter from "./pages/Newsletter";
import Contatti from "./pages/Contatti";
import Seguici from "./pages/Seguici";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
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
              <Route path="/installazioni" element={<Installazioni />} />
              <Route path="/protagonisti" element={<Protagonisti />} />
              <Route path="/dove-siamo" element={<DoveSiamo />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/seguici" element={<Seguici />} />
              {/* Placeholder routes */}
              <Route path="/media" element={<Seguici />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
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
