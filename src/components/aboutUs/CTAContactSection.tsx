"use client";

import Link from "next/link";

export default function CTAContactSection() {
  return (
    <section className="bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb] py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#A20A0A] mb-4">
          Want to Connect With Us?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you are a student, institution, or partner — we’d love to hear from you.
        </p>
        <Link
          href="/(main)/contact-us"
          className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
