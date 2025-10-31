import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@assets/generated_images/Hero_section_tech_background_6c0d5012.png';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-6 border border-border/50">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm font-medium" data-testid="text-badge">Asia's Premier Software Solution Provider</span>
        </div>
        
        <h1 className="font-accent text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 gradient-text leading-tight" data-testid="text-hero-title">
          Welcome to QuantumDev
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto font-light" data-testid="text-hero-subtitle">
          Transforming Ideas into Innovative Digital Solutions
        </p>
        
        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Cutting-edge software development across Mobile Apps, Web Solutions, AI Integration, Big Data, and Custom Software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection('services')}
            className="group"
            data-testid="button-explore-services"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('portfolio')}
            className="backdrop-blur-md bg-background/20 border-border/50"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 border-2 border-primary/60 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
