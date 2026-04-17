import { PageShell } from "@/components/page-shell";

export default function ForgotPasswordPage() {
  return (
    <PageShell title="Reset password" description="Enter your email and we will send a secure reset link.">
      <form className="mx-auto flex max-w-md gap-2">
        <input type="email" required placeholder="Email address" className="w-full rounded-lg border px-4 py-3" />
        <button className="button button-primary">Send</button>
      </form>
    </PageShell>
  );
}
