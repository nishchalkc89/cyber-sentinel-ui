const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 lg:pt-0 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="fade-up">
            <div className="flex gap-6 mb-6">
              <div className="gold-border-glow rounded-full px-4 py-1.5 text-xs font-medium text-primary">
                CAGE: <span className="text-foreground">XXXXX</span>
              </div>
              <div className="gold-border-glow rounded-full px-4 py-1.5 text-xs font-medium text-primary">
                UEI: <span className="text-foreground">XXXXXXXXXXXX</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Delivering Effective Security Solutions for Your{" "}
              <span className="gold-gradient-text">Digital DNA</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              We provide comprehensive cybersecurity consulting, risk management, and compliance solutions
              to protect your organization's most critical digital assets.
            </p>

            <a
              href="#contact"
              className="gold-gradient text-primary-foreground px-8 py-3.5 rounded-full font-semibold inline-block hover:gold-glow transition-all duration-300 text-base"
            >
              Stay Connected
            </a>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex justify-center fade-up fade-up-delay-2">
            {/* Decorative circles */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Blob image container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 blob-shape gold-gradient floating-blob flex items-center justify-center relative">
              <div className="w-[95%] h-[95%] blob-shape bg-surface-elevated flex items-center justify-center overflow-hidden">
                <div className="text-muted-foreground text-sm text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full gold-border flex items-center justify-center">
                    <span className="text-primary text-2xl">🛡️</span>
                  </div>
                  hero-img.jpg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
