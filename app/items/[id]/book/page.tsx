import { PageShell } from "@/components/page-shell";

export default async function BookItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <PageShell title="Confirm your booking" description={`Review rental dates, pricing, and payment details for item: ${id}.`}>
      <form className="grid gap-4 sm:grid-cols-2">
        <input required type="date" className="rounded-lg border px-4 py-3" />
        <input required type="date" className="rounded-lg border px-4 py-3" />
        <textarea placeholder="Special instructions" className="rounded-lg border px-4 py-3 sm:col-span-2" rows={4} />
        <button className="button button-primary sm:col-span-2">Proceed to secure payment</button>
      </form>
    </PageShell>
  );
}
