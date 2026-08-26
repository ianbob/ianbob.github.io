import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-carwash.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-secondary text-xs font-semibold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Karibu Lex Carwash · Lower Kabete & Wangige
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Safi. Shiny. <br />
            <span className="text-primary">Sawa Sawa.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Kenya's most trusted carwash. We treat every ride — from boda matatu to your weekend Prado —
            like it's the President's. Step in dusty, drive out spotless.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 text-base">
              <a href="https://wa.me/254740381449?text=Hi%20Lex%20Carwash%2C%20I%27d%20like%20to%20book%20a%20car%20wash" target="_blank" rel="noreferrer">
                Book a Wash <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">4.9/5</span> from 1,200+ Kenyan drivers
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-secondary rounded-2xl translate-x-4 translate-y-4" />
          <img
            src={heroImg}
            alt="Lex Carwash attendant washing a car at sunset in Kenya"
            width={1600}
            height={1100}
            className="relative rounded-2xl object-cover w-full h-[460px] lg:h-[560px] shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden sm:block">
            <p className="text-3xl font-display text-primary leading-none">15min</p>
            <p className="text-xs text-muted-foreground mt-1">Average wash time</p>
          </div>
          <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-lg hidden sm:block">
            <p className="text-3xl font-display leading-none">KSh 300</p>
            <p className="text-xs opacity-80 mt-1">Starting from</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
