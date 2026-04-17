import { PageShell } from "@/components/page-shell";

const overview = [
  ["💰 Total Earned", "₹12,400"],
  ["📦 Active Listings", "5"],
  ["📅 Active Bookings", "2"],
  ["⭐ Average Rating", "4.8"],
];

export default function DashboardPage() {
  return (
    <PageShell title="Dashboard" description="Track earnings, listings, bookings, and profile health.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overview.map(([label, value]) => (
          <article key={label} className="rounded-xl border bg-[color:var(--color-background)] p-4">
            <p className="text-sm text-[color:var(--color-text-gray)]">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
