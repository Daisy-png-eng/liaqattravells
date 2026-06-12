import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setBusy(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: email.trim() });
    setBusy(false);
    if (error) {
      toast.error(error.code === "23505" ? "You're already subscribed." : "Subscription failed.");
      return;
    }
    toast.success("Subscribed. Jazak Allah khayr!");
    setEmail("");
  };
  return (
    <form onSubmit={submit} className="mt-5 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 min-w-0 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        disabled={busy}
        className="rounded-full bg-gradient-gold text-gold-foreground px-4 py-2 text-sm font-medium disabled:opacity-60"
      >
        {busy ? "…" : "Subscribe"}
      </button>
    </form>
  );
}

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

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-emerald text-primary-foreground">
      <div className="absolute inset-0 islamic-pattern" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo className="[&_*]:text-primary-foreground" />
          <p className="mt-6 max-w-md text-sm text-primary-foreground/70 leading-relaxed font-serif italic">
            "Our company is based on trust and commitment." Fifteen years of guiding pilgrims and families
            to the sacred lands with grace, dignity and uncompromising care.
          </p>
          <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /><span>Office No. 40-41, Fero Centre, 54-Shadman Market, Lahore, Pakistan</span></div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold shrink-0" /><span>+92 42 3546 6400&nbsp;&nbsp;·&nbsp;&nbsp;0328 1887646&nbsp;&nbsp;·&nbsp;&nbsp;0302 4358407</span></div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold shrink-0" /><span>liaqathaseebpk786@gmail.com</span></div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/liaqathaseebpk?igsh=MTRmZDllaWFyd24=" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <InstagramIcon className="w-4 h-4 text-gold shrink-1" /><span>@liaqathaseebpk</span>
              </a>
              <span className="text-primary-foreground/30">|</span>
              <a href="https://www.facebook.com/profile.php?id=61587169725600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FacebookIcon className="w-4 h-4 text-gold shrink-0" /><span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/packages" className="hover:text-gold transition-colors">Umrah Packages</Link></li>
            <li><Link to="/packages" className="hover:text-gold transition-colors">VIP Luxury</Link></li>
            <li><Link to="/packages" className="hover:text-gold transition-colors">Family & Group</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70">Seasonal Umrah offers and pilgrimage guidance, sent occasionally.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Liaqat Haseeb Travel & Tours (Pvt) Ltd. All rights reserved.</div>
          <div className="font-arabic text-gold text-base">بسم الله الرحمن الرحيم</div>
        </div>
      </div>
    </footer>
  );
}
