interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface-elevated gold-border-glow hover:gold-glow transition-all duration-300 group fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Circular image placeholder */}
      <div className="w-20 h-20 min-w-[5rem] rounded-full bg-surface gold-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <div className="text-muted-foreground text-xs text-center">
          <span className="text-primary text-xl">🔒</span>
        </div>
      </div>

      {/* Gold gradient bar */}
      <div className="w-1 h-16 rounded-full gold-gradient opacity-60" />

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
