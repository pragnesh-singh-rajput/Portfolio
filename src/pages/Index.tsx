
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="tech-grid fixed inset-0 opacity-30"></div>
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
