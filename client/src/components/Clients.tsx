import { SiShopify, SiZendesk, SiMailchimp, SiAsana, SiTrello, SiNotion } from 'react-icons/si';

const clients = [
  { name: 'Shopify', icon: SiShopify },
  { name: 'Zendesk', icon: SiZendesk },
  { name: 'Mailchimp', icon: SiMailchimp },
  { name: 'Asana', icon: SiAsana },
  { name: 'Trello', icon: SiTrello },
  { name: 'Notion', icon: SiNotion },
];

export default function Clients() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-accent text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-clients-title">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with global enterprises to deliver exceptional results
          </p>
        </div>

        <div className="glass-strong p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity group"
                  data-testid={`client-logo-${index}`}
                >
                  <Icon className="w-16 h-16 text-foreground group-hover:text-primary transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
