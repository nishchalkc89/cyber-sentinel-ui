const performances = [
  {
    name: "Prestige Pratice Managment & IT services",
    date: "03/01/2022",
    value: "$40,000",
    details: "Desktop/Endpoint",
    logo: "/perf-logo.png",
  },
  {
    name: "Breau of Labor and Statistics",
    date: "03/01/2020",
    value: "$47,000,000",
    details: "2020-006-CIO-SP3-SC",
    logo: "/labor.png",
  },
  {
    name: "Identity Security",
    date: "09/01/2023",
    value: "$10,000",
    details: "Forescout",
    logo: "/identity.png",
  },
  {
    name: "Artist Spotlight",
    date: "03/01/2020",
    value: "$15,000",
    details: "Desktop/Endpoint",
    logo: "/artist.png",
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
              <div className="w-16 h-16 rounded-full gold-border mx-auto mb-4 flex items-center justify-center bg-white p-2">
  <img
    src={perf.logo}
    alt={perf.name}
    className="w-full h-full object-contain"
  />
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
