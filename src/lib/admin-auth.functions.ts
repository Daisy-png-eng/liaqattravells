import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(6).max(72),
});

export const resetAdminPassword = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Find user by email
    let userId: string | null = null;
    let page = 1;
    while (!userId) {
      const { data: list, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 200 });
      if (error) throw new Error(error.message);
      const match = list.users.find((u) => u.email?.toLowerCase() === data.email.toLowerCase());
      if (match) { userId = match.id; break; }
      if (list.users.length < 200) break;
      page++;
    }
    if (!userId) throw new Error("No account found with that email.");

    // Restrict reset to admin accounts only
    const { data: roles, error: rolesErr } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    if (rolesErr) throw new Error(rolesErr.message);
    if (!roles) throw new Error("This email is not an admin account.");

    const { error: updErr } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      password: data.password,
    });
    if (updErr) throw new Error(updErr.message);

    return { ok: true };
  });
