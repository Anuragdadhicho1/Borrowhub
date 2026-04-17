import Image from "next/image";
import Link from "next/link";
import { categories, trendingItems } from "@/lib/borrowhub-data";

export default function BrowsePage() {
  return (
    <main className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside className="card h-fit space-y-5 p-5">
        <h1 className="text-xl font-bold">Filters</h1>
        <div>
          <p className="mb-2 text-sm font-semibold">Category</p>
          <div className="space-y-2 text-sm text-[color:var(--color-text-gray)]">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center gap-2">
                <input type="checkbox" />
                {category.name}
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Price range</p>
          <input type="range" min={0} max={5000} className="w-full" />
          <p className="text-xs text-[color:var(--color-text-gray)]">₹0 – ₹5000 / day</p>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Distance</p>
          <select className="w-full rounded-lg border px-3 py-2 text-sm">
            <option>10 km</option>
            <option>25 km</option>
            <option>50 km</option>
          </select>
        </div>
      </aside>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Browse Items</h2>
          <button className="button button-outline">Map view</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {trendingItems.concat(trendingItems).map((item, index) => (
            <article key={`${item.id}-${index}`} className="card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 33vw" />
              </div>
              <div className="p-4">
                <p className="pill inline-block bg-[color:var(--color-background)] px-3 py-1 text-xs">{item.category}</p>
                <h3 className="mt-2 line-clamp-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--color-text-gray)]">{item.owner} • {item.distance}</p>
                <p className="mt-2 font-bold text-[color:var(--color-primary)]">₹{item.price}/day</p>
                <Link href={`/items/${item.id}`} className="button button-primary mt-3 w-full">Quick Book</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
