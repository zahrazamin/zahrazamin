import Header from "@/components/Header";

const SCOPE = [
  "Field Research", "UX Design",
  "UI Design", "Prototyping",
  "Usability Testing", "Design System",
  "Mobile Design",
];

const PROCESS = [
  {
    n: "01",
    title: "Field observation",
    body: "Visited three factories to watch how people actually used — or avoided — the existing system. Noted environment, device type, posture, interruption frequency.",
  },
  {
    n: "02",
    title: "Constraint mapping",
    body: "Catalogued every real constraint: screen sizes, network conditions, task duration, literacy levels, permission structures. These became the design brief.",
  },
  {
    n: "03",
    title: "Workflow prioritisation",
    body: "Identified 8 workflows that had the highest frequency on factory floors. Ranked by pain and business impact. Designed for the top 5 first.",
  },
  {
    n: "04",
    title: "Single-task screens",
    body: "Each screen was designed around one action. No dashboards. No data tables on a 5-inch screen. Users should never have to wonder what to do next.",
  },
  {
    n: "05",
    title: "Testing in context",
    body: "Prototypes were tested in actual factory environments — with noise, motion, gloves, and pressure. Lab usability testing would have missed everything important.",
  },
];

export default function ERPMobileCaseStudy() {
  return (
    <div style={{ backgroundColor: "#FAF7F2", color: "#1A1A1A" }}>
      <Header />

      {/* ─── INTRO ───────────────────────────────────── */}
      <section className="px-6 md:px-8 pt-36 pb-16">
        <div className="max-w-[900px] mx-auto">

          {/* Client + Title */}
          <p className="text-[15px] mb-3" style={{ color: "#8C8C8C" }}>Divine IT Limited</p>
          <h1
            className="font-bold text-[#1A1A1A] mb-12 tracking-[-1px]"
            style={{ fontSize: "clamp(36px,5.5vw,68px)", lineHeight: 1.05 }}
          >
            Designing ERP for the humans who have no choice but to use it
          </h1>

          {/* Two-col: meta card + problem/solution/outcome */}
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">

            {/* ── Meta card ── */}
            <div className="rounded-[20px] overflow-hidden" style={{ backgroundColor: "#EDE8E1" }}>
              {/* Role */}
              <div className="flex gap-8 px-6 py-4" style={{ borderBottom: "1px solid #E0DAD2" }}>
                <span className="text-[15px] w-20 flex-shrink-0" style={{ color: "#8C8C8C" }}>Role</span>
                <span className="text-[15px] text-[#1A1A1A]">Product Designer</span>
              </div>
              {/* Client */}
              <div className="flex gap-8 px-6 py-4" style={{ borderBottom: "1px solid #E0DAD2" }}>
                <span className="text-[15px] w-20 flex-shrink-0" style={{ color: "#8C8C8C" }}>Client</span>
                <span className="text-[15px] text-[#1A1A1A]">Divine IT Limited</span>
              </div>
              {/* Year */}
              <div className="flex gap-8 px-6 py-4" style={{ borderBottom: "1px solid #E0DAD2" }}>
                <span className="text-[15px] w-20 flex-shrink-0" style={{ color: "#8C8C8C" }}>Year</span>
                <span className="text-[15px] text-[#1A1A1A]">2022 – 2024</span>
              </div>
              {/* Scope */}
              <div className="flex gap-8 px-6 py-5" style={{ borderBottom: "1px solid #E0DAD2" }}>
                <span className="text-[15px] w-20 flex-shrink-0 pt-0.5" style={{ color: "#8C8C8C" }}>Scope</span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {SCOPE.map((s) => (
                    <span key={s} className="text-[15px] text-[#1A1A1A]">{s}</span>
                  ))}
                </div>
              </div>
              {/* Platform */}
              <div className="flex gap-8 px-6 py-4">
                <span className="text-[15px] w-20 flex-shrink-0" style={{ color: "#8C8C8C" }}>Platform</span>
                <span className="text-[15px] text-[#1A1A1A]">Android · iOS</span>
              </div>
            </div>

            {/* ── Problem / Solution / Outcome ── */}
            <div className="space-y-7">
              <div>
                <p className="text-[16px] font-semibold text-[#1A1A1A] mb-2">Problem</p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6B6B" }}>
                  A desktop ERP that field workers were forced to use — on factory floors, on entry-level phones, with no digital literacy support and no margin for error.
                </p>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#1A1A1A] mb-2">Solution</p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6B6B" }}>
                  Redesigned core workflows as single-task mobile screens built around real constraints: device limitations, environment, and the specific mental models of factory floor users.
                </p>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#1A1A1A] mb-2">Outcome</p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6B6B" }}>
                  Five modules shipped across six companies. Higher field adoption than desktop. New staff operational within a week, with no formal training required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HERO IMAGE — full bleed ─────────────────── */}
      <div className="w-full pb-16">
        <div
          className="w-full flex items-center justify-center"
          style={{ backgroundColor: "#2A6B70", aspectRatio: "21 / 9" }}
        >
          <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.3)" }}>Project screens</span>
        </div>
      </div>

      {/* ─── CONTENT ─────────────────────────────────── */}
      <section className="px-6 md:px-8">
        <div className="max-w-[780px] mx-auto">

          {/* Challenge */}
          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div className="pt-0.5">
              <p className="text-[16px] font-medium text-[#1A1A1A]">The Challenge</p>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.9]" style={{ color: "#6B6B6B" }}>
              {[
                { label: "Devices", text: "Entry-level Android phones, 3–4 years old. Slow processors, 5-inch screens, inconsistent cellular coverage in industrial zones." },
                { label: "Environment", text: "Factory floors are loud, fast, and demand constant attention-switching. Users have seconds for a task, not minutes. One wrong tap has real consequences." },
                { label: "Users", text: "Some use smartphones daily. Others only touch a digital system at work. Error recovery has to be obvious. There is no help desk on a factory floor." },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <span className="text-xs font-semibold flex-shrink-0 mt-1 tracking-wide" style={{ color: "#2A6B70", minWidth: "72px" }}>
                    {c.label}
                  </span>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screen placeholders */}
          <div className="py-6" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div className="grid grid-cols-3 gap-3">
              {["Attendance", "Approval", "Inventory"].map((label) => (
                <div key={label} className="rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#EDE8E1", aspectRatio: "9 / 16" }}>
                  <span className="text-xs" style={{ color: "#BDBDBD" }}>{label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#BDBDBD" }}>Attendance, production approval, inventory check</p>
          </div>

          {/* Process */}
          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div className="pt-0.5">
              <p className="text-[16px] font-medium text-[#1A1A1A]">Process</p>
              <p className="text-[15px] mt-1.5" style={{ color: "#6B6B6B" }}>Context before solutions.</p>
            </div>
            <div className="space-y-8">
              {PROCESS.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <span className="text-[11px] font-semibold flex-shrink-0 tabular-nums mt-1" style={{ color: "#BDBDBD" }}>
                    {step.n}
                  </span>
                  <div>
                    <p className="text-[16px] font-medium text-[#1A1A1A] mb-1">{step.title}</p>
                    <p className="text-[16px] leading-[1.8]" style={{ color: "#6B6B6B" }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote */}
          <div className="py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <blockquote className="font-medium leading-[1.5]" style={{ fontSize: "clamp(19px,2.4vw,28px)", color: "#2A6B70" }}>
              "The user who has no choice but to use the software deserves the most thoughtful design — not the least."
            </blockquote>
          </div>

          {/* Outcome */}
          <div className="grid md:grid-cols-[220px_1fr] gap-8 py-14" style={{ borderTop: "1px solid #E5DFD8" }}>
            <div className="pt-0.5">
              <p className="text-[16px] font-medium text-[#1A1A1A]">Outcome</p>
            </div>
            <div className="space-y-4 text-[16px] leading-[1.9]" style={{ color: "#6B6B6B" }}>
              <p>Five core modules shipped across six client companies — attendance, production approval, inventory management, leave requests, and daily reporting.</p>
              <p>Support tickets related to field operations dropped within the first month. New staff were operational without training within a week.</p>
              <p>The larger lesson: designing for constrained users doesn't mean designing less. It means designing more precisely.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── NEXT PROJECT ────────────────────────────── */}
      <div className="px-6 md:px-8 pb-20">
        <div className="max-w-[780px] mx-auto" style={{ borderTop: "1px solid #E5DFD8", paddingTop: "3.5rem" }}>
          <p className="text-[11px] tracking-[0.14em] uppercase font-medium mb-4" style={{ color: "#8C8C8C" }}>
            Next Case Study
          </p>
          <a
            href="/case-study/erp-rmg"
            className="card-project rounded-[20px] overflow-hidden flex flex-col"
            style={{ backgroundColor: "#1A1A1A", textDecoration: "none" }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-2 mb-5">
                <span className="text-[11px] tracking-[0.11em] uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                  ERP · Research · RMG
                </span>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>Case study</span>
              </div>
              <h3 className="font-bold text-white leading-snug mb-3" style={{ fontSize: "clamp(18px,2.4vw,26px)" }}>
                Untangling garment manufacturing workflows nobody had designed for before
              </h3>
              <span className="card-link text-xs">View case study →</span>
            </div>
            <div className="mx-4 mb-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.06)", aspectRatio: "16 / 5" }} />
          </a>
        </div>
      </div>

      {/* ─── FOOTER ──────────────────────────────────── */}
      <footer className="px-6 md:px-8 py-8">
        <div className="max-w-[780px] mx-auto flex justify-between items-center" style={{ borderTop: "1px solid #E5DFD8", paddingTop: "2rem" }}>
          <a href="/" className="text-xs muted-link">← Back to work</a>
          <span className="text-xs" style={{ color: "#8C8C8C" }}>Zahra Zamin</span>
        </div>
      </footer>
    </div>
  );
}
