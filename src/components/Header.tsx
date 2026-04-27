export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-10 py-5 md:py-6 pointer-events-none">
      <a
        href="/"
        className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
        style={{ backgroundColor: "#1A1A1A", textDecoration: "none" }}
      >
        <span className="text-[14px] text-white font-medium tracking-wide">Zahra Zamin</span>
        <span className="text-[14px]" style={{ color: "#6B6B6B" }}>— Product Designer</span>
      </a>

      <a
        href="#"
        className="resume-btn pointer-events-auto inline-flex items-center rounded-full px-5 py-2.5 text-[14px] font-semibold text-white tracking-wide"
        style={{ backgroundColor: "#F05A28" }}
      >
        My Resume
      </a>
    </header>
  );
}
