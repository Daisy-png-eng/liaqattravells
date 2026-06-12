export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.1 85)" />
              <stop offset="100%" stopColor="oklch(0.65 0.14 75)" />
            </linearGradient>
          </defs>
          <path d="M20 2 L24 14 L36 14 L26 22 L30 34 L20 27 L10 34 L14 22 L4 14 L16 14 Z"
            fill="url(#g)" opacity="0.95" />
          <circle cx="20" cy="20" r="3" fill="oklch(0.32 0.08 160)" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-serif text-base font-semibold tracking-wide text-foreground">Liaqat Haseeb</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Travel & Tours</div>
      </div>
    </div>
  );
}
