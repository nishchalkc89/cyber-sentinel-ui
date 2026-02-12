import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Cloud Security Services & Products",
    description:
      "Advanced cloud-delivered security to protect your business seamlessly.",
  },
  {
    title: "Cyber Security Management (VCISO)",
    description:
      "Expert cybersecurity strategies to safeguard your company’s future.",
  },
  {
    title: "IT Project Management",
    description:
      "Efficient planning and execution to keep projects on track and within budget.",
  },
  {
    title: "Operational Technology Security",
    description:
      "Protecting critical infrastructure and industrial processes from cyber threats.",
  },
  {
    title: "Network & Infrastructure Security",
    description:
      "Securing your network from unauthorized access and data breaches.",
  },
  {
    title: "Enterprise IT Management",
    description:
      "Optimized IT solutions to streamline and enhance business operations.",
  },
  {
    title: "SMB Managed Cybersecurity",
    description:
      "Comprehensive security services tailored for small and mid-sized businesses.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services <span className="gold-gradient-text">We Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Rush IT LLC provides you with expertise in high-value managed security services. We deliver effective enterprise security risk management and situational awareness.
Get our cybersecurity consulting services to help your business build cyber resilience for each building block of your digital DNA.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
