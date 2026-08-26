import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="kenya-stripe h-2 absolute top-0 left-0 right-0" />
          <h2 className="font-display text-4xl sm:text-6xl text-balance max-w-2xl mx-auto">
            Ready to make your ride shine?
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-lg mx-auto">
            Book a slot in 30 seconds. We'll have resfreshments for you while you wait.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-6 text-base">
              <a href="tel:+254740381449">
                <Phone className="h-5 w-5" /> Call 0740 381449
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-6 text-base"
            >
              <a
                href="https://wa.me/254740381449"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
