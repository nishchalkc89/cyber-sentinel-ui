const performances = [
  {
    name: "Enterprise SOC Modernization",
    date: "2022 – 2024",
    value: "$4.2M",
    details: "24/7 SOC operations for federal civilian agency with SIEM implementation and threat hunting.",
  },
  {
    name: "Cloud Migration Security",
    date: "2023 – Present",
    value: "$2.8M",
    details: "Security architecture and compliance for multi-cloud migration across AWS and Azure.",
  },
  {
    name: "Zero Trust Implementation",
    date: "2021 – 2023",
    value: "$3.5M",
    details: "Enterprise-wide Zero Trust architecture deployment including identity management and microsegmentation.",
  },
];

const PastPerformanceSection = () => {
  return (
    <section id="performance" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Past <span className="gold-gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering mission-critical cybersecurity solutions on time and within budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {performances.map((perf, i) => (
            <div
              key={perf.name}
              className="p-6 rounded-2xl bg-surface-elevated gold-border-glow hover:gold-glow transition-all duration-300 fade-up text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 rounded-full gold-border mx-auto mb-4 flex items-center justify-center bg-surface">
                <span className="text-primary text-xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{perf.name}</h3>
              <p className="text-primary text-sm font-medium mb-1">{perf.date}</p>
              <p className="gold-gradient-text text-2xl font-bold mb-3">{perf.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{perf.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastPerformanceSection;
