import Link from "next/link";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

const activitiesContent: Record<
  number,
  {
    activityTitle: string;
    objective: string;
    pledgePoster?: string;
    evidenceImages?: string[];
    pdfUrl?: string;
    evidence: { label: string; url?: string; type: string }[];
    whatILearned: string;
    sustainabilityConnection: string;
    reflection: {
      surprisedMe: string;
      challengeFaced: string;
      doDifferently: string;
    };
    references: { title: string; link: string }[];
  }
> = {
  1: {
    activityTitle: "Activity 01: E-Waste & Environmental Management Pledge",
    objective:
      "To establish a personal and technical commitment toward mitigating electronic waste, promoting circular electronics lifecycles, and documenting responsible hardware disposition across IT systems.",
    pledgePoster: "/pledge_poster.png",
    evidence: [
      { label: "Signed Sustainability Commitment Certificate", url: "/pledge_poster.png", type: "Official Pledge Poster" },
      { label: "Hardware Disassembly & E-Waste Report", type: "PDF / Documentation" },
      { label: "BuyVora Sustainable Tech Architecture", url: "https://github.com/omthakur9819/Buyvora", type: "GitHub Repository" },
    ],
    whatILearned:
      "Through analyzing global e-waste trajectories, I learned that improper hardware disposal releases toxic heavy metals such as lead, mercury, and cadmium into ground soil while exhausting non-renewable rare earth minerals. Understanding the end-to-end lifecycle of consumer electronics reveals that hardware longevity is heavily dictated by software optimization, repairability, and modular system design. As an IT engineering student, I realized that writing efficient code and advocating for open technical documentation directly extends component lifespans, reducing premature device obsolescence across modern digital infrastructures.",
    sustainabilityConnection:
      "This activity helps reduce e-waste by establishing strict guidelines for modular system design, hardware component recycling, and software optimization that prevents functional devices from being rendered obsolete by heavy software bloat.",
    reflection: {
      surprisedMe:
        "The sheer volume of perfectly functional electronic hardware discarded globally every year simply due to unoptimized software updates and lack of documentation.",
      challengeFaced:
        "Balancing peak computational performance requirements with low-energy, sustainable hardware utilization across modern development environments.",
      doDifferently:
        "Prioritize lightweight software architectures, advocate for repairable hardware standards, and champion technical documentation for long-term device maintenance.",
    },
    references: [
      { title: "UNEP Global E-Waste Monitor Report", link: "https://www.unep.org" },
      { title: "Basel Action Network (BAN) E-Waste Standards", link: "https://www.ban.org" },
      { title: "IEEE Sustainable Systems & Hardware Engineering", link: "https://www.ieee.org" },
    ],
  },
  2: {
    activityTitle: "Activity 02: Crossword",
    objective:
      "To test and demonstrate comprehensive knowledge of e-waste metrics, regional Indian state statistics (Maharashtra, Delhi, Bihar), hazardous metal testing protocols (TCLP, Lead), and sustainable recycling channels through an interactive crossword assessment.",
    evidenceImages: ["/crossword_grid.png", "/crossword_clues.png"],
    evidence: [
      { label: "E-Waste Mastermind Solved Grid", url: "/crossword_grid.png", type: "Crossword Grid" },
      { label: "E-Waste Mastermind Across & Down Clues", url: "/crossword_clues.png", type: "Clues Worksheet" },
    ],
    whatILearned:
      "Solving the E-Waste Mastermind crossword reinforced key environmental statistics and regulatory standards governing e-waste in India. I learned that Maharashtra contributes the highest volume of WEEE (Waste Electrical and Electronic Equipment) in India, while Delhi records the highest per-capita e-waste generation, and Bihar records the lowest per-capita e-waste generation. Furthermore, the TCLP (Toxicity Characteristic Leaching Procedure) test determines hazardous waste levels, frequently detecting dangerous lead concentrations. Recognizing that 15–20% of e-waste is handled by the informal sector underscores the urgent necessity for standardized, formal recycling infrastructures and consumer awareness.",
    sustainabilityConnection:
      "Understanding regional e-waste generation metrics and toxic material profiles (such as lead, CFL lamp mercury, and plastics) directly informs responsible engineering decisions. It encourages designing products with non-hazardous material alternatives, establishing formal recycling pathways, and minimizing electronic waste accumulation in municipal landfills.",
    reflection: {
      surprisedMe:
        "That 15–20% of e-waste processing is driven by the informal sector, and that Maharashtra leads the country in total WEEE volume generation.",
      challengeFaced:
        "Distinguishing between per-capita generation rankings (Delhi vs. Bihar) and total state volume contributions (Maharashtra), alongside identifying specific regulatory testing acronyms like TCLP.",
      doDifferently:
        "Incorporate toxic material compliance checks (such as RoHS and TCLP standards) early in hardware system specification and technical documentation.",
    },
    references: [
      { title: "Central Pollution Control Board (CPCB) India E-Waste Management Rules", link: "https://cpcb.nic.in" },
      { title: "Toxicity Characteristic Leaching Procedure (TCLP) EPA Method 1311", link: "https://www.epa.gov" },
      { title: "India Ministry of Environment, Forest and Climate Change (MoEFCC) E-Waste Reports", link: "https://moef.gov.in" },
    ],
  },
  3: {
    activityTitle: "Activity 03: The Hidden Carbon Footprint of Our Gadgets",
    objective:
      "To calculate personal and digital carbon footprints, assess high-emission lifestyle drivers (transportation, food, and electronics), audit household electronic inventory, and evaluate the environmental lifecycle impact of electronics manufacturing versus extended device longevity.",
    evidenceImages: [
      "/carbon_footprint_p1.png",
      "/carbon_footprint_p2.png",
      "/carbon_footprint_p3.png",
      "/carbon_footprint_p4.png",
    ],
    pdfUrl: "/om_carbon_footprint.pdf",
    evidence: [
      { label: "Graded Worksheet: The Hidden Carbon Footprint of Our Gadgets (Evaluated by Prof. Nilima Main, VIT)", url: "/om_carbon_footprint.pdf", type: "Official Graded PDF" },
      { label: "Part A & B: Carbon Footprint Calculation & Electronic Lifestyle Audit", url: "/carbon_footprint_p1.png", type: "Worksheet Page 1" },
      { label: "Part B (cont.) & Part C: Device Inventory & Environmental Engineering Habits", url: "/carbon_footprint_p2.png", type: "Worksheet Page 2" },
      { label: "Part D: Reflection, Personal Habits & 5Rs Impact Analysis", url: "/carbon_footprint_p3.png", type: "Worksheet Page 3" },
      { label: "Discussion Questions & Innovative Engineering Solution Proposal", url: "/carbon_footprint_p4.png", type: "Worksheet Page 4" },
    ],
    whatILearned:
      "Calculating my annual carbon footprint revealed an emission output of 34 tCO2e/year compared to the national average of 7 tCO2e and global average of 19 tCO2e, indicating a resource consumption rate requiring 1.8 Earths. While daily transportation and dietary choices proved to be significant personal contributors, investigating electronics life cycles revealed that manufacturing—specifically semiconductor fabrication, cleanroom operations, and raw silicon refining—accounts for the overwhelming majority of a gadget's lifetime emissions rather than active use. Extending smartphone replacement cycles beyond 5 years and choosing component repairs (such as replacing batteries and displays) directly averts the carbon-heavy manufacturing of replacement units. Moreover, auditing household electronics exposed substantial e-waste hoarding (3 unused phones and 7 cables). Because recycling consumes heavy energy and cannot achieve 100% material recovery, strictly practicing the 5Rs—Refuse, Reduce, Reuse, Repair, and Recycle—is critical for sustainable technology lifecycles.",
    sustainabilityConnection:
      "Connecting personal carbon audits to hardware engineering demonstrates that device longevity is our most potent strategy against environmental degradation. Designing modular, easily repairable electronics, integrating bio-based PCBs, and writing energy-efficient software directly decrease manufacturing demand, conserve finite materials, and prevent premature gadget retirement to landfills.",
    reflection: {
      surprisedMe:
        "That my annual carbon footprint reached 34 tCO2e requiring 1.8 Earths, and that dietary consumption and device manufacturing stages generate significantly more emissions than daily digital device operation.",
      challengeFaced:
        "Confronting electronic hoarding habits (keeping 3 unused phones, 2 chargers, and 7 cables in drawers) and recognizing that recycling alone is an incomplete solution without proactive device reuse and repair.",
      doDifferently:
        "Commit to retaining electronics for 5+ years, prioritize hardware repair over replacement, minimize car commute emissions, and advocate for modular, energy-conscious hardware and software architectures in engineering projects.",
    },
    references: [
      { title: "Global Footprint Network — Personal Ecological Footprint & Overshoot Metrics", link: "https://www.footprintnetwork.org" },
      { title: "EPA Greenhouse Gas Equivalencies & Carbon Calculator", link: "https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator" },
      { title: "Central Pollution Control Board (CPCB) India — E-Waste Management Rules", link: "https://cpcb.nic.in" },
    ],
  },
};

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "";
  const idStr = rawSlug.replace("activity-", "");
  const id = parseInt(idStr, 10);
  const isValid = !isNaN(id) && id >= 1 && id <= 10;

  if (!isValid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0C] text-white px-6">
        <h1 className="text-4xl font-extrabold uppercase mb-6">Activity Not Found</h1>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest rounded-full font-bold hover:bg-neutral-200 transition-all"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Fallback dynamic content for activities 3-10
  const defaultContent = {
    activityTitle: `Activity ${String(id).padStart(2, "0")}: Technical System Analysis & Implementation`,
    objective:
      "To analyze complex engineering workflows, evaluate hardware/software efficiency, and document actionable digital solutions.",
    evidence: [
      { label: `Activity ${id} Technical Specification & Diagram`, type: "Documentation" },
      { label: `Project Code Repository & Execution Logs`, type: "GitHub Repository" },
    ],
    whatILearned:
      `Working on Activity ${id} provided deep insights into system architecture and technical problem solving. I explored how streamlined algorithms and structured documentation reduce systemic complexity, enabling teams to build reliable software solutions with minimum overhead.`,
    sustainabilityConnection:
      "Optimizing system architecture reduces cloud compute cycles and server power consumption, contributing directly to energy efficiency and reduced digital carbon footprint.",
    reflection: {
      surprisedMe:
        "How small structural changes in system architecture lead to significant gains in performance and resource conservation.",
      challengeFaced:
        "Synthesizing complex technical specifications into concise, clear documentation suitable for stakeholders.",
      doDifferently:
        "Implement automated continuous integration benchmarks earlier in the development lifecycle.",
    },
    references: [
      { title: "IEEE Computer Society System Architecture Guidelines", link: "https://www.computer.org" },
      { title: "ACM Digital Library Technical Documentation Standards", link: "https://dl.acm.org" },
    ],
  };

  const data = activitiesContent[id] || defaultContent;
  const dateStr = `Activity ${String(id).padStart(2, "0")}`;
  const categoryTag =
    id === 1
      ? "Pledge"
      : id === 2
      ? "Crossword"
      : id === 3
      ? "Carbon Footprint"
      : "Assignment";

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F4F4F5] selection:bg-emerald-400 selection:text-black">
      <Cursor />
      <SmoothScroll>
        <main className="relative flex flex-col px-6 md:px-12 py-16 md:py-24 min-h-screen max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#activities"
            className="interactable inline-flex items-center gap-3 mb-12 text-xs font-mono tracking-widest text-neutral-400 uppercase hover:text-emerald-400 transition-colors w-max"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 text-neutral-300 hover:border-emerald-400 hover:text-emerald-400 transition-all">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </div>
            BACK TO ACTIVITIES
          </Link>

          {/* Top Header Badge */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-bold">
              [{dateStr}]
            </span>
            <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 font-semibold">
              {categoryTag}
            </span>
          </div>

          {/* 1. Activity Title */}
          <section className="mb-16">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-3">
              1. ACTIVITY TITLE
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              {data.activityTitle}
            </h1>
          </section>

          {/* Structured Headings Grid */}
          <div className="flex flex-col gap-12 border-t border-neutral-800 pt-12">
            {/* 2. Objective */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-bold flex items-center gap-2">
                <span>02.</span> OBJECTIVE
              </h2>
              <p className="text-base sm:text-xl text-neutral-200 font-normal leading-relaxed">
                {data.objective}
              </p>
            </section>

            {/* 3. Evidence */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-bold flex items-center gap-2">
                  <span>03.</span> EVIDENCE
                </h2>
                {data.pdfUrl && (
                  <a
                    href={data.pdfUrl}
                    download="Om_Carbon_Footprint_Worksheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-emerald-400 text-neutral-200 hover:text-emerald-400 text-xs font-mono tracking-wider uppercase rounded transition-all interactable group"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-y-0.5 transition-transform"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>

              {data.evidenceImages && data.evidenceImages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.evidenceImages.map((imgUrl, idx) => (
                    <div key={idx} className="overflow-hidden rounded border border-neutral-800 bg-white flex justify-center p-4">
                      <a href={imgUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer group w-full h-full flex items-center justify-center">
                        <img
                          src={imgUrl}
                          alt={`Evidence Image ${idx + 1}`}
                          className="max-h-[600px] w-auto object-contain rounded shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ) : data.pledgePoster ? (
                <div className="overflow-hidden rounded border border-neutral-800 bg-neutral-900 flex justify-center p-4">
                  <a href={data.pledgePoster} target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
                    <img
                      src={data.pledgePoster}
                      alt="Signed Sustainability Commitment Certificate"
                      className="max-h-[650px] w-auto object-contain rounded shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {data.evidence.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-neutral-900/80 rounded border border-neutral-800/80 gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-sm">📁</span>
                        <span className="text-sm sm:text-base font-semibold text-white">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-neutral-400 uppercase bg-neutral-800 px-2.5 py-1 rounded">
                          {item.type}
                        </span>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-emerald-400 underline hover:text-emerald-300 interactable"
                          >
                            View Link ↗
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* 4. What I Learned */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-bold flex items-center gap-2">
                <span>04.</span> WHAT I LEARNED (~150 WORDS)
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                {data.whatILearned}
              </p>
            </section>

            {/* 5. Sustainability Connection */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-bold flex items-center gap-2">
                <span>05.</span> SUSTAINABILITY CONNECTION
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                {data.sustainabilityConnection}
              </p>
            </section>

            {/* 6. Reflection */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-6 font-bold flex items-center gap-2">
                <span>06.</span> REFLECTION
              </h2>
              <div className="flex flex-col gap-6 text-neutral-300 text-base sm:text-lg">
                <div className="border-l-2 border-emerald-400 pl-4 py-1">
                  <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">
                    • What surprised me?
                  </h3>
                  <p className="text-white font-normal">{data.reflection.surprisedMe}</p>
                </div>

                <div className="border-l-2 border-emerald-400 pl-4 py-1">
                  <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">
                    • What challenge did I face?
                  </h3>
                  <p className="text-white font-normal">{data.reflection.challengeFaced}</p>
                </div>

                <div className="border-l-2 border-emerald-400 pl-4 py-1">
                  <h3 className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">
                    • What will I do differently?
                  </h3>
                  <p className="text-white font-normal">{data.reflection.doDifferently}</p>
                </div>
              </div>
            </section>

            {/* 7. References */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800 mb-12">
              <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-bold flex items-center gap-2">
                <span>07.</span> REFERENCES
              </h2>
              <ul className="flex flex-col gap-3 font-mono text-sm">
                {data.references.map((ref, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-300">
                    <span className="text-emerald-400">[{idx + 1}]</span>
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 underline transition-colors interactable"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </SmoothScroll>
    </div>
  );
}
