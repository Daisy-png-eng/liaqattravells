import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import madinah from "@/assets/madinah.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Liaqat Haseeb Travel & Tours" },
      { name: "description", content: "Fifteen years of trust, commitment and luxury Umrah travel from the heart of Lahore." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Our Story</div>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[1.02] max-w-4xl">
            Built on <em className="text-gradient-gold not-italic">trust</em>. Perfected through service.
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury"
          >
            <img src={madinah} alt="Madinah" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed font-serif">
            <p>
              Our founder, <strong>Jam Liaqat Fareed</strong>, spent nearly a decade working in the
              very same office at Fero Centre, Shadman Market — serving pilgrims with humility,
              learning every detail of the sacred journey, and building relationships that would
              last a lifetime.
            </p>
            <p>
              In <strong>2018</strong>, he took a leap of faith and opened his own company,
              <em>Azowar Hajj & Umrah</em>, turning the skills he had honed into a business built
              on the same trust and integrity that had defined his years as an employee. But fate
              had other plans: when the COVID-19 pandemic swept the world, borders closed and
              the company faced a crisis it could not survive.
            </p>
            <p>
              Yet the calling never left him. Between 2020 and 2023, Jam Liaqat Fareed continued
              to serve pilgrims from home — quietly, patiently, refusing to let go of the trust
              people had placed in him. In <strong>2023</strong>, he returned stronger, partnering
              with <strong>Mehmood Ali</strong> to establish <strong>Liaqat Haseeb Travel & Tours</strong>.
            </p>
            <p>
              Today, that same office where he once worked as an employee is the headquarters of
              his own company — a testament to patience, faith, and the promise that hard work
              is never wasted. His son, <strong>Sardar Mujeeb ur Rehman</strong>, serves as Accounts
              Manager, ensuring the values of the father live on in the next generation.
            </p>
            <div className="divider-gold !my-8" />
            <blockquote className="text-3xl italic">
              "Our company is based on trust and commitment."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Our Team</div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] max-w-2xl mb-16">
            The people behind your <em className="text-gradient-gold not-italic">journey</em>.
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "Jam Liaqat Fareed", role: "Founder & CEO", desc: "A decade of service, a lifetime of trust. The same office where he once worked is now his own." },
              { name: "Sardar Mujeeb ur Rehman", role: "Accounts Manager", desc: "Son of the founder, carrying forward a legacy of honesty and care in every transaction." },
              { name: "Mehmood Ali", role: "Director", desc: "Partner since 2023, bringing vision and structure to the company\u2019s next chapter." },
            ].map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl bg-card border border-border p-8 text-center hover-lift"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-emerald flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-gold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
