interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-surface-elevated gold-border-glow hover:gold-glow transition-all duration-300 group fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Oval image placeholder */}
      <div className="w-16 h-20 sm:w-20 sm:h-24 min-w-[4rem] sm:min-w-[5rem] rounded-[50%] bg-surface gold-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <span className="text-primary text-xl">🔒</span>
      </div>

      {/* Gold gradient bar - vertical on desktop, horizontal on mobile */}
      <div className="hidden sm:block w-1 h-16 rounded-full gold-gradient opacity-60" />
      <div className="sm:hidden w-16 h-0.5 rounded-full gold-gradient opacity-60" />

      {/* Text */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
