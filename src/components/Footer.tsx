import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Leaf className="text-accent" size={18} />
            <span className="font-serif text-base text-foreground">ESG Portfolio</span>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} | Crafted with purpose for a sustainable future
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#home" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#experience" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
