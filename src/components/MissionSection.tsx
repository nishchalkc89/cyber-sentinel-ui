const MissionSection = () => {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gold-gradient-text">Mission</span> Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our mission is to address the grand challenges in cybersecurity
and privacy by implementing combined cyber-security and
cyber-defense systems.
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center fade-up fade-up-delay-2">
            <div className="relative">
              <div className="w-56 h-72 sm:w-72 sm:h-80 blob-shape-2 bg-surface-elevated gold-border flex items-center justify-center overflow-hidden floating-blob">
                <div className="text-muted-foreground text-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full gold-border flex items-center justify-center">
                    <span className="text-primary">🎯</span>
                  </div>
                  service1.jpg
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                Join Our Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
