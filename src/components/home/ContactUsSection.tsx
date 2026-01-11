"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactUsSection() {
  const { user, isSignedIn } = useUser();
  const [email, setEmail] = useState(
    user?.emailAddresses[0]?.emailAddress || ""
  );
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
        }),
      });
      setStatus("sent");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full py-10 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white/60 rounded-xl shadow-lg overflow-hidden">
        {/* Contact Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-3">Contact Us</h2>
          <p className="mb-6 text-gray-700 text-base">
            Have a question, suggestion, or need support? We’re here to help!
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1 text-zinc-700 font-medium">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSignedIn}
                required
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 text-gray-700 disabled:bg-gray-200 disabled:cursor-not-allowed"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-1 text-zinc-700 font-medium">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 text-gray-700"
                placeholder="Type your message here..."
              />
            </label>
            <button
              type="submit"
              className="rounded-full px-8 py-2.5 bg-amber-500 text-white font-semibold shadow hover:bg-amber-600 transition-colors text-base"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <span className="text-green-600 font-medium">
                Message sent! We’ll get back to you soon.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600 font-medium">
                Something went wrong. Please try again.
              </span>
            )}
          </form>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px bg-gradient-to-b from-amber-200 via-gray-300 to-gray-200 my-8" />
        {/* Contact Details */}
        <div className="flex-1 p-8 flex flex-col gap-6 justify-center">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Get in Touch Directly
          </h3>
          <p className="mb-4 text-gray-700 text-base">
            Prefer a direct conversation? Reach out to us via phone, email, or
            connect on social media.
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="h-5 w-5 text-amber-500" />
            <span className="font-medium">85009 80384</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="h-5 w-5 text-amber-500" />
            <span className="font-medium">goiitnxt@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
