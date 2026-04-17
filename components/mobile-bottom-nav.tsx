"use client";

import Link from "next/link";
import { Home, MessageCircle, Search, User, WandSparkles } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/browse", label: "Browse", icon: Search },
  { href: "/list-item", label: "List", icon: WandSparkles },
  { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-border)] bg-white/95 px-3 py-2 backdrop-blur md:hidden">
      <ul className="grid grid-cols-5 gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-medium transition ${
                  isActive
                    ? "text-[color:var(--color-primary)]"
                    : "text-[color:var(--color-text-gray)]"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
