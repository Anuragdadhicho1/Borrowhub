import Link from "next/link";

const navLinks = [
  { href: "/browse", label: "Browse" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/about", label: "About" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[color:var(--color-text-dark)]">
          Borrow<span className="text-[color:var(--color-primary)]">Hub</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-text-gray)] transition hover:text-[color:var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="button button-ghost hidden sm:inline-flex">
            Login
          </Link>
          <Link href="/list-item" className="button button-primary">
            List your item
          </Link>
        </div>
      </div>
    </header>
  );
}
