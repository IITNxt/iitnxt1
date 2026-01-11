export default function PreFooter() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-200 via-zinc-900 to-black">
      <div
        className="pointer-events-none select-none flex justify-center items-start"
        aria-hidden="true"
      >
        <span
          className="font-extrabold text-[16vw] md:text-[16vw] lg:text-[20vw] leading-none text-gray-400 uppercase"
          style={{
            letterSpacing: "0.23em",
            lineHeight: 1,
            userSelect: "none",
            whiteSpace: "nowrap",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
          }}
        >
          IITNxt
        </span>
      </div>
    </div>
  );
}
