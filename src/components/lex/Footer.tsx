const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="kenya-stripe h-1 w-full" />
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-2xl">LEX <span className="text-primary">CARWASH</span></p>
          <p className="text-sm opacity-70 mt-3 max-w-xs">Kenya's most trusted carwash. Safi, fast and friendly — every single time.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#why" className="hover:text-primary">Why Lex</a></li>
            <li><a href="#locations" className="hover:text-primary">Branches</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Get in Touch</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="tel:0740381449" className="hover:text-primary">0740 381449</a></li>
            <li><a href="mailto:hello@lexcarwash.co.ke" className="hover:text-primary">hello@lexcarwash.co.ke</a></li>
            <li>Nairobi, Kenya 🇰🇪</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Lex Carwash Ltd. Made with pride by 1anbob.
      </div>
    </footer>
  );
};

export default Footer;
