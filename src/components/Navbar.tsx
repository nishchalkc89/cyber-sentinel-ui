import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#services" },
  { label: "Differentiator", href: "#differentiators" },
  { label: "Performance", href: "#performance" },
  { label: "Federal Resources", href: "#resources" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-foreground font-bold text-lg hidden sm:block">SecureDNA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+1234567890"
              className="gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:gold-glow transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-muted-foreground hover:text-primary transition-colors text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            (123) 456-7890
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
