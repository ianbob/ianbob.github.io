import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="kenya-stripe h-1 w-full" />
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-display text-xl">L</span> */}
          <span className="font-display text-2xl tracking-wide">LEX <span className="text-primary">CARWASH</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why" className="hover:text-primary transition-colors">Why Us</a>
          <a href="#locations" className="hover:text-primary transition-colors">Locations</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="https://wa.me/254740381449" target="_blank" rel="noreferrer">
            <Phone className="h-4 w-4" /> Book Now
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
