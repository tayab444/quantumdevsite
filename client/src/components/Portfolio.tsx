import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';
import mobileApp1 from '@assets/generated_images/Mobile_app_portfolio_example_402e290a.png';
import mobileApp2 from '@assets/generated_images/Fitness_app_portfolio_showcase_5d6f7ae6.png';
import website1 from '@assets/generated_images/Website_portfolio_example_1d213900.png';
import website2 from '@assets/generated_images/Corporate_website_portfolio_piece_2244164e.png';

const portfolioItems = {
  mobile: [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      image: mobileApp1,
      tags: ['React Native', 'Firebase', 'Stripe'],
      description: 'A comprehensive e-commerce platform with real-time inventory, secure payments, and personalized recommendations.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      image: mobileApp2,
      tags: ['Flutter', 'AI/ML', 'HealthKit'],
      description: 'AI-powered fitness tracking with personalized workout plans, progress analytics, and social features.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
  web: [
    {
      id: 3,
      title: 'SaaS Dashboard Platform',
      image: website1,
      tags: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise-grade analytics dashboard with real-time data visualization and team collaboration features.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Corporate Website',
      image: website2,
      tags: ['Next.js', 'Tailwind', 'CMS'],
      description: 'Modern corporate website with headless CMS integration, SEO optimization, and multi-language support.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems.mobile[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-portfolio-title">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our latest projects and innovative solutions
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12" data-testid="tabs-portfolio">
            <TabsTrigger value="mobile" data-testid="tab-mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="web" data-testid="tab-web">Websites</TabsTrigger>
          </TabsList>

          <TabsContent value="mobile" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.mobile.map((item) => (
                <Card
                  key={item.id}
                  className="glass overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button variant="outline" size="sm" className="backdrop-blur-md bg-background/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" data-testid={`text-portfolio-title-${item.id}`}>{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.web.map((item) => (
                <Card
                  key={item.id}
                  className="glass overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button variant="outline" size="sm" className="backdrop-blur-md bg-background/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" data-testid={`text-portfolio-title-${item.id}`}>{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl glass-strong" data-testid="dialog-portfolio-details">
            <DialogHeader>
              <DialogTitle className="text-2xl font-accent gradient-text">
                {selectedItem?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedItem && (
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid="video-portfolio"
                  />
                </div>
                <p className="text-muted-foreground">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
