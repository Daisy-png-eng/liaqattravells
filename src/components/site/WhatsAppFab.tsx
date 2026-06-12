import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/923281887646"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex w-14 h-14 rounded-full bg-[#25D366] items-center justify-center shadow-luxury hover:scale-110 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-6 h-6 text-white relative" />
      </span>
      <span className="hidden group-hover:inline-block bg-card text-card-foreground text-sm px-4 py-2 rounded-full shadow-luxury border border-border whitespace-nowrap">
        WhatsApp our advisor
      </span>
    </a>
  );
}
