import { Check } from "lucide-react";

const differentiators = [
  "SBA 8(a) Certified Small Disadvantaged Business",
  "Veteran-Owned Small Business (VOSB)",
  "HUBZone Certified",
  "Top Secret Facility Clearance",
  "CMMI Level 3 Appraised",
  "ISO 27001 Certified",
  "24/7 Security Operations Center",
  "Proven Federal Contract Performance",
];

const DifferentiatorsSection = () => {
  return (
    <section id="differentiators" className="py-20 lg:py-28 relative overflow-hidden gold-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Bullet Points */}
          <div className="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-primary-foreground">
              Our Differentiators
            </h2>
            <ul className="space-y-4">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 min-w-[1.5rem] rounded-full bg-primary-foreground/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center fade-up fade-up-delay-2">
            <div className="w-full max-w-md h-72 sm:h-96 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/20 to-transparent" />
              <div className="text-primary-foreground/60 text-sm text-center relative z-10">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                  <span className="text-xl">🏢</span>
                </div>
                service2.jpg
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
