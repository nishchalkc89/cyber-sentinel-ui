import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Differentiators", href: "#differentiators" },
  { label: "Performance", href: "#performance" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">

  {/* Logo Image */}
  <img
    src="/image.png"
    alt="RushIt Logo"
    className="w-20 h-20 object-contain drop-shadow-[0_0_6px_rgba(230,184,78,0.6)]"
  />



</div>


          {/* Center - Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Social */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialIcons.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-primary hover:gold-glow transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-8">
          © {new Date().getFullYear()} SecureDNA LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
