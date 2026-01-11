"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navmini = () => {
  const pathname = usePathname();

  // Only show on opportunities/programs pages
  if (!pathname.startsWith("/opportunities/programs")) return null;

  const navItems = [
    { label: "Young Explorers", href: "/opportunities/programs/age-8" },
    { label: "Student Builders", href: "/opportunities/programs/college" },
    { label: "Future Leaders", href: "/opportunities/programs/advanced" },
  ];

  return (
    <nav className="sticky top-[64px] z-[90] bg-white border-b border-gray-200 py-4 px-4 flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium shadow-sm">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href}>
          <span
            className={`px-4 py-2 rounded-full cursor-pointer transition-all ${
              pathname === item.href
                ? "bg-[#799351] text-white"
                : "hover:bg-[#F6EEC9] hover:text-[#799351] text-gray-700"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navmini;
