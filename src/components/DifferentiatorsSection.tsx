import { Check } from "lucide-react";

const differentiators = [
  "We manage assets, ensure compliance, and implement  Zero Trust Security for small businesses and government  agencies.",
  "Tailored for those without internal IT, we educate and help  develop well-run cybersecurity organizations.",
  "Our engineers use proven global processes to design unique cybersecurity solutions.",
  "Our portfolio includes Cloud Security, Cyber Security  Management, Project Management, and more.",
  "Addressing grand challenges, we implement combined  cyber-security systems and aim to secure digital resources  for governments and provide sustainable solutions for small  businesses.",
];

const DifferentiatorsSection = () => {
  return (
    <section id="differentiators" className="py-12 lg:py-20 relative overflow-hidden gold-gradient">
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

    {/* Image */}
    <img
      src="/service2.png"
      alt="Service"
      className="w-full h-full object-cover relative z-10"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/20 to-transparent pointer-events-none" />

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
