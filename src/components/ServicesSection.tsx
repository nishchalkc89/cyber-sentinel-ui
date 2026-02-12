import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Cloud Security Services & Products",
    description:
      "Comprehensive cloud security assessments, architecture reviews, and implementation of security controls across AWS, Azure, and GCP environments.",
  },
  {
    title: "Cyber Security Management (VCISO)",
    description:
      "Virtual Chief Information Security Officer services providing strategic leadership, policy development, and risk management oversight.",
  },
  {
    title: "IT Project Management",
    description:
      "Expert project management for cybersecurity initiatives, ensuring on-time delivery, budget compliance, and stakeholder alignment.",
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
            We deliver a comprehensive suite of cybersecurity services designed to protect,
            detect, and respond to the evolving threat landscape.
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
