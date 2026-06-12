import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-emerald text-primary-foreground p-12 sm:p-20 shadow-luxury">
          <div className="absolute inset-0 islamic-pattern" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Begin Your Journey</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05]">
              Let us prepare a journey worthy of your <em className="text-gradient-gold not-italic">intention</em>.
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
              Speak with a senior travel advisor today. We'll design a private itinerary
              suited to your family, schedule and budget — without obligation.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium hover:scale-[1.03] transition-transform">
                Book a private consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+923281887646" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
                Call 0328 1887646
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
