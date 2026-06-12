import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { resetAdminPassword } from "@/lib/admin-auth.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({ meta: [{ title: "Admin · Liaqat Haseeb" }, { name: "robots", content: "noindex" }] }),
});

function AdminLogin() {
  const navigate = useNavigate();
  const resetPwd = useServerFn(resetAdminPassword);
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) { toast.error(error.message); return; }
        toast.success("Account created. Check your email to confirm, then sign in.");
        setMode("signin");
      } else if (mode === "forgot") {
        if (newPassword.length < 6) { toast.error("Password must be at least 6 characters."); return; }
        if (newPassword !== confirmPassword) { toast.error("Passwords do not match."); return; }
        try {
          await resetPwd({ data: { email, password: newPassword } });
          toast.success("Password updated. You can sign in now.");
          setPassword(newPassword);
          setNewPassword("");
          setConfirmPassword("");
          setMode("signin");
        } catch (err) {
          toast.error(err instanceof Error ? err.message : "Failed to reset password.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) { toast.error(error.message); return; }
        await supabase.rpc("bootstrap_admin");
        navigate({ to: "/admin" });
      }
    } finally {
      setBusy(false);
    }
  };

  const title = mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Reset password";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-card border border-border p-8 shadow-card-luxury space-y-4">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Admin Area</div>
          <h1 className="font-serif text-3xl mt-2">{title}</h1>
        </div>
        <input
          type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none"
        />
        {mode === "forgot" ? (
          <>
            <input
              type="password" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none"
            />
            <input
              type="password" required minLength={6} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none"
            />
          </>
        ) : (
          <input
            type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:border-gold focus:outline-none"
          />
        )}
        <button type="submit" disabled={busy} className="w-full py-3 rounded-full bg-gradient-gold text-gold-foreground font-medium disabled:opacity-60">
          {busy ? "…" : mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Update password"}
        </button>

        {mode === "signin" && (
          <button type="button" onClick={() => setMode("forgot")} className="w-full text-sm text-muted-foreground hover:text-gold">
            Forgot password?
          </button>
        )}

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="w-full text-sm text-muted-foreground hover:text-gold"
        >
          {mode === "signin"
            ? "Need an account? Sign up"
            : mode === "signup"
              ? "Already have an account? Sign in"
              : "Back to sign in"}
        </button>
        <p className="text-xs text-muted-foreground text-center">
          The first signed-in account automatically becomes the admin.
        </p>
      </form>
    </div>
  );
}
