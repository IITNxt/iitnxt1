import React from "react";
export default function VedicCard({
  bgImage = "/card/vedicCardBg.png",
  className = "",
  children,
}: {
  bgImage?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-none ${className}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 4px 24px 0 rgba(24, 24, 27, 0.06)",
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}
