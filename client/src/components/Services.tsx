import { Card } from '@/components/ui/card';
import { Smartphone, Globe, Database, Code, Brain } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Responsive, fast, and SEO-optimized websites built with modern frameworks and cutting-edge technologies.',
  },
  {
    icon: Database,
    title: 'Big Data Management',
    description: 'Scalable data solutions that transform raw data into actionable insights for informed decision-making.',
  },
  {
    icon: Code,
    title: 'Custom Software Solutions',
    description: 'Tailored software applications designed to meet your unique business requirements and workflows.',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning solutions that drive innovation and competitive advantage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-3 gradient-text" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 group overflow-visible border-border/50"
                data-testid={`card-service-${index}`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
