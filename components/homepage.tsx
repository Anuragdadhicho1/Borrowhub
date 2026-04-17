"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Star, Wallet } from "lucide-react";
import { categories, stats, testimonials, trendingItems } from "@/lib/borrowhub-data";

export function Homepage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#6C63FF_0%,#43C6AC_100%)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 text-white sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="pill inline-block bg-white/15 px-4 py-1 text-sm">Own Less. Live More. Borrow Smart.</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Why Buy When You Can BorrowHub?</h1>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
              Rent cameras, tools, gadgets & more from trusted neighbors. Save money. Reduce waste. Build community.
            </p>
            <div className="card mt-8 grid gap-3 bg-white p-3 text-[color:var(--color-text-dark)] sm:grid-cols-[1fr_1fr_auto]">
              <input className="rounded-lg border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]" placeholder="Select city" />
              <select className="rounded-lg border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]">
                <option>All categories</option>
                {categories.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
              </select>
              <button className="button button-primary px-6">Search</button>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/browse" className="button rounded-lg bg-white px-5 font-semibold text-[color:var(--color-primary)]">
                Browse Items
              </Link>
              <Link href="/list-item" className="button rounded-lg border border-white bg-white/10 px-5 text-white">
                List Your Item — Earn Money
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-white/95">
              <p>🛡️ Verified Users</p>
              <p>⭐ 4.9/5 Rating</p>
              <p>🔒 Secure Payments</p>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {trendingItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
                className="card float absolute w-60 bg-white p-3 text-[color:var(--color-text-dark)]"
                style={{ top: `${index * 84}px`, right: `${index * 18}px` }}
              >
                <p className="text-xs text-[color:var(--color-text-gray)]">{item.category}</p>
                <p className="mt-1 line-clamp-1 text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-[color:var(--color-primary)]">₹{item.price}/day</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article key={category.name} className="card group p-5 transition hover:-translate-y-1 hover:border-[color:var(--color-primary)]">
                <Icon className="text-[color:var(--color-primary)]" />
                <h3 className="mt-3 font-semibold text-[color:var(--color-text-dark)]">{category.name}</h3>
                <span className="pill mt-2 inline-block bg-[color:var(--color-background)] px-3 py-1 text-xs text-[color:var(--color-text-gray)]">
                  {category.count}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight">How BorrowHub Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["🔍", "Find an item", "Search or browse by category"],
            ["📅", "Book & Pay", "Select dates and pay securely"],
            ["🤝", "Meet & Enjoy", "Pickup, use, and return with ease"],
          ].map(([emoji, title, body]) => (
            <article key={title} className="card p-6">
              <p className="text-2xl">{emoji}</p>
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-[color:var(--color-text-gray)]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight">Trending Items</h2>
          <Link href="/browse" className="text-sm font-semibold text-[color:var(--color-primary)]">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingItems.map((item) => (
            <article key={item.id} className="card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--color-text-gray)]">{item.owner} • {item.distance}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-bold text-[color:var(--color-primary)]">₹{item.price}/day</p>
                  <p className="flex items-center gap-1 text-sm"><Star size={14} className="fill-yellow-400 text-yellow-400" /> {item.rating} ({item.reviews})</p>
                </div>
                <Link href={`/items/${item.id}`} className="button button-primary mt-3 w-full">
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight">BorrowHub has your back</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              Icon: BadgeCheck,
              title: "Identity Verified Users",
              body: "Government ID and profile trust checks",
            },
            {
              Icon: Wallet,
              title: "Secure Escrow Payments",
              body: "Safe checkout and protected fund release",
            },
            {
              Icon: ShieldCheck,
              title: "Damage Protection",
              body: "Coverage for eligible rental incidents",
            },
          ].map(({ Icon, title, body }) => (
            <article key={title} className="card p-6">
              <Icon className="text-[color:var(--color-accent)]" />
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-[color:var(--color-text-gray)]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight">What our community says</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card p-6">
              <p className="text-sm text-yellow-500">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</p>
              <p className="mt-3 text-sm text-[color:var(--color-text-gray)]">“{testimonial.quote}”</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
              <p className="text-xs text-[color:var(--color-text-gray)]">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="card grid gap-4 bg-[color:var(--color-text-dark)] p-6 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <p key={stat} className="text-sm font-semibold">
              {stat}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="card flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold">Get weekly deals in your inbox</h2>
            <p className="text-sm text-[color:var(--color-text-gray)]">Discover trending rentals and sustainability tips.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input type="email" required placeholder="you@example.com" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <button className="button button-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
