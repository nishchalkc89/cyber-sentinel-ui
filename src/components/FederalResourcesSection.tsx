import { Download } from "lucide-react";

const resources = [
  {
    title: "DSBS Profile",
    description:
      "View our Dynamic Small Business Search profile for contract vehicle details and certifications.",
  },
  {
    title: "SAM Profile",
    description:
      "Access our System for Award Management registration with full entity information and capabilities.",
  },
  {
    title: "Capability Statement",
    description:
      "Download our comprehensive capability statement outlining our services, past performance, and differentiators.",
  },
];

const FederalResourcesSection = () => {
  return (
    <section id="resources" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Federal <span className="gold-gradient-text">Resources</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access our federal profiles, certifications, and capability documentation for procurement officers and contracting professionals.
          </p>
        </div>

        {/* Resource Blocks */}
        <div className="space-y-6">
          {resources.map((resource, i) => (
            <div
              key={resource.title}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-surface-elevated gold-border-glow hover:gold-glow transition-all duration-300 fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Blob image */}
              <div className="w-20 h-20 min-w-[5rem] blob-shape bg-surface gold-border flex items-center justify-center">
                <span className="text-primary text-2xl">📄</span>
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-1">{resource.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{resource.description}</p>
              </div>

              {/* Download button */}
              <a
                href="#"
                className="gold-border-glow text-primary hover:gold-glow px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FederalResourcesSection;
