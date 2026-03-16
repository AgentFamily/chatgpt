import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Link as LinkIcon } from "lucide-react";

export default function AgentFamilyHomepage() {
  const tools = [
    {
      name: "Re-Funder",
      domain: "Re-Funder.com",
      secondary: " Refund Old Subscription via MailConnect ✉️  ",
      description:
        "Turns digital service failures into structured, evidence-based refund and escalation workflows with timeline logic, lawful complaint stages, and user-owned records.",
      primaryHref:
        "https://chatgpt.com/g/g-69b88898408881918007240dc404ad17-re-funder",
      secondaryHref: "https://Re-Funder.com",
      accent: "from-cyan-400/40 via-sky-500/30 to-transparent",
      glow: "shadow-cyan-500/30",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      name: "Legal Memory",
      domain: "LegalMemory.com",
      secondary: "Apple Diagnostics via AppPrivacyReport ⬆️ ",
      description:
        "A user-provided evidence interpreter for privacy logs, screenshots, and structured records — designed around boundaries, traceability, and clarity.",
      primaryHref:
        "https://chatgpt.com/share/69b8850c-2210-8004-af83-902c900062fe",
      secondaryHref: "https://LegalMemory.com",
      accent: "from-violet-400/40 via-fuchsia-500/30 to-transparent",
      glow: "shadow-fuchsia-500/30",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      name: "Miss.Lead",
      domain: "AssistantLady.com",
      secondary: "AssistantLady.com called 'Miss.lead'",
      description:
        "Your concierge Help with Routes to work Traffic and etc. follows lead flow, alerts and OutLead.",
      primaryHref:
        "https://chatgpt.com/g/g-69b889cfefbc8191b9068ad85af1dd75-miss-lead",
      secondaryHref: "https://AssistantLady.com",
      accent: "from-amber-300/40 via-orange-400/30 to-transparent",
      glow: "shadow-orange-500/30",
      icon: <LinkIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030617] text-white overflow-hidden relative">
      {/* ambient glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(251,146,60,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">

        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 rounded-[2.2rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.4em] text-white/60">
                THE AGENT FAMILY
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold leading-[0.9] tracking-tight">
                Clean entry.
                <br />
                Powerful tools.
              </h1>

              <p className="mt-6 text-lg text-white/70 leading-8 max-w-2xl">
                A minimal, high-clarity homepage designed to route users into structured AI tools — without friction, clutter, or confusion.
              </p>
            </div>

            {/* floating stat cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {["3 Tools", "1 Entry", "Live"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
                >
                  <div className="text-lg font-semibold">{item}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.header>

        {/* TOOL GRID */}
        <main className="grid gap-8 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.section
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition-all duration-300 ${tool.glow} shadow-2xl`}
            >
              {/* gradient glow */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${tool.accent}`} />

              <div className="relative">
                {/* header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                      {tool.icon}
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {tool.name}
                    </h2>
                  </div>
                  <span className="text-xs text-white/60 border border-white/10 px-3 py-1 rounded-full">
                    Live
                  </span>
                </div>

                <div className="text-white/90 text-lg mb-1">{tool.domain}</div>
                <div className="text-xs uppercase tracking-wider text-white/50 mb-4">
                  {tool.secondary}
                </div>

                <p className="text-white/70 leading-7 mb-6 min-h-[110px]">
                  {tool.description}
                </p>

                {/* buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={tool.primaryHref}
                    target="_blank"
                    className="rounded-xl bg-white text-black text-sm font-medium px-4 py-3 text-center hover:scale-[1.02] transition"
                  >
                    Open Tool
                  </a>
                  <a
                    href={tool.secondaryHref}
                    target="_blank"
                    className="rounded-xl border border-white/15 bg-white/5 text-sm px-4 py-3 text-center hover:bg-white/10 transition"
                  >
                    Visit Domain
                  </a>
                </div>
              </div>
            </motion.section>
          ))}
        </main>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-white/40 text-sm">
         | © MK 2025 🗺️ Blue-Print.Ai 🛰 wwwTheAgentFamily.com 🔏 DOI.org/10.5281/zenodo.17777710 © MK 2025 |
        </footer>
      </div>
    </div>
  );
}
