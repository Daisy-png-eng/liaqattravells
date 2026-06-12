import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How early should I book my Umrah?", a: "We recommend booking 6–8 weeks in advance for standard packages, and 3–4 months for Ramadan or VIP packages where premium hotels sell out quickly." },
  { q: "Do you handle Umrah visas?", a: "Yes — full visa processing, biometrics coordination and Saudi MoFA approvals are included in every package. Our visa team has a 99% approval rate." },
  { q: "Can elderly parents travel comfortably?", a: "Absolutely. Wheelchair assistance, dedicated guides, ground-floor hotel rooms and direct flights are standard on our family and VIP packages." },
  { q: "What payment methods do you accept?", a: "Bank Transfer, JazzCash, Easypaisa and Cash. A partial advance reserves your package; the balance is settled before departure." },
  { q: "Do you arrange custom group Umrah?", a: "Yes — for masajid, schools, corporate groups and extended families of 15+, we design fully customised itineraries with dedicated mutawif and ground support." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Common Questions</div>
          <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05]">
            Everything you need to know.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-6 text-left hover:bg-muted/40 transition-colors"
              >
                <span className="font-serif text-xl">{f.q}</span>
                <Plus className={`w-5 h-5 text-gold shrink-0 transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 sm:px-8 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
