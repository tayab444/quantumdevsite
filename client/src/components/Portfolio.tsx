import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      link: 'https://reactnative.dev/showcase',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      image: mobileApp2,
      tags: ['Flutter', 'AI/ML', 'HealthKit'],
      description: 'AI-powered fitness tracking with personalized workout plans, progress analytics, and social features.',
      link: 'https://flutter.dev/showcase',
    },
  ],
  web: [
    {
      id: 3,
      title: 'SaaS Dashboard Platform',
      image: website1,
      tags: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Enterprise-grade analytics dashboard with real-time data visualization and team collaboration features.',
      link: 'https://vercel.com/templates',
    },
    {
      id: 4,
      title: 'Corporate Website',
      image: website2,
      tags: ['Next.js', 'Tailwind', 'CMS'],
      description: 'Modern corporate website with headless CMS integration, SEO optimization, and multi-language support.',
      link: 'https://nextjs.org/showcase',
    },
  ],
};

export default function Portfolio() {
  const openProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-3 gradient-text" data-testid="text-portfolio-title">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and innovative solutions
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10" data-testid="tabs-portfolio">
            <TabsTrigger value="mobile" data-testid="tab-mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="web" data-testid="tab-web">Websites</TabsTrigger>
          </TabsList>

          <TabsContent value="mobile" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.mobile.map((item) => (
                <Card
                  key={item.id}
                  className="glass overflow-hidden hover-elevate active-elevate-2 cursor-pointer group border-border/50"
                  onClick={() => openProject(item.link)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <Button variant="default" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2" data-testid={`text-portfolio-title-${item.id}`}>{item.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.web.map((item) => (
                <Card
                  key={item.id}
                  className="glass overflow-hidden hover-elevate active-elevate-2 cursor-pointer group border-border/50"
                  onClick={() => openProject(item.link)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <Button variant="default" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2" data-testid={`text-portfolio-title-${item.id}`}>{item.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
