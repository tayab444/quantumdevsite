import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-accent text-xl font-bold gradient-text mb-4">QuantumDev</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Asia's premier software solution provider, delivering innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid="button-social-linkedin">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid="button-social-twitter">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid="button-social-github">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid="button-social-email">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Mobile Apps</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">AI Solutions</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Big Data</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+923196931391" className="hover:text-primary transition-colors">
                  +92 319 6931391
                </a>
              </li>
              <li>
                <a href="mailto:info@quantumdev.com" className="hover:text-primary transition-colors">
                  info@quantumdev.com
                </a>
              </li>
              <li>Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} QuantumDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
