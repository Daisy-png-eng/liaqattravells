import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export const packages = [
  {
    tier: "Essential",
    name: "Economy Umrah",
    price: "PKR 285,000",
    duration: "14 Nights",
    highlights: ["4★ Hotels near Haram", "Direct flights", "Bus transport throughout", "Visa & ticket included"],
    accent: false,
  },
  {
    tier: "Standard",
    name: "Comfort Umrah",
    price: "PKR 325,000",
    duration: "14 Nights",
    highlights: ["4★ Hotels near Haram", "JED ⇄ MAK by private car", "MAK ⇄ MAD by bus", "Visa & ticket included"],
    accent: false,
  },
  {
    tier: "Signature",
    name: "Premium Family Umrah",
    price: "PKR 485,000",
    duration: "14 Nights",
    highlights: ["5★ Hotels — 400m view", "Premium airlines", "Private car per pax (Sedan → GMC / Coaster)", "Dedicated guide"],
    accent: true,
  },
  {
    tier: "Extended",
    name: "Economy Umrah — 20 Nights",
    price: "PKR 345,000",
    duration: "20 Nights / 21 Days",
    highlights: ["4★ Hotels near Haram", "Direct flights", "Bus transport throughout", "Extended spiritual stay"],
    accent: false,
  },
  {
    tier: "Extended",
    name: "Premium Umrah — 20 Nights",
    price: "PKR 595,000",
    duration: "20 Nights / 21 Days",
    highlights: ["5★ Hotels near Haram", "Premium economy flights", "Private vehicle for your group", "Dedicated guide"],
    accent: false,
  },
  {
    tier: "VIP",
    name: "Royal Umrah Experience",
    price: "PKR 1,250,000",
    duration: "10 Nights",
    highlights: ["Haram-view suites", "Business class direct", "Chauffeured GMC transfers", "Personal mutawif"],
    accent: false,
  },
];

export function Packages() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Featured Packages</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05]">
              Curated journeys to the <em className="text-gradient-gold not-italic">Holy Cities</em>.
            </h2>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all">
            View all packages <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-3xl p-8 sm:p-10 hover-lift ${
                p.accent
                  ? "bg-gradient-emerald text-primary-foreground shadow-luxury"
                  : "bg-card border border-border"
              }`}
            >
              {p.accent && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] uppercase tracking-[0.2em] font-medium">
                  Most chosen
                </div>
              )}
              <div className={`text-xs uppercase tracking-[0.25em] ${p.accent ? "text-gold" : "text-gold"}`}>
                {p.tier}
              </div>
              <h3 className={`mt-4 font-serif text-3xl ${p.accent ? "text-primary-foreground" : ""}`}>{p.name}</h3>
              <div className={`mt-1 text-sm ${p.accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{p.duration}</div>

              <div className="my-8 flex items-baseline gap-2">
                <div className={`font-serif text-4xl ${p.accent ? "text-gold" : "text-foreground"}`}>{p.price}</div>
                <div className={`text-xs ${p.accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>/ per person</div>
              </div>

              <ul className="space-y-3 mb-10">
                {p.highlights.map((h) => (
                  <li key={h} className={`flex items-start gap-3 text-sm ${p.accent ? "text-primary-foreground/85" : "text-foreground/80"}`}>
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.accent ? "text-gold" : "text-secondary"}`} />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium transition-all ${
                  p.accent
                    ? "bg-gradient-gold text-gold-foreground hover:scale-[1.02]"
                    : "border border-border hover:border-gold hover:text-gold"
                }`}
              >
                Reserve this journey
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
