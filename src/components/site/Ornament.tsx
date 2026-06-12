interface OrnamentProps {
  className?: string;
  variant?: "divider" | "corner" | "medallion";
}

export function Ornament({ className = "", variant = "divider" }: OrnamentProps) {
  if (variant === "medallion") {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
        <g stroke="currentColor" strokeWidth="0.7" opacity="0.9">
          <circle cx="60" cy="60" r="48" />
          <circle cx="60" cy="60" r="36" />
          <path d="M60 18 L72 48 L102 48 L78 66 L86 96 L60 78 L34 96 L42 66 L18 48 L48 48 Z" />
          <circle cx="60" cy="60" r="20" />
          <path d="M60 40 L72 60 L60 80 L48 60 Z" />
        </g>
      </svg>
    );
  }
  if (variant === "corner") {
    return (
      <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none">
        <g stroke="currentColor" strokeWidth="0.8" opacity="0.7">
          <path d="M0 0 H40 M0 0 V40" />
          <path d="M0 0 Q20 4 28 12 T40 40" />
          <circle cx="6" cy="6" r="2" />
        </g>
      </svg>
    );
  }
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <g stroke="currentColor" strokeWidth="1">
          <path d="M16 2 L20 12 L30 12 L22 18 L25 28 L16 22 L7 28 L10 18 L2 12 L12 12 Z" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </g>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
