import { motion } from "framer-motion";

const stats = [
  { n: "15+", l: "Years of trusted service" },
  { n: "12,000+", l: "Pilgrims served" },
  { n: "98%", l: "Returning families" },
  { n: "24/7", l: "Saudi ground support" },
];

export function Trust() {
  return (
    <section className="relative py-28 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Promise</div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              A legacy built on <em className="text-gradient-gold not-italic">trust</em>, perfected over fifteen years.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-background p-8 sm:p-10"
              >
                <div className="font-serif text-5xl sm:text-6xl text-gradient-gold">{s.n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
