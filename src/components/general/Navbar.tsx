"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, ChevronDown, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Navigation configuration
const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },

  {
    title: "Opportunities",
    dropdown: [
      { title: "Career Prep", href: "/opportunities/careerPrep" },
      { title: "Workshops", href: "/opportunities/workshops" },
      { title: "Jobs & Internships", href: "/opportunities/jobs&Internships" },
      { title: "Projects", href: "/opportunities/projects" },
      { title: "Programs", href: "/opportunities/programs" },
      { title: "Startup Mentorship", href: "/opportunities/Startup-Mentorship" },
    ],
  },
  { title: "Student Wellness", href: "/student-wellness" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { user } = useUser();
  const role = user?.publicMetadata?.role as
    | "ADMIN"
    | "MODERATOR"
    | "STUDENT"
    | undefined;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>(
    {}
  );

  // Dashboard link by role
  const dashboardLink =
    role === "ADMIN"
      ? "/admin"
      : role === "MODERATOR"
        ? "/moderator"
        : role === "STUDENT"
          ? "/student"
          : undefined;

  // For accessibility: close dropdown on mouse leave
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100]",  // was z-50 before
        "bg-zinc-950/80 backdrop-blur-lg",
        "transition-all duration-300"
      )}
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl flex items-center mx-auto h-16 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logoWithoutBg.png"
            alt="IIT Nxt Logo"
            height={40}
            width={40}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-2">
          {navigationItems.map((item) =>
            !item.dropdown ? (
              <Link
                key={item.title}
                href={item.href!}
                className={cn(
                  "relative px-4 py-2 font-medium tracking-wide uppercase text-sm transition-colors duration-200",
                  pathname === item.href
                    ? "text-amber-400 border-t-2 border-amber-500"
                    : "text-zinc-100 hover:text-amber-400 hover:border-t-2 hover:border-amber-400 border-t-2 border-transparent"
                )}
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                {item.title}
              </Link>
            ) : (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.title)}
                onMouseLeave={closeDropdown}
                tabIndex={0}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-medium tracking-wide uppercase text-sm transition-colors duration-200 focus:outline-none",
                    openDropdown === item.title
                      ? "text-amber-400 border-t-2 border-amber-500"
                      : "text-zinc-100 hover:text-amber-400 hover:border-t-2 hover:border-amber-400 border-t-2 border-transparent"
                  )}
                  style={{
                    letterSpacing: "0.08em",
                  }}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.title}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === item.title && "rotate-180"
                    )}
                  />
                </button>
                {/* Dropdown menu */}
                <div
                  className={cn(
                    "absolute left-0 mt-2 min-w-[180px] rounded-md bg-zinc-900/95 shadow-lg border border-zinc-800 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50",
                    // Fix: Add invisible bridge to prevent dropdown from closing when moving cursor over the gap
                    "before:absolute before:-top-2 before:left-0 before:w-full before:h-2 before:content-['']",
                    openDropdown === item.title &&
                    "opacity-100 pointer-events-auto"
                  )}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className={cn(
                        "block px-5 py-2 text-sm font-medium text-zinc-200 hover:text-amber-400 hover:bg-zinc-800 transition-colors rounded-md",
                        pathname === sub.href && "text-amber-400 bg-zinc-800"
                      )}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Desktop Right: Support, Dashboard Icon, User, Auth */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Button
            variant="outline"
            className="border-amber-500 text-amber-900 hover:bg-amber-500 hover:text-black transition-colors font-semibold"
            asChild
          >
            <Link href="/support">Support Us</Link>
          </Button>
          {dashboardLink && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" asChild size="icon">
                    <Link href={dashboardLink} aria-label="Dashboard">
                      <LayoutDashboard className="h-6 w-6 text-white" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs text-black">
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 border border-zinc-700",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button
                variant="ghost"
                className="text-zinc-100 hover:text-amber-400 font-semibold"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile: User, Dashboard (icon), Hamburger */}
        <div className="md:hidden flex items-center gap-1 ml-auto">
          {dashboardLink && (
            <Button variant="ghost" asChild size="icon">
              <Link href={dashboardLink} aria-label="Dashboard">
                <LayoutDashboard className="h-6 w-6 text-amber-400" />
              </Link>
            </Button>
          )}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 border border-zinc-700",
                },
              }}
            />
          </SignedIn>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-400"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="text-white bg-zinc-950/95 backdrop-blur-lg px-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 px-6 pt-6 pb-4">
                  <span className="font-bold text-2xl tracking-tight text-amber-400">
                    IITNxt
                  </span>
                </div>
                <div className="flex-1 flex flex-col gap-1 px-2">
                  {navigationItems.map((item) =>
                    !item.dropdown ? (
                      <Link
                        key={item.title}
                        href={item.href!}
                        className={cn(
                          "block px-6 py-4 text-lg font-medium tracking-wide uppercase transition-colors",
                          pathname === item.href
                            ? "text-amber-400 border-l-4 border-amber-500 bg-zinc-900"
                            : "text-zinc-100 hover:text-amber-400 hover:bg-zinc-900"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div key={item.title} className="flex flex-col">
                        <button
                          className={cn(
                            "flex items-center justify-between px-6 py-4 text-lg font-medium tracking-wide uppercase w-full transition-colors",
                            mobileDropdown[item.title]
                              ? "text-amber-400"
                              : "text-zinc-100 hover:text-amber-400"
                          )}
                          onClick={() =>
                            setMobileDropdown((prev) => ({
                              ...prev,
                              [item.title]: !prev[item.title],
                            }))
                          }
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={cn(
                              "ml-2 h-5 w-5 transition-transform",
                              mobileDropdown[item.title] && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileDropdown[item.title] && (
                          <div className="flex flex-col ml-4 border-l border-zinc-800">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className={cn(
                                  "block px-4 py-2 text-base font-medium transition-colors",
                                  pathname === sub.href
                                    ? "text-amber-400 border-l-4 border-amber-500 bg-zinc-900"
                                    : "text-zinc-100 hover:text-amber-400 hover:bg-zinc-900"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="border-t border-zinc-800 my-2" />
                <div className="px-6 py-4 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-colors font-semibold"
                    asChild
                  >
                    <Link href="/support">Support Us</Link>
                  </Button>
                  <SignedOut>
                    <SignInButton>
                      <Button
                        variant="ghost"
                        className="text-zinc-100 hover:text-amber-400 font-semibold"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
