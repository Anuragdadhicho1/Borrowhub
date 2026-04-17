import Link from "next/link";
import { Globe, MessageCircle, Smartphone, Users } from "lucide-react";

const footerLinks = {
  product: ["Browse", "List an Item", "Pricing", "Trust & Safety"],
  company: ["About", "Careers", "Press", "Contact"],
  legal: ["Privacy", "Terms", "Cookies", "Refund Policy"],
};

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--color-border)] bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-[color:var(--color-text-dark)]">BorrowHub</h2>
          <p className="mt-3 max-w-md text-sm text-[color:var(--color-text-gray)]">
            Own Less. Live More. Borrow Smart. Rent everyday items from trusted neighbors and build a sustainable local community.
          </p>
          <div className="mt-5 flex gap-3 text-[color:var(--color-text-gray)]">
            <Globe size={18} />
            <MessageCircle size={18} />
            <Smartphone size={18} />
            <Users size={18} />
          </div>
        </div>
        {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map((section) => (
          <div key={section}>
            <h3 className="text-sm font-semibold capitalize text-[color:var(--color-text-dark)]">{section}</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-text-gray)]">
              {footerLinks[section].map((label) => (
                <li key={label}>
                  <Link href="#" className="transition hover:text-[color:var(--color-primary)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[color:var(--color-border)] px-4 py-4 text-center text-xs text-[color:var(--color-text-gray)]">
        © {new Date().getFullYear()} BorrowHub. All rights reserved.
      </div>
    </footer>
  );
}
