// components/home/PartnerSection.tsx
import React from "react";

const partners = [
  { name: "Visakha Autonagar Small Scale Industries Welfare Assosciation", icon: "/home/patnerSection/Vassiwa.png" },
  { name: "Sajjas Vishnutek India", icon: "/home/patnerSection/SajjasVishnutekIndia.png" },
  { name: "Lotus Wireless", icon: "/home/patnerSection/LotusWireless.png" },
  { name: "Visakha Micro Measures", icon: "/home/patnerSection/VisakhaMicroMeasures.png" },
  { name: "Tanveer Creations Engineering Works", icon: "/home/patnerSection/TanveerCreationsEngineeringWorks.png" },
  { name: "The Institute of Cost Accountants of India", icon: "/home/patnerSection/TheInstituteofCostAccountantsofIndia.png" },
  { name: "Accubic Consultancy", icon: "/home/patnerSection/AccubicConsultancy.png" },
  { name: "HeiDigi - Digital marketing redefined", icon: "/home/patnerSection/HeiDigi.png" },
  { name: "Valuepitch", icon: "/home/patnerSection/Valuepitch.png" },
  { name: "Mindtronix", icon: "/home/patnerSection/mindtronix.png" },
  { name: "Arogya Bharti", icon: "/home/patnerSection/ArogyaBharti.png" },
  { name: "Paryavaran Sanrakshan", icon: "/home/patnerSection/ParyavaranSanrakshan.png" },
];

export default function PartnerSection() {
  return (
    <section className="w-full bg-amber-100 overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-amber-800 pt-4 pb-7">
        Our Partners
      </h2>
      <div className="w-full overflow-hidden">
        <div className="flex whitespace-nowrap space-x-12 partner-scroll">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[160px] px-4"
              aria-label={partner.name}
              title={partner.name}
            >
              <img
                src={partner.icon}
                alt={partner.name}
                className="h-25 w-auto object-contain transition duration-300"
                loading="lazy"
              />
              <span className="mt-2 text-[17px] font-medium text-gray-700 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
