import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services does QuantumDev specialize in?',
    answer: 'We specialize in Mobile App Development, Website Development, Big Data Management, Custom Software Solutions, and AI Solutions. Our team has expertise across the full technology stack to deliver comprehensive digital solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple mobile app or website typically takes 2-3 months, while complex enterprise solutions may take 6-12 months. We provide detailed timeline estimates during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our team ensures your solution remains cutting-edge and fully functional.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across diverse industries including e-commerce, healthcare, finance, education, logistics, and entertainment. Our adaptable approach allows us to understand and meet the unique needs of any sector.',
  },
  {
    question: 'How do you ensure project quality and security?',
    answer: 'We follow industry best practices including code reviews, automated testing, security audits, and compliance with international standards. Our QA team rigorously tests every deliverable to ensure the highest quality.',
  },
  {
    question: 'Can you integrate AI into existing systems?',
    answer: 'Absolutely! We specialize in integrating AI and machine learning capabilities into existing systems. Whether it\'s automation, predictive analytics, or intelligent chatbots, we can enhance your current infrastructure with cutting-edge AI solutions.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, technology stack, and timeline. Contact us for a customized quote.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Yes! We work with organizations of all sizes, from startups to enterprise clients. We understand the unique challenges facing smaller businesses and offer scalable solutions that grow with your needs.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-3 gradient-text" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with QuantumDev
          </p>
        </div>

        <div className="glass-strong p-6 rounded-2xl border-border/50">
          <Accordion type="single" collapsible className="space-y-3" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 last:border-0">
                <AccordionTrigger className="text-left hover:no-underline hover-elevate px-3 py-3 rounded-md text-sm" data-testid={`button-faq-${index}`}>
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-3 pt-1 pb-3 text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
