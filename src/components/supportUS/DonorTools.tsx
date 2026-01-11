// app/supportUs/DonorTools.tsx

'use client';

import { FileText, BarChart3, MailCheck } from 'lucide-react';

export default function DonorTools() {
  return (
    <section className="bg-white py-16 px-6 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#A20A0A] mb-10">
          Donation Dashboard & Receipts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Receipt */}
          <div className="flex flex-col items-center text-center">
            <FileText className="w-12 h-12 text-[#F59E0B] mb-4" />
            <h4 className="font-bold text-lg mb-2">Auto PDF Receipts</h4>
            <p className="text-gray-700">Instant PDF receipts via email for every donation.</p>
          </div>

          {/* Dashboard */}
          <div className="flex flex-col items-center text-center">
            <BarChart3 className="w-12 h-12 text-[#799351] mb-4" />
            <h4 className="font-bold text-lg mb-2">Donation Dashboard</h4>
            <p className="text-gray-700">Track your donation history in your personal dashboard.</p>
          </div>

          {/* Email Settings */}
          <div className="flex flex-col items-center text-center">
            <MailCheck className="w-12 h-12 text-[#A20A0A] mb-4" />
            <h4 className="font-bold text-lg mb-2">Email Preferences</h4>
            <p className="text-gray-700">Control how you receive updates and receipts via email.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
