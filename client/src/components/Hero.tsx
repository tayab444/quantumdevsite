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
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium" data-testid="text-badge">One of Asia's Premier Software Solution Providers</span>
        </div>
        
        <h1 className="font-accent text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text" data-testid="text-hero-title">
          Welcome to QuantumDev
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Transforming Ideas into Innovative Digital Solutions with AI-Powered Technology
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          We specialize in cutting-edge software development, delivering excellence across Mobile Apps, Web Solutions, AI Integration, Big Data, and Custom Software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection('services')}
            className="group"
            data-testid="button-explore-services"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('portfolio')}
            className="backdrop-blur-md bg-background/20"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
