import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Umrah Packages — Liaqat Haseeb Travel & Tours" },
      { name: "description", content: "Explore our full collection of Umrah packages — Economy, Premium Family, Ramadan, Group and VIP Royal experiences." },
    ],
  }),
});

const allPackages = [
  { tier: "Essential", name: "Economy Umrah", price: "PKR 285,000", duration: "14 Nights", hotel: "4★ Hotels", flights: "Direct economy", highlights: ["Hotel, visa, ticket & transport included", "4★ Hotels near Haram", "Direct flights from LHE/KHI/ISB", "Bus transport throughout (JED–MAK–MAD)"] },
  { tier: "Essential", name: "Economy Umrah — 20 Nights", price: "PKR 345,000", duration: "20 Nights / 21 Days", hotel: "4★ Hotels", flights: "Direct economy", highlights: ["Hotel, visa, ticket & transport included", "Extended 20-night stay", "Direct flights", "Bus transport throughout"] },
  { tier: "Standard", name: "Comfort Umrah", price: "PKR 325,000", duration: "14 Nights", hotel: "4★ Hotels", flights: "Direct economy", highlights: ["Hotel, visa, ticket & transport included", "JED ⇄ MAK by private car", "MAK ⇄ MAD by bus", "Ziyarah not included (on demand)"] },
  { tier: "Standard", name: "Comfort Umrah — 20 Nights", price: "PKR 395,000", duration: "20 Nights / 21 Days", hotel: "4★ Hotels", flights: "Direct economy", highlights: ["Hotel, visa, ticket & transport included", "JED ⇄ MAK private car", "MAK ⇄ MAD bus", "Dedicated guide"] },
  { tier: "Signature", name: "Premium Family Umrah", price: "PKR 485,000", duration: "14 Nights", hotel: "5★ Hotels", flights: "Premium economy", highlights: ["Hotel, visa, ticket & transport included", "5★ Hotels — 400m from Haram", "Private car per pax (Sedan / Sonata / Tucson / 7-seater / GMC / Coaster)", "Dedicated family guide"], accent: true },
  { tier: "Signature", name: "Premium Family Umrah — 20 Nights", price: "PKR 595,000", duration: "20 Nights / 21 Days", hotel: "5★ Hotels", flights: "Premium economy", highlights: ["Hotel, visa, ticket & transport included", "Extended 20-night stay near Haram", "Private vehicle matched to group size", "Dedicated family guide"] },
  { tier: "Ramadan", name: "Ramadan Blessed Umrah", price: "PKR 695,000", duration: "20 Nights", hotel: "5★ Hotels", flights: "Premium economy", highlights: ["Last 10 nights of Ramadan", "Walking-distance hotels", "Iftar & Sehri arrangements", "Spiritual program"] },
  { tier: "Group", name: "Family & Group Umrah", price: "PKR 425,000", duration: "12 Nights", hotel: "5★ Hotels", flights: "Direct premium", highlights: ["For 10+ family groups", "Coaster transport available", "Group discount", "Custom itinerary"] },
  { tier: "VIP", name: "Royal Umrah Experience", price: "PKR 1,250,000", duration: "10 Nights", hotel: "Suites — Haram view", flights: "Business class direct", highlights: ["Haram-view luxury suites", "Business-class direct flights", "Chauffeured GMC / luxury transfers", "Personal mutawif"] },
  { tier: "Bespoke", name: "Private Bespoke Umrah", price: "On request", duration: "Custom", hotel: "Bespoke", flights: "Business class direct", highlights: ["Fully tailored itinerary", "Premium / Business class direct flights", "Concierge in Saudi", "24/7 personal coordinator"] },
];

function PackagesPage() {
  return (
    <SiteLayout>
      <section className="pt-44 pb-20 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Our Collections</div>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[1.02] max-w-4xl">
            Umrah packages, <em className="text-gradient-gold not-italic">curated</em> for every family.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From thoughtful economy journeys to royal VIP experiences, each itinerary is built on the
            same foundation: trusted hotels, premium airlines and the personal care of our Lahore team.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6">
          {allPackages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className={`group rounded-3xl p-8 sm:p-10 hover-lift ${
                p.accent ? "bg-gradient-emerald text-primary-foreground" : "bg-card border border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-gold">{p.tier}</div>
                  <h3 className={`mt-2 font-serif text-3xl ${p.accent ? "text-primary-foreground" : ""}`}>{p.name}</h3>
                  <div className={`mt-1 text-sm ${p.accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{p.duration} · {p.hotel} · {p.flights}</div>
                </div>
                <div className="text-right">
                  <div className={`font-serif text-3xl ${p.accent ? "text-gold" : "text-foreground"}`}>{p.price}</div>
                  <div className={`text-xs ${p.accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>per person</div>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {p.highlights.map((h) => (
                  <li key={h} className={`flex items-start gap-2 text-sm ${p.accent ? "text-primary-foreground/85" : "text-foreground/80"}`}>
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.accent ? "text-gold" : "text-secondary"}`} /> {h}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-all ${
                  p.accent ? "text-gold hover:gap-3" : "text-foreground hover:text-gold hover:gap-3"
                }`}>
                Request itinerary <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
