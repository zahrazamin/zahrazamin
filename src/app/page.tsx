import Header from "@/components/Header";

const PROJECTS = [
  {
    bg: "#2A6B70",
    category: "ERP · Mobile · Enterprise",
    title: "Designing ERP for the humans who have no choice but to use it",
    description:
      "Mobile ERP interfaces built for PrismERP clients across manufacturing, garments and operations in Bangladesh.",
    href: "/case-study/erp-mobile",
  },
  {
    bg: "#1A1A1A",
    category: "ERP · Research · RMG",
    title: "Untangling garment manufacturing workflows nobody had designed for before",
    description:
      "Experimental UX research and module design for an RMG-specific ERP — Cutting and Industrial Engineering.",
    href: "/case-study/erp-rmg",
  },
];

const CLIENTS = [
  "Divine IT Limited",
  "Fakir Fashion Limited",
  "Radial Studios",
  "Fiverr Clients",
];

const PROCESS_STEPS = [
  { main: "Understand context first", sub: "user, technology, budget, environment" },
  { main: "Research — accelerated with AI", sub: null },
  { main: "Define what actually matters", sub: "this part is still human" },
  { main: "Design within real constraints", sub: null },
  { main: "Test with actual users", sub: null },
  { main: "Adapt without ego", sub: null },
];

const SKILLS = [
  "Figma", "ERP & Enterprise", "Complex Mobile", "SaaS Design",
  "User Research", "Design Systems", "Usability Testing", "Prototyping",
];

