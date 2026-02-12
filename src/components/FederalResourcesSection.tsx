import { Download } from "lucide-react";

const resources = [
  {
    title: "DSBS Profile",
    description:
      "The DSBS profile provides a comprehensive overview of a company's certifications, socioeconomic statuses, and specialized capabilities. It highlightsthe industries served, key services offered, past performance, and certifications, making it a key resource for federal agencies seeking qualified contractors.",
  },
  {
    title: "SAM Profile",
    description:
      "The SAM profile ensures a company’s active registration for federal contracts and compliance with government regulations. It includes essential details such as the CAGE code, UEI, NAICS codes, and socioeconomic certifications, confirming eligibility for award opportunities and participation in federal procurement.",
  },
  {
    title: "Capability Statement",
    description:
      "The Capability Statement is a concise document showcasing a company’s expertise, specialized services, and past performance. It outlines core competencies, differentiators, key projects, and certifications, positioning the company as a reliable and qualified partner for federal and commercial contracts.",
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
            "Welcome to the RUSH IT Federal Resource Center, a comprehensive hub showcasing our unwavering commitment to excellence in federal contracting. Featuring our DSBS profile, SAM registration, and detailed capability statement, these resources highlight our proven expertise, regulatory compliance, and exceptional performance history. Explore our credentials to discover why RUSH IT is a trusted partner in delivering innovative, reliable solutions tailored to the needs of government agencies nationwide."
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
