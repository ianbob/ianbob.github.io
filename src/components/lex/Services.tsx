import { Car, Sparkles, Wrench, Crown } from "lucide-react";

const services = [
  { icon: Car, name: "Exterior Wash", price: "KSh 300", desc: "Foam, rinse, hand-dry. Quick and thorough for daily drivers." },
  { icon: Sparkles, name: "Interior Detail", price: "KSh 800", desc: "Vacuum, dashboard polish, seat shampoo. Like brand new." },
  { icon: Wrench, name: "Engine Wash", price: "KSh 700", desc: "Safe degrease and steam clean for a spotless bay." },
  { icon: Crown, name: "Premium Valet", price: "KSh 2,500", desc: "Full inside-out treatment with wax and tyre shine." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Every wash, done the <span className="text-primary">Lex way</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, name, price, desc }) => (
            <div
              key={name}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <p className="font-display text-xl text-primary">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
