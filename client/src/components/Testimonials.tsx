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
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="glass-strong p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-lg md:text-xl mb-6 leading-relaxed" data-testid="text-testimonial-content">
                {testimonials[currentIndex].content}
              </p>
              <div>
                <p className="font-bold text-lg" data-testid="text-testimonial-name">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="glass"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="glass"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
