/*ROHAN
export default function ContactPage() {
  return <div>Contact Page</div>;
}
*/
// src/app/(main)/contact/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | IITNXT",
  description: "Reach out to IITNXT for inquiries, enrollment, and support.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-22 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-700">
          We’d love to help you learn more about IITNXT. Whether you’re a student, parent, teacher, or partner, our team is here to answer your questions.
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" placeholder="Your full name" className="w-full border rounded-md px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full border rounded-md px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input type="tel" placeholder="+91 98765 43210" className="w-full border rounded-md px-4 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Message</label>
            <textarea rows={5} placeholder="Type your message here..." className="w-full border rounded-md px-4 py-2"></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors w-full md:w-auto"
        >
          Send Message
        </button>
      </form>

      {/* Enrollment Support */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Enrollment Support</h2>
        <p className="text-gray-700">
          Need help with joining IITNXT? We’re here to guide you through:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            Selecting tracks: <strong>School</strong>, <strong>College</strong>, <strong>Age 8–11</strong>, <strong>Age 12+</strong>, or <strong>Advanced Specialized Training</strong>.
          </li>
          <li>Understanding fees, class schedules, and prerequisites.</li>
        </ul>
        <Link
          href="/programs"
          className="inline-block mt-2 text-blue-600 hover:underline font-medium"
        >
          👉 Enroll in a Program
        </Link>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 border rounded-xl p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Additional Contact Info</h2>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> contact@iitnxt.org</p>
          <p>
            <strong>🏛️ Registered Trust Name:</strong> IITNXT Foundation, Registered under Andhra Pradesh Trust Act.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">📍 Our Location</h2>

          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243208.52512221094!2d83.09777989015367!3d17.738361697873298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1755715473357!5m2!1sen!2sin"
          className="w-full h-80 rounded-lg border-0 shadow-md"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />


        </div>
      </div>
    </div>
  );
}
