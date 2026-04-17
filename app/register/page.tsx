import { PageShell } from "@/components/page-shell";

export default function RegisterPage() {
  return (
    <PageShell title="Create your BorrowHub account" description="Join a trusted rental community in under a minute.">
      <form className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
        <input required placeholder="First name" className="rounded-lg border px-4 py-3" />
        <input required placeholder="Last name" className="rounded-lg border px-4 py-3" />
        <input required type="email" placeholder="Email" className="rounded-lg border px-4 py-3 sm:col-span-2" />
        <input required type="password" placeholder="Password" className="rounded-lg border px-4 py-3 sm:col-span-2" />
        <button className="button button-primary sm:col-span-2">Create account</button>
      </form>
    </PageShell>
  );
}
