import { Droplets, Clock, Leaf, ShieldCheck } from "lucide-react";
import detailImg from "@/assets/detail-shine.jpg";

const points = [
  { icon: Droplets, title: "Eco Foam", desc: "Biodegradable soaps — kind to your paint and to Kenya." },
  { icon: Clock, title: "Always On Time", desc: "Booked at 10? You're driving off by 10:15. Hakuna shida." },
  { icon: Leaf, title: "Water Smart", desc: "We recycle up to 70% of our water. Kila tone ni muhimu." },
  { icon: ShieldCheck, title: "Insured Care", desc: "Every vehicle is fully covered while in our hands." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-20">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={detailImg}
            alt="Glossy red car hood with water beads"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl object-cover w-full h-[500px] shadow-xl"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-secondary text-secondary-foreground rounded-xl p-5">
            <p className="font-display text-3xl">"This is the best car wash I've ever been to. Awesome experience allthrough."</p>
            <p className="text-sm mt-2 opacity-80">— Brian Kiragu, loyal customer since 2021</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Lex</p>
            <h2 className="font-display text-4xl sm:text-5xl text-balance">
              Built by Kenyans, <br /> for Kenyan roads.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="space-y-2">
                <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
