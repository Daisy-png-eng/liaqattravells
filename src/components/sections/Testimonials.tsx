import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Alhamdulillah, our entire family — including my 78-year-old mother — was looked after like royalty. Wheelchair, hotel near the Haram, every prayer arranged. May Allah reward them.",
    name: "Dr. Ahmed Raza",
    role: "Family of 8 · Lahore",
  },
  {
    quote: "I have travelled with many agencies. None match the warmth and discipline of Liaqat Haseeb. Our VIP Umrah was flawless from Islamabad to Madinah.",
    name: "Mrs. Fatima Ali",
    role: "VIP Package · London",
  },
  {
    quote: "Booked three times now. Their guide in Makkah, brother Faisal, made our parents feel safe at every step. This is our family's Umrah company for life.",
    name: "Imran Sheikh",
    role: "Returning client · Karachi",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Voices of Our Pilgrims</div>
          <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05]">
            Trusted by families across <em className="text-gradient-gold not-italic">three continents</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 hover-lift"
            >
              <Quote className="w-8 h-8 text-gold mb-6" />
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic mb-8">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-5">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
