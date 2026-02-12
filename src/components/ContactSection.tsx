import { Phone, Mail, User, MapPin, Hash, FileText } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890" },
  { icon: Mail, label: "Email", value: "info@securedna.com" },
  { icon: User, label: "POC", value: "John Doe, CEO" },
  { icon: MapPin, label: "Address", value: "1234 Cyber Lane, Suite 100, Washington, DC 20001" },
  { icon: Hash, label: "NAICS", value: "541512, 541519, 541611, 541690" },
  { icon: FileText, label: "PSC", value: "D302, D306, D307, D399" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center fade-up">
            <div className="w-64 h-64 sm:w-80 sm:h-80 blob-shape bg-surface-elevated gold-border flex items-center justify-center floating-blob">
              <div className="text-muted-foreground text-sm text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full gold-border flex items-center justify-center">
                  <span className="text-primary">📞</span>
                </div>
                contact.jpg
              </div>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="fade-up fade-up-delay-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Contact <span className="gold-gradient-text">Information</span>
            </h2>

            <div className="space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-[2.5rem] rounded-full gold-gradient flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary text-sm font-medium">{item.label}</p>
                    <p className="text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