const CONNECT_LINKS = [
  { label: "Email", href: "mailto:zahrazamin360@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "Resume", href: "#" },
];

export default function Page() {
  return (
    <div style={{ backgroundColor: "#FAF7F2", color: "#1A1A1A" }}>

      <Header />

      {/* ─── HERO ────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 md:px-8 pt-28 pb-20">
        <div className="max-w-[780px] mx-auto w-full">
          <h1
            className="font-bold text-[#1A1A1A] mb-10 tracking-[-0.5px]"
            style={{ fontSize: "clamp(36px,5.8vw,64px)", lineHeight: 1.2 }}
          >
            <span style={{ position: "relative", display: "inline-block" }}>
              <span
                className="wave-hand"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-0.45em",
                  left: "-0.05em",
                  fontSize: "0.42em",
                  lineHeight: 1,
                  zIndex: 1,
                }}
              >
                👋
              </span>
              Hi,
            </span>
            {" "}
            <span
              className="inline-block align-middle"
              style={{
                position: "relative",
                width: "clamp(44px,5.6vw,72px)",
                height: "clamp(44px,5.6vw,72px)",
                verticalAlign: "middle",
                marginBottom: "0.05em",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transform: "rotate(-4deg)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
                }}
              >
                <img
                  src="/zahra.png"
                  alt="Zahra"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </span>
            </span>
            {" "}I'm Zahra. I make complex digital products feel inevitable — not complicated.
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:zahrazamin360@gmail.com"
              className="btn-cta inline-flex items-center px-5 py-2.5 text-[14px] rounded-full text-[#1A1A1A] tracking-wide"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0DAD2" }}
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#4CAF50" }} />
              <span className="text-[15px]" style={{ color: "#6B6B6B" }}>Open to new projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ────────────────────────────── */}
      <section className="px-6 md:px-8 pb-24">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[11px] tracking-[0.14em] uppercase mb-2 font-medium" style={{ color: "#1A1A1A" }}>
            Case Studies
          </p>
          <p className="text-[15px] leading-relaxed mb-8 max-w-[520px]" style={{ color: "#6B6B6B" }}>
            Complex problems designed for real constraints and real users. A lot of
            thinking went into these — hopefully it shows.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECTS.map((project, i) => (
              <a
                key={i}
                href={project.href}
                className="card-project rounded-[20px] overflow-hidden flex flex-col"
                style={{ backgroundColor: project.bg, textDecoration: "none" }}
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <span className="text-[11px] tracking-[0.11em] uppercase leading-none" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {project.category}
                    </span>
                    <span className="text-[11px] flex-shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Case study
                    </span>
                  </div>

                  <h3 className="font-bold text-white leading-snug mb-3" style={{ fontSize: "clamp(18px,2vw,22px)" }}>
                    {project.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {project.description}
                  </p>

                  <span className="card-link text-xs">View case study →</span>
                </div>

                <div
                  className="mx-4 mb-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", aspectRatio: "16 / 9" }}
                />
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a href="#" className="muted-link text-[15px]">Explore all projects →</a>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─────────────────────────────────── */}
      <div className="px-6 md:px-8 pb-4">
        <div className="max-w-[780px] mx-auto py-7" style={{ borderTop: "1px solid #E5DFD8", borderBottom: "1px solid #E5DFD8" }}>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <p className="text-[11px] tracking-[0.14em] uppercase flex-shrink-0 font-medium" style={{ color: "#1A1A1A" }}>
              Worked with
            </p>
            {CLIENTS.map((client) => (
              <span key={client} className="text-[15px]" style={{ color: "#6B6B6B" }}>{client}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT ───────────────────────────────────── */}
      <section className="px-6 md:px-8">
        <div className="max-w-[780px] mx-auto">

          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div>
              <h2 className="text-[#1A1A1A]" style={{ fontSize: "clamp(52px,6vw,80px)", lineHeight: 1, fontWeight: 800 }}>
                Hello.
              </h2>
            </div>
            <div className="space-y-4 text-[16px] leading-[1.9] pt-1" style={{ color: "#6B6B6B" }}>
              <p>
                I'm Zahra, a product designer from Dhaka. I design for the user no
                one thought to ask about — the one with the old phone, the short lunch
                break, and zero tolerance for confusing software.
              </p>
              <p>
                Six years in, my practice has grown around complex product design —
                ERP systems, enterprise dashboards, SaaS products, and data-heavy
                mobile applications. Products that don't win design awards but that
                entire companies depend on every day.
              </p>
              <p>
                What this work taught me is that design only works when it fits a
                specific human, in a specific context, with specific constraints.
                Technology, budget, environment, psychology — all of it is part of the
                brief.
              </p>
              <p>
                I also teach design on the side. If you can't explain a decision
                simply, you probably don't understand it well enough yet.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div className="pt-0.5">
              <p className="text-[16px] font-medium text-[#1A1A1A]">How I Work</p>
              <p className="text-[15px] mt-1.5" style={{ color: "#6B6B6B" }}>Design without context is just decoration.</p>
            </div>
            <div>
              <ol className="space-y-4 mb-10">
                {PROCESS_STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs w-4 flex-shrink-0 tabular-nums mt-0.5 text-right" style={{ color: "#BDBDBD" }}>
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-[16px] text-[#1A1A1A]">{step.main}</span>
                      {step.sub && (
                        <span className="text-[15px] ml-2" style={{ color: "#6B6B6B" }}>({step.sub})</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <blockquote
                className="leading-[1.5] mb-10 font-medium"
                style={{ fontSize: "clamp(19px,2.4vw,26px)", color: "#2A6B70" }}
              >
                "AI makes me faster. It doesn't make the decisions. That's still mine."
              </blockquote>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full text-xs tracking-wide" style={{ backgroundColor: "#EDE8E1", color: "#6B6B6B" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div>
              <h2 className="text-[#1A1A1A] leading-[1.1]" style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800 }}>
                Let's talk.
              </h2>
              <p className="text-[15px] mt-3 leading-relaxed max-w-[200px]" style={{ color: "#6B6B6B" }}>
                Whether it's an enterprise tool, a SaaS product, or something you're still figuring out.
              </p>
            </div>
            <div>
              {CONNECT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="connect-row flex items-center justify-between px-2 py-4 -mx-2 rounded-lg"
                  style={{ borderBottom: "1px solid #E5DFD8" }}
                >
                  <span className="text-[16px] text-[#1A1A1A]">{link.label}</span>
                  <span className="connect-arrow text-base">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────── */}
      <footer className="px-6 md:px-8 py-8">
        <div className="max-w-[780px] mx-auto flex justify-between items-center" style={{ borderTop: "1px solid #E5DFD8", paddingTop: "2rem" }}>
          <span className="text-xs" style={{ color: "#8C8C8C" }}>© 2026 All rights reserved.</span>
          <span className="text-xs" style={{ color: "#8C8C8C" }}>Zahra Zamin</span>
        </div>
      </footer>
    </div>
  );
}
