import { PageShell } from "@/components/page-shell";

export default function ListItemPage() {
  return (
    <PageShell title="List a New Item" description="Complete all six steps to publish a trusted listing.">
      <ol className="grid gap-3 text-sm sm:grid-cols-2">
        {[
          "Step 1 — Basics",
          "Step 2 — Description",
          "Step 3 — Photos",
          "Step 4 — Pricing",
          "Step 5 — Location",
          "Step 6 — Review & Publish",
        ].map((step) => (
          <li key={step} className="rounded-xl border bg-[color:var(--color-background)] px-4 py-3">
            {step}
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
