import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LogOut, Inbox, Users } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
  head: () => ({ meta: [{ title: "Dashboard · Liaqat Haseeb Admin" }, { name: "robots", content: "noindex" }] }),
});

type Inquiry = {
  id: string; created_at: string; full_name: string; phone: string; email: string;
  travellers: number | null; travel_month: string | null; message: string | null; status: string;
};
type Sub = { id: string; email: string; created_at: string };

function AdminDashboard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [tab, setTab] = useState<"inquiries" | "subs">("inquiries");

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [subs, setSubs] = useState<Sub[]>([]);

  // Auth gate
  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) { navigate({ to: "/admin/login" }); return; }
      await supabase.rpc("bootstrap_admin");
      const { data: roles } = await supabase
        .from("user_roles").select("role").eq("user_id", data.session.user.id);
      const admin = !!roles?.some((r: { role: string }) => r.role === "admin");
      if (!mounted) return;
      setIsAdmin(admin);
      setReady(true);
      if (!admin) toast.error("You don't have admin access.");
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate({ to: "/admin/login" });
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, [navigate]);

  // Load data
  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const [i, s] = await Promise.all([
        supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false }),
      ]);
      if (i.data) setInquiries(i.data as Inquiry[]);
      if (s.data) setSubs(s.data as Sub[]);
    })();
  }, [isAdmin]);

  const markStatus = async (id: string, status: string) => {
    await supabase.from("inquiries").update({ status }).eq("id", id);
    setInquiries((arr) => arr.map((x) => x.id === id ? { ...x, status } : x));
  };

  const removeSub = async (id: string) => {
    await supabase.from("newsletter_subscribers").delete().eq("id", id);
    setSubs((arr) => arr.filter((x) => x.id !== id));
  };

  if (!ready) return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">Loading…</div>;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
        <div>
          <h1 className="font-serif text-3xl mb-2">Access denied</h1>
          <p className="text-muted-foreground mb-4">Your account doesn't have admin access.</p>
          <button onClick={() => supabase.auth.signOut()} className="rounded-full bg-gradient-gold text-gold-foreground px-5 py-2">Sign out</button>
        </div>
      </div>
    );
  }

  const TabBtn = ({ id, icon: Icon, label, count }: { id: typeof tab; icon: typeof Inbox; label: string; count: number }) => (
    <button
      onClick={() => setTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${tab === id ? "bg-gradient-gold text-gold-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}
    >
      <Icon className="w-4 h-4" /> {label} <span className="opacity-70">({count})</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Admin</div>
            <h1 className="font-serif text-2xl">Dashboard</h1>
          </div>
          <button
            onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/admin/login" }); }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-2 mb-6 flex-wrap">
          <TabBtn id="inquiries" icon={Inbox} label="Inquiries" count={inquiries.length} />
          <TabBtn id="subs" icon={Users} label="Subscribers" count={subs.length} />
        </div>

        {tab === "inquiries" && (
          <div className="space-y-3">
            {inquiries.length === 0 && <p className="text-muted-foreground">No inquiries yet.</p>}
            {inquiries.map((i) => (
              <div key={i.id} className="rounded-2xl bg-card border border-border p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-medium">{i.full_name} <span className="text-xs text-muted-foreground ml-2">{new Date(i.created_at).toLocaleString()}</span></div>
                    <div className="text-sm text-muted-foreground">{i.email} · {i.phone}</div>
                    {(i.travellers || i.travel_month) && (
                      <div className="text-sm text-muted-foreground">
                        {i.travellers ? `${i.travellers} traveller(s)` : ""}{i.travellers && i.travel_month ? " · " : ""}{i.travel_month || ""}
                      </div>
                    )}
                    {i.message && <p className="mt-2 text-sm whitespace-pre-line">{i.message}</p>}
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${i.status === "new" ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground"}`}>{i.status}</span>
                    <select
                      value={i.status}
                      onChange={(e) => markStatus(i.id, e.target.value)}
                      className="text-xs rounded-full bg-background border border-border px-3 py-1"
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="booked">booked</option>
                      <option value="closed">closed</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "subs" && (
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            {subs.length === 0 && <p className="text-muted-foreground p-5">No subscribers yet.</p>}
            {subs.map((s) => (
              <div key={s.id} className="flex items-center justify-between px-5 py-3 border-b border-border last:border-0">
                <div>
                  <div className="text-sm">{s.email}</div>
                  <div className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString()}</div>
                </div>
                <button onClick={() => removeSub(s.id)} className="text-xs text-muted-foreground hover:text-destructive">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
