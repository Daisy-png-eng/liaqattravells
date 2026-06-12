import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-card-luxury" : "bg-transparent"
        }`}>
          <Link to="/"><Logo /></Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-gold-foreground text-sm font-medium shadow-gold-glow hover:scale-[1.03] transition-transform"
            >
              Book Consultation
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-muted text-sm font-medium">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
