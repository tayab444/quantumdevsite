import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVision Inc',
    content: 'QuantumDev transformed our digital presence with an exceptional mobile app. Their AI solutions increased our efficiency by 40%. Truly world-class team!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, DataFlow Solutions',
    content: 'The big data management system they built for us handles millions of transactions seamlessly. Outstanding technical expertise and professional service.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Founder, HealthTech Pro',
    content: 'Their custom software solution perfectly matched our complex requirements. The team is responsive, innovative, and delivers beyond expectations.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-3 gradient-text" data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="glass-strong p-8 md:p-10 border-border/50">
            <Quote className="w-10 h-10 text-primary/30 mb-5" />
            <div className="min-h-[180px] flex flex-col justify-center">
              <p className="text-base md:text-lg mb-5 leading-relaxed" data-testid="text-testimonial-content">
                {testimonials[currentIndex].content}
              </p>
              <div>
                <p className="font-bold text-base" data-testid="text-testimonial-name">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="glass border-border/50"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="glass border-border/50"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
