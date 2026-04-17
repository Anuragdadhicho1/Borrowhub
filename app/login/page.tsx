import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function LoginPage() {
  return (
    <PageShell title="Welcome back" description="Log in to access your dashboard, messages, and bookings.">
      <form className="mx-auto grid max-w-md gap-4">
        <input type="email" required placeholder="Email" className="rounded-lg border px-4 py-3" />
        <input type="password" required placeholder="Password" className="rounded-lg border px-4 py-3" />
        <button className="button button-primary">Login</button>
        <div className="flex items-center justify-between text-sm text-[color:var(--color-text-gray)]">
          <Link href="/forgot-password" className="hover:text-[color:var(--color-primary)]">Forgot password?</Link>
          <Link href="/register" className="hover:text-[color:var(--color-primary)]">Create account</Link>
        </div>
      </form>
    </PageShell>
  );
}
