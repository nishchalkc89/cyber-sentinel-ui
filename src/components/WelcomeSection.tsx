const WelcomeSection = () => {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image (hidden on mobile, shown below text) */}
          <div className="hidden lg:flex justify-center fade-up">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 blob-shape bg-surface-elevated gold-border flex items-center justify-center overflow-hidden">
                <div className="text-muted-foreground text-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full gold-border flex items-center justify-center">
                    <span className="text-primary">👥</span>
                  </div>
                  team.jpg
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                Send Your Referrals
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-up fade-up-delay-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Welcome to <span className="gold-gradient-text">SecureDNA</span> LLC
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              SecureDNA LLC is a veteran-owned, SBA 8(a) certified cybersecurity consulting firm
              specializing in delivering enterprise-grade security solutions to federal agencies and
              commercial organizations. Our team of seasoned professionals brings decades of combined
              experience in protecting critical infrastructure, managing cyber risk, and ensuring
              regulatory compliance across diverse industry sectors.
            </p>

            {/* Mobile image - below paragraph */}
            <div className="flex lg:hidden justify-center mt-8">
              <div className="relative">
                <div className="w-56 h-56 blob-shape bg-surface-elevated gold-border flex items-center justify-center overflow-hidden">
                  <div className="text-muted-foreground text-sm text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full gold-border flex items-center justify-center">
                      <span className="text-primary">👥</span>
                    </div>
                    team.jpg
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                  Send Your Referrals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
