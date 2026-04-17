import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { trendingItems } from "@/lib/borrowhub-data";

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = trendingItems.find((entry) => entry.id === id) ?? trendingItems[0];

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
      <section>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image src={item.image} alt={item.title} fill className="object-cover" priority />
        </div>
        <h1 className="mt-5 text-3xl font-extrabold">{item.title}</h1>
        <p className="mt-2 text-[color:var(--color-text-gray)]">
          High-quality rental from a trusted owner. Perfect for short-term use while saving money and storage space.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            "Category: " + item.category,
            "Condition: Like New",
            "Min 1 day",
            "Max 14 days",
            "Flexible cancellation",
          ].map((value) => (
            <span key={value} className="pill bg-[color:var(--color-background)] px-3 py-1">
              {value}
            </span>
          ))}
        </div>
      </section>

      <aside className="card sticky top-24 h-fit p-6">
        <p className="text-3xl font-black text-[color:var(--color-primary)]">₹{item.price}<span className="text-base font-medium text-[color:var(--color-text-gray)]"> / day</span></p>
        <label className="mt-4 block text-sm font-semibold">Select dates</label>
        <div className="mt-2 rounded-lg border p-3 text-sm text-[color:var(--color-text-gray)]">
          <CalendarDays size={16} className="inline" /> 20 Apr 2026 – 23 Apr 2026
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <p className="flex justify-between"><span>Rental (3 days)</span><span>₹{item.price * 3}</span></p>
          <p className="flex justify-between"><span>Service fee (8%)</span><span>₹{Math.round(item.price * 3 * 0.08)}</span></p>
          <p className="flex justify-between"><span>Security deposit</span><span>₹1000</span></p>
          <p className="flex justify-between border-t pt-2 font-bold"><span>Total</span><span>₹{Math.round(item.price * 3 * 1.08 + 1000)}</span></p>
        </div>
        <Link href={`/items/${id}/book`} className="button button-primary mt-5 w-full">Request to Book</Link>
      </aside>
    </main>
  );
}
