interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-surface-elevated gold-border-glow hover:gold-glow transition-all duration-300 group fade-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* 🔥 Circular Service Image (FULL COVER) */}
      <div className="w-20 h-20 min-w-[5rem] rounded-full overflow-hidden gold-border shadow-[0_0_10px_rgba(230,184,78,0.25)] group-hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gold gradient divider */}
      <div className="hidden sm:block w-1 h-16 rounded-full gold-gradient opacity-60" />
      <div className="sm:hidden w-16 h-0.5 rounded-full gold-gradient opacity-60" />

      {/* Text content */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
