import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Liaqat Haseeb Travel & Tours" },
      { name: "description", content: "Speak with a senior Umrah travel advisor. Lahore office, WhatsApp and phone available." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get("full_name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      travellers: fd.get("travellers") ? Number(fd.get("travellers")) : null,
      travel_month: String(fd.get("travel_month") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
    };
    if (!payload.full_name || !payload.phone || !payload.email) {
      toast.error("Please fill name, phone and email.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("inquiries").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send. Please try again.");
      return;
    }
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Get in Touch</div>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[1.02] max-w-3xl">
            Begin your <em className="text-gradient-gold not-italic">sacred journey</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Share a few details and a senior advisor will reach out within 24 hours
            with a tailored itinerary and quote.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit our office", body: "Office No. 40-41, Fero Centre, 54-Shadman Market, Lahore, Pakistan" },
              { icon: Phone, title: "Call us", body: "+92 42 3546 6400\n0328 1887646\n0302 4358407" },
              { icon: Mail, title: "Email", body: "liaqathaseebpk786@gmail.com" },
              { icon: MessageCircle, title: "WhatsApp", body: "Tap the floating button for instant chat with our team." },
              { icon: InstagramIcon, title: "Instagram", body: "@liaqathaseebpk", href: "https://www.instagram.com/liaqathaseebpk?igsh=MTRmZDllaWFyd24=" },
              { icon: FacebookIcon, title: "Facebook", body: "Liaqat Haseeb Travel & Tours", href: "https://www.facebook.com/profile.php?id=61587169725600" },
            ].map((c) => {
              const Card = (
                <div className="glass rounded-2xl p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-emerald flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-muted-foreground whitespace-pre-line mt-1">{c.body}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                  {Card}
                </a>
              ) : (
                <div key={c.title}>{Card}</div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-card-luxury"
          >
            <h2 className="font-serif text-3xl mb-2">Request a consultation</h2>
            <p className="text-sm text-muted-foreground mb-8">No obligation. We'll respond within one business day.</p>
            {sent ? (
              <div className="py-16 text-center">
                <div className="font-arabic text-3xl text-gold mb-3">جزاك الله خيرا</div>
                <div className="font-serif text-2xl">Your inquiry has been received.</div>
                <p className="mt-3 text-muted-foreground">Our advisor will reach out shortly.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="full_name" label="Full name" required />
                <Field name="phone" label="Phone" type="tel" required />
                <Field name="email" label="Email" type="email" required className="sm:col-span-2" />
                <Field name="travellers" label="Number of travellers" type="number" />
                <Field name="travel_month" label="Preferred travel month" />
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Tell us about your journey</label>
                  <textarea name="message" rows={4} className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none transition-colors" />
                </div>
                <button type="submit" disabled={submitting} className="sm:col-span-2 mt-2 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium shadow-gold-glow hover:scale-[1.02] transition-transform disabled:opacity-60">
                  {submitting ? "Sending…" : "Send inquiry"}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", className = "", required }: { label: string; name: string; type?: string; className?: string; required?: boolean }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none transition-colors" />
    </div>
  );
}
