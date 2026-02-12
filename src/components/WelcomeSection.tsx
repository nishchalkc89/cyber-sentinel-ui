const WelcomeSection = () => {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="dotted-grid absolute inset-0 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left - Image (Desktop) */}
          <div className="hidden lg:flex justify-center fade-up">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 blob-shape bg-surface-elevated gold-border overflow-hidden">
                
                <img
                  src="/team.png"
                  alt="Team"
                  className="w-full h-full object-cover"
                />

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
              Welcome to <span className="gold-gradient-text">Rush IT LLC</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Let’s add maximum value and bring success to your business through
              high-quality IT consulting services. From downtime to reduced employee
              productivity and potential security breaches, we will take care of your IT needs.
              <br /><br />
              Experience our difference. Let us show you through our carefully chosen
              technology solutions.
            </p>

            {/* Mobile image */}
            <div className="flex lg:hidden justify-center mt-8">
              <div className="relative">
                <div className="w-56 h-56 blob-shape bg-surface-elevated gold-border overflow-hidden">
                  
                  <img
                    src="/team.png"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />

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
