import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Mail } from 'lucide-react';
import founderTayyab from '@assets/generated_images/Founder_Tayyab_Nawaz_headshot_5331fa61.png';
import founderZain from '@assets/generated_images/Founder_Zain_Khalid_headshot_9f25db88.png';

const founders = [
  {
    name: 'Tayyab Nawaz',
    role: 'Co-Founder & CEO',
    image: founderTayyab,
    bio: 'Visionary leader with 10+ years of experience in enterprise software solutions and AI innovation.',
  },
  {
    name: 'Zain Khalid',
    role: 'Co-Founder & CTO',
    image: founderZain,
    bio: 'Technology expert specializing in scalable architectures and cutting-edge development practices.',
  },
];

const team = [
  { name: 'Fatima Ahmed', role: 'Lead Developer', initials: 'FA' },
  { name: 'Ali Hassan', role: 'UI/UX Designer', initials: 'AH' },
  { name: 'Sara Khan', role: 'Project Manager', initials: 'SK' },
  { name: 'Omar Malik', role: 'Data Scientist', initials: 'OM' },
  { name: 'Ayesha Raza', role: 'QA Engineer', initials: 'AR' },
  { name: 'Bilal Shah', role: 'DevOps Engineer', initials: 'BS' },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented minds behind QuantumDev's success
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="glass p-8 text-center hover-elevate active-elevate-2 overflow-visible" data-testid={`card-founder-${index}`}>
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
                  <AvatarImage src={founder.image} alt={founder.name} />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-bold mb-2" data-testid={`text-founder-name-${index}`}>{founder.name}</h4>
                <p className="text-primary font-medium mb-4">{founder.role}</p>
                <p className="text-muted-foreground mb-6">{founder.bio}</p>
                <div className="flex items-center justify-center gap-4">
                  <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid={`button-linkedin-${index}`}>
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </button>
                  <button className="p-2 hover-elevate active-elevate-2 rounded-full" data-testid={`button-email-${index}`}>
                    <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="glass p-6 text-center hover-elevate active-elevate-2 overflow-visible" data-testid={`card-team-${index}`}>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg font-bold bg-primary/10">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-bold mb-1" data-testid={`text-team-name-${index}`}>{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
