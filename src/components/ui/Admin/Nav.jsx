"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    active
                      ? "border-[#2E9BE6] text-[#2E9BE6]"
                      : "border-transparent text-gray-600 hover:text-[#2E9BE6] hover:border-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
