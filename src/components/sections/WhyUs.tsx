import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, Plane, Hotel, Users } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Trusted", body: "Saudi MoFA approved with full IATA accreditation and complete travel insurance for every pilgrim." },
  { icon: Sparkles, title: "Premium Experience", body: "Hand-picked 5★ hotels, premium airlines and chauffeured ground transport — every detail considered." },
  { icon: HeartHandshake, title: "Family First", body: "Dedicated arrangements for elders, women and children — wheelchairs, meals and prayer guidance." },
  { icon: Plane, title: "Best Airlines", body: "Direct flights via Saudia, Emirates and Qatar Airways with business-class options on VIP packages." },
  { icon: Hotel, title: "Haram-View Hotels", body: "Partnerships with Fairmont, Hilton Suites and Pullman Zamzam — many within 200m of the Haram." },
  { icon: Users, title: "Personal Guidance", body: "Multilingual Pakistani mutawif on the ground in Makkah and Madinah, available 24/7 for your group." },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Liaqat Haseeb</div>
          <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05]">
            Six reasons families return to us, year after year.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-background p-10 hover:bg-card transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-emerald flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
