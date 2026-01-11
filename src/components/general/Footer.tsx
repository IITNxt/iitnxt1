import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full pt-12 pb-8 px-6 bg-black text-zinc-200 overflow-hidden">
      {/* Logo and Motto */}
      <div className="md:hidden flex-1 flex flex-col items-center gap-4 min-w-[220px]">
        <Link href="/">
          <Image
            src="/logo/logoWithoutBg.png"
            alt="IIT Nxt Logo"
            height={120}
            width={120}
          />
        </Link>
        <span className="text-zinc-400 font-medium text-base mb-6 select-none">
          Empowering Minds, Shaping Futures
        </span>
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start md:flex-row gap-10 md:gap-0 md:items-stretch">
        <div className="hidden md:flex-1 md:flex flex-col items-center gap-4 min-w-[220px]">
          <Link href="/">
            <Image
              src="/logo/logoWithoutBg.png"
              alt="IIT Nxt Logo"
              height={120}
              width={120}
            />
          </Link>
          <span className="text-zinc-400 font-medium text-base mb-6 select-none">
            Empowering Minds, Shaping Futures
          </span>
        </div>
        {/* Separator */}
        <div className="hidden md:flex mx-8 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-900 opacity-60" />

        {/* Address & Contact */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-2">
          <span className="uppercase font-semibold text-zinc-300 text-sm mb-2">
            Contact
          </span>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="text-zinc-400 text-sm">
              123 Knowledge Avenue, Tech City, India 123456
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-amber-400" />
            <a
              href="tel:+9185009 80384"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              +91 85009 80384
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-amber-400" />
            <a
              href="mailto:goiitnxt@gmail.com"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              goiitnxt@gmail.com
            </a>
          </div>
        </div>

        <div className="flex">
          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 mt-8 md:mt-0">
            <span className="uppercase font-semibold text-zinc-300 text-sm mb-2">
              Quick Links
            </span>
            <Link
              href="/"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              Programs
            </Link>

            <Link
              href="/contact"
              className="text-zinc-400 text-sm hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-2 mt-8 md:mt-0">
            <span className="uppercase font-semibold text-zinc-300 text-sm mb-2">
              Connect
            </span>
            <div className="flex gap-4 mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-zinc-400 hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright and Privacy */}
      <div className="relative z-10 mt-10 pt-6 border-t border-zinc-200/20 flex flex-col md:flex-row justify-center items-center text-sm gap-2 text-zinc-500">
        <span>© 2025 IITNxt. All rights reserved.</span>
        <Link
          href="/privacy-policy"
          className="mt-2 md:mt-0 text-amber-400 hover:underline transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
