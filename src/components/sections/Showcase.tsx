import { motion } from "framer-motion";
import madinah from "@/assets/madinah.jpg";
import suite from "@/assets/luxury-suite.jpg";
import spiritual from "@/assets/spiritual.jpg";

export function Showcase() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury"
          >
            <img src={spiritual} alt="Elderly pilgrim in prayer" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="font-arabic text-3xl text-gold mb-2">السلام عليكم</div>
              <div className="text-sm text-white/80">A journey of the heart</div>
            </div>
          </motion.div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Spiritual Journey</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05] mb-6">
              More than travel —<br />a <em className="text-gradient-gold not-italic">sacred passage</em>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every Umrah we arrange is treated as one we would book for our own parents.
              From the moment you sign your contract to your safe return home, our team in
              Lahore and Saudi Arabia surrounds you with quiet, attentive care — so your
              heart is free to focus on what matters.
            </p>
            <div className="divider-gold mb-6" />
            <blockquote className="font-serif text-2xl italic text-foreground/85">
              "We treat every pilgrim as our honoured guest, and every family as our own."
            </blockquote>
            <div className="mt-3 text-sm text-muted-foreground">— Jam Liaqat Fareed, Founder & CEO</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="group relative aspect-[16/10] rounded-3xl overflow-hidden hover-lift"
          >
            <img src={madinah} alt="Al-Masjid an-Nabawi in Madinah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Madinah Munawwarah</div>
              <h3 className="font-serif text-3xl">Eight nights at the City of the Prophet ﷺ</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="group relative aspect-[16/10] rounded-3xl overflow-hidden hover-lift"
          >
            <img src={suite} alt="Luxury suite with Kaaba view" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">VIP Stays</div>
              <h3 className="font-serif text-3xl">Suites with a view of the Haram</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
