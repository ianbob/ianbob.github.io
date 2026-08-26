import { MapPin, Clock } from "lucide-react";

const branches = [
  { name: "Lower Kabete", addr: "Along Lower Kabete Road next to Gaciu Shopping Centre", hours: "Mon–Sun · 7am – 8pm" },
  { name: "Wangige", addr: "Lower Kabete Road near Gitaru", hours: "Mon–Sun · 7am – 7pm" },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Branches</p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Two spots across Kiambu. <span className="text-primary">Twende!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b) => (
            <div key={b.name} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-display text-3xl mb-4">{b.name}</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm opacity-90">{b.addr}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm opacity-90">{b.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
