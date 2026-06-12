import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-kaaba.jpg";
import { Ornament } from "@/components/site/Ornament";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pilgrims praying around the Kaaba in Masjid al-Haram"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
        <div className="absolute inset-0 arabesque-pattern pointer-events-none" />
        <Ornament variant="medallion" className="absolute top-32 right-10 w-72 h-72 text-gold/15 animate-slow-spin hidden md:block" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl px-6 pb-20 sm:pb-28 pt-40 text-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mb-8 font-arabic text-2xl sm:text-3xl text-gold/90 tracking-wide"
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          Since 2009 · House of Trust
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-4xl"
        >
          Experience Umrah with <em className="text-gradient-gold not-italic">Trust, Luxury</em> &amp; Peace of Mind
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed"
        >
          Crafted journeys to Makkah and Madinah for families, elders, and VIP travellers —
          guided by Lahore's most trusted Umrah house since 2009.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link to="/packages"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium shadow-gold-glow hover:scale-[1.03] transition-transform">
            Explore Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors">
            Book Consultation
          </Link>
          <a href="https://wa.me/923281887646" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
            </div>
            <span>4.9 / 5 from 2,400+ pilgrim families</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/20" />
          <div>IATA approved · Saudi MoFA licensed</div>
        </motion.div>
      </div>
    </section>
  );
}
