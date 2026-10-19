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
    liveUrl?: string;
    instagramUrl?: string;
    campaignInfo?: {
      eventName: string;
      date: string;
      venue: string;
      organizer: string;
      instagramHandle: string;
      instagramUrl: string;
      speech: string;
      publicityMessage: string;
      highlights: string[];
    };
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
  4: {
    activityTitle: "Activity 04: Data Analysis: India E-Waste Growth Analytics & Circularity Assessment",
    objective:
      "To conduct quantitative data analytics on 25,200+ Indian municipal e-waste records (2015–2026), perform normalized peer-group benchmarking across major urban centers (Mumbai, Delhi, Bangalore, Pune, Kolkata), and evaluate systemic circularity gaps, collection bottlenecks, and formal recycling leakage.",
    evidenceImages: [
      "/activity4_analytics_overview.png",
      "/activity4_analytics_peer_benchmarking.png",
      "/activity4_analytics_growth_trends.png",
    ],
    liveUrl: "https://india-ewaste-analytics-rukaryjpzq4futpejbkf3v.streamlit.app/?peers=Mumbai%2CDelhi%2CBangalore%2CPune%2CKolkata",
    evidence: [
      { label: "Interactive Dashboard — India E-Waste Observatory", url: "https://india-ewaste-analytics-rukaryjpzq4futpejbkf3v.streamlit.app/?peers=Mumbai%2CDelhi%2CBangalore%2CPune%2CKolkata", type: "Streamlit Web Application" },
      { label: "Overview & Multi-City KPI Observatory", url: "/activity4_analytics_overview.png", type: "Dashboard Screenshot" },
      { label: "Normalized Peer Benchmarking Analysis (Mumbai, Delhi, Bangalore, Pune, Kolkata)", url: "/activity4_analytics_peer_benchmarking.png", type: "Analytics Chart" },
      { label: "Longitudinal E-Waste Trajectory & State-Level Rankings (2015–2026)", url: "/activity4_analytics_growth_trends.png", type: "Trajectory Chart" },
    ],
    whatILearned:
      "Analyzing longitudinal municipal data (2015–2026) across 25,200+ records revealed an aggressive 11-year CAGR of +7.56% in daily e-waste generation, surging from 770 T/D in 2015 to over 1,716 T/D in 2026, with an aggregate active volume exceeding 10,135 T/D. In comparative peer benchmarking, metropolitan hubs exhibited contrasting dynamics: Maharashtra generates the highest daily e-waste volume led by Mumbai and Pune, while Delhi and Bangalore experienced the sharpest post-2020 acceleration driven by rapid consumer electronics turnover and IT hardware decommission cycles. Crucially, the data exposed a severe systemic bottleneck: municipal collection efficiency plateaus at 50.8%, while formal recycling captures only 43.0% of generated volume. This indicates that over 50% of discarded electronics leak into the informal, unregulated sector or unmanaged dumpsites, resulting in toxic heavy metal leaching and substantial rare earth mineral losses.",
    sustainabilityConnection:
      "Data-driven circularity analytics bridges empirical waste accounting with actionable environmental policy. Identifying collection bottlenecks (50.8% efficiency) and informal leakage (>50%) proves that expanding formal take-back infrastructure, enforcing Extended Producer Responsibility (EPR) compliance, and utilizing real-time city-level tracking are vital to recovering high-value critical minerals (gold, copper, lithium) and curbing toxic environmental contamination across Indian urban ecosystems.",
    reflection: {
      surprisedMe:
        "That despite India's rapid digital infrastructure expansion, municipal collection efficiency has stagnated around 50.8%, leaving more than half of all discarded electronics to leak into informal, hazardous recycling channels.",
      challengeFaced:
        "Normalizing disparate multi-year municipal reporting metrics across diverse tier-1 and metro urban centers (Mumbai vs. Bangalore vs. Delhi) to establish consistent baseline comparisons without data skew.",
      doDifferently:
        "Incorporate predictive machine learning forecasting models and real-time municipal sensor telemetry to anticipate local e-waste surge points before seasonal consumer sales and corporate upgrade cycles.",
    },
    references: [
      { title: "India E-Waste Growth Analytics & Material Recovery Observatory (Streamlit Dashboard)", link: "https://india-ewaste-analytics-rukaryjpzq4futpejbkf3v.streamlit.app/?peers=Mumbai%2CDelhi%2CBangalore%2CPune%2CKolkata" },
      { title: "Central Pollution Control Board (CPCB), MoEFCC, Government of India – National E-Waste Inventory & Processing Capacities under E-Waste (Management) Rules", link: "https://cpcb.nic.in" },
      { title: "United Nations Institute for Training and Research (UNITAR) & ITU – The Global E-waste Monitor: Quantifying Global E-Waste and the Circular Economy Potential", link: "https://ewastemonitor.info" },
    ],
  },
  5: {
    activityTitle: "Activity 05: Video Task — E-Waste Recycling",
    objective:
      "To understand the core principles of electronic waste recycling, identify valuable recoverable metals (such as gold and copper), contrast safe plant processing against destructive dumping and open burning, and explore how closed-loop material recovery drives the circular economy through a 10-question video assessment.",
    evidenceImages: ["/video_task_proof.png"],
    evidence: [
      {
        label: "Verified Video Assessment Scorecard (100% Accuracy, 10/10 Streak, Score: 7500)",
        url: "/video_task_proof.png",
        type: "Evaluation Proof",
      },
      {
        label: "E-Waste Recycling Video Learning & 10-Question Conceptual Assessment",
        type: "Interactive Video Task",
      },
    ],
    whatILearned:
      "Engaging with the E-Waste Recycling video task reinforced fundamental concepts of responsible electronic waste management and sustainable material recovery. I learned that discarded electronic devices are not worthless trash to be discarded, but retain substantial value because they contain high-grade recoverable materials—most notably precious and industrial metals such as gold and copper. Instead of resorting to destructive practices like open burning, open dumping, or disposal in regular municipal landfills—which cause severe environmental pollution, soil degradation, and water contamination—dedicated recycling plants systematically process e-waste to recover these useful materials safely. Furthermore, the assessment emphasized that secondary resource extraction from electronic scrap directly powers the circular economy, keeping materials in continuous productive use rather than linear disposal. Achieving a 100% score across all 10 questions validated the video's core message: properly recycled e-waste transforms an urgent ecological liability into an invaluable source of sustainable resources.",
    sustainabilityConnection:
      "The questions in this video evaluation directly reflect key sustainability challenges in modern electrical and computer engineering. Improper disposal through open burning or uncontrolled dumping releases toxic heavy metals into ecosystems, contaminating soil and groundwater while wasting finite minerals. When electronic waste is directed to certified recycling plants, recovering copper and gold dramatically reduces the demand for virgin geological mining—an extractive process that accounts for immense greenhouse gas emissions, deforestation, and fossil fuel consumption. Closing the materials loop supports the circular economy model, ensuring that discarded hardware continues to fuel sustainable manufacturing cycles without depleting planetary boundaries.",
    reflection: {
      surprisedMe:
        "How common misconceptions treat discarded electronics as mere junk, whereas in reality, electronic scrap contains significantly higher concentrations of recoverable, valuable metals like gold and copper than natural raw ores.",
      challengeFaced:
        "Synthesizing how individual consumer actions—such as avoiding open dumping and refusing to throw electronics into regular household trash—directly connect to macro-level circular economy outcomes under timed assessment questions.",
      doDifferently:
        "Actively champion responsible electronic disposal by establishing community collection points, refusing to mix electronics with general garbage, and designing digital products that prioritize modular repair and material recovery.",
    },
    references: [
      {
        title: "Wayground Assessment Platform (https://wayground.com/join)",
        link: "https://wayground.com/join",
      },
    ],
  },
  6: {
    activityTitle:
      "Activity 06: Awareness Campaign — EcoCycle 2026: The E-Waste Action Challenge",
    objective:
      "To plan, coordinate, and execute an on-ground campus awareness campaign, interactive classroom publicity drive, and electronic waste collection initiative (EcoCycle 2026) organized by TE INFT students at Vidyalankar Institute of Technology (VIT). The campaign aimed to educate engineering peers on responsible disposal of dead batteries, broken chargers, old phones, and discarded cables; incentivize sustainable recycling habits through a knowledge assessment quiz with an E-Waste Champion Certificate (70%+ score threshold) and live leaderboard; and mobilize donations for the collection drive at VIT Plaza backed by digital community outreach on Instagram (@gadgets2green).",
    instagramUrl:
      "https://www.instagram.com/gadgets2green?xtok=OGY3bWtqOG0xbW53",
    campaignInfo: {
      eventName: "EcoCycle 2026: The E-Waste Action Challenge",
      date: "14th October 2026",
      venue: "VIT Plaza, Vidyalankar Institute of Technology",
      organizer: "Students of TE INFT",
      instagramHandle: "@gadgets2green",
      instagramUrl:
        "https://www.instagram.com/gadgets2green?xtok=OGY3bWtqOG0xbW53",
      speech: `Hey everyone, just a minute!

We’re organizing EcoCycle 2026: The E-Waste Action Challenge, as part of the E-Waste Awareness Campaign organized by the students of TE INFT.

Think about all the old phones, broken chargers, cables, and dead batteries lying around at home. Instead of throwing them in the regular dustbin, let’s learn how to dispose of them responsibly!

Join us on 14th October at VIT Plaza for an interactive e-waste recycling challenge, an exciting quiz, and a live leaderboard. Score 70% or above in the quiz to earn your E-Waste Champion Certificate!

You can also discover nearby e-waste collection points. And yes, do bring your old or unused e-waste gadgets for our collection drive!

Scan the QR code on the poster to participate, and follow our Instagram page @gadgets2green for updates.

So, everyone, come participate and encourage your friends to join in!

Don't trash the future. Recycle your e-waste!

Thank you!`,
      publicityMessage: `🌍 E-WASTE AWARENESS CAMPAIGN 2026 🌍
Organized by Students of TE INFT
♻️ Give Your Gadgets a Responsible Goodbye! 🌱

Hey Everyone!!

Do you know where your old phones, chargers, cables, and dead batteries belong? 🔋📱

It's time to take a step towards a greener future! Join us for EcoCycle 2026: The E-Waste Action Challenge and turn your awareness into action! 💚

📅 Date: 14th October 2026
📍 Venue: VIT Plaza

🎯 What's in store for you?
♻️ Take on an interactive e-waste recycling challenge.
🧠 Test your knowledge with an exciting quiz.
🏆 Score 70% or more to earn your E-Waste Champion Certificate and compete on the live leaderboard.
📍 Discover nearby e-waste drop-off points for old chargers, phones, cables, and batteries.

📲 Scan the QR code on the poster to participate!
Do bring your old/unused e-waste gadgets for the collection drive !!

📸 Follow our Instagram channel for updates, exciting content, and campaign highlights! 💚
🔗 Instagram: https://www.instagram.com/gadgets2green?xtok=OGY3bWtqOG0xbW53

🌎 Every small action counts. Let's reduce electronic waste, protect our planet, and build a sustainable future together.
💚 Don't trash the future. Recycle your e-waste! ♻️
✨ Let's go green, one gadget at a time! 🌱

📢 Don't forget to FOLLOW, SHARE, and SPREAD THE WORD! Encourage your friends and classmates to join the movement. Together, let's make our campus greener! 💚♻️`,
      highlights: [
        "Interactive E-Waste Recycling Challenge",
        "Knowledge Assessment Quiz with Live Leaderboard",
        "E-Waste Champion Certificate (Score ≥ 70%)",
        "Campus Gadget Collection Drive at VIT Plaza",
        "Mapping of Certified Regional E-Waste Drop-Off Points",
        "Social Media Campaign Outreach via @gadgets2green",
      ],
    },
    evidenceImages: [
      "/awareness_campaign_1.jpg",
      "/awareness_campaign_2.jpg",
      "/awareness_campaign_3.jpg",
    ],
    evidence: [
      {
        label:
          "Classroom Publicity Pitch: Launching EcoCycle 2026 across TE INFT Classrooms",
        url: "/awareness_campaign_1.jpg",
        type: "Classroom Campaign Session",
      },
      {
        label:
          "Peer Engagement & Active Audience Dialogue on Responsible Gadget Disposal",
        url: "/awareness_campaign_2.jpg",
        type: "Audience Interaction",
      },
      {
        label:
          "Speaker Delivery & VIT Plaza Gadget Collection Drive Briefing",
        url: "/awareness_campaign_3.jpg",
        type: "Campaign Delivery",
      },
      {
        label:
          "Official Campaign Instagram Channel & Digital Outreach (@gadgets2green)",
        url: "https://www.instagram.com/gadgets2green?xtok=OGY3bWtqOG0xbW53",
        type: "Social Media Campaign",
      },
    ],
    whatILearned:
      "Planning and executing the EcoCycle 2026 awareness campaign and pitching directly to engineering classrooms provided firsthand experience in environmental advocacy, public speaking, and community-driven sustainability initiatives. I learned that while fellow students recognize the overarching concept of e-waste, widespread misconceptions persist regarding smaller electronics—most peers routinely hoard dead batteries, defunct chargers, and obsolete cables in study desks or dump them into regular municipal bins simply because accessible drop-off points are unfamiliar. Delivering a concise, 1-minute classroom pitch taught me how to distill ecological urgency into concrete, accessible steps: visiting the VIT Plaza drive on 14th October and participating in our gamified quiz. Introducing a tangible performance incentive—an E-Waste Champion Certificate for scores of 70% and above, coupled with a real-time leaderboard—dramatically boosted student engagement compared to passive posters. Combining direct classroom dialogue with digital channels (@gadgets2green) reinforced that engineering leadership requires marrying technical literacy with communicative mobilization to spark collective environmental stewardship.",
    sustainabilityConnection:
      "Electronic waste represents India's fastest-growing municipal waste stream, fueled by hyper-accelerated consumer gadget replacement cycles. Small household peripherals—particularly dead lithium-ion batteries, fractured charging bricks, and discarded copper wires—are the most susceptible to improper disposal in municipal landfills. When exposed to weathering and landfill leaching, these items release potent toxins such as lead, cadmium, and volatile lithium into soil aquifers, while burning generates hazardous atmospheric dioxins. Concurrently, they sequester non-renewable resources, including high-purity copper, tin, and rare earth elements that require energy-intensive geological mining to replenish. By mobilizing the TE INFT student body through EcoCycle 2026 and establishing a centralized collection drive at VIT Plaza, our campaign directly diverted obsolete electronic gadgets into formal, certified recovery channels. Educating future software and systems engineers to practice responsible lifecycle stewardship curbs virgin mineral extraction and reduces computational carbon footprints.",
    reflection: {
      surprisedMe:
        "The immediate enthusiasm and competitive spirit sparked by gamifying e-waste education. When peers learned they could earn an official E-Waste Champion Certificate by scoring 70%+ on our quiz and compete on a live leaderboard, engagement skyrocketed compared to traditional informational flyers.",
      challengeFaced:
        "Delivering a high-impact, persuasive campaign pitch in under two minutes during lecture transitions, ensuring students clearly grasped the drive date (14th October), venue (VIT Plaza), target items (chargers, batteries, cables, phones), and QR code registration without disrupting academic schedules.",
      doDifferently:
        "Place dedicated, tamper-proof e-waste collection bins directly outside departmental laboratories several days prior to the event, and set up an interactive tablet kiosk during classroom breaks so students can test their knowledge on the live quiz immediately.",
    },
    references: [
      {
        title:
          "EcoCycle 2026: Official Campaign Channel — @gadgets2green (Instagram)",
        link: "https://www.instagram.com/gadgets2green?xtok=OGY3bWtqOG0xbW53",
      },
      {
        title:
          "Central Pollution Control Board (CPCB), MoEFCC — E-Waste Management Rules & Drop-Off Infrastructure",
        link: "https://cpcb.nic.in",
      },
      {
        title:
          "Ministry of Electronics and Information Technology (MeitY) — Awareness Program on Environmental Hazards of Electronic Waste",
        link: "https://www.meity.gov.in",
      },
      {
        title:
          "Vidyalankar Institute of Technology (VIT), Mumbai — Department of Information Technology",
        link: "https://vit.edu.in",
      },
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
  const isValid = !isNaN(id) && id >= 1 && id <= 6;

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
      : id === 4
      ? "Data Analysis"
      : id === 5
      ? "Video Task"
      : id === 6
      ? "Awareness Campaign"
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
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800 flex flex-col gap-8">
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-4 font-bold flex items-center gap-2">
                  <span>02.</span> OBJECTIVE
                </h2>
                <p className="text-base sm:text-xl text-neutral-200 font-normal leading-relaxed">
                  {data.objective}
                </p>
              </div>

              {data.campaignInfo && (
                <div className="flex flex-col gap-6 pt-6 border-t border-neutral-800/80">
                  {/* Campaign Key Metrics Bar */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        Date
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-2">
                        <span>📅</span> {data.campaignInfo.date}
                      </div>
                    </div>
                    <div className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        Venue
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white mt-1 flex items-center gap-2">
                        <span>📍</span> {data.campaignInfo.venue}
                      </div>
                    </div>
                    <div className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        Organized By
                      </div>
                      <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1 flex items-center gap-2">
                        <span>👥</span> {data.campaignInfo.organizer}
                      </div>
                    </div>
                    <div className="p-3.5 bg-neutral-900/60 rounded border border-neutral-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        Quiz Incentive
                      </div>
                      <div className="text-sm sm:text-base font-bold text-yellow-400 mt-1 flex items-center gap-2">
                        <span>🏆</span> ≥ 70% Certificate
                      </div>
                    </div>
                  </div>

                  {/* Highlights Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {data.campaignInfo.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 bg-neutral-900 border border-neutral-700/60 rounded-full text-neutral-300"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Spoken Pitch & Publicity Broadcast Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
                    {/* 1. Spoken Classroom Pitch */}
                    <div className="p-5 md:p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded border border-emerald-500/20 shadow-lg relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
                            <span>🎤</span> Spoken Classroom Pitch
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded">
                            Delivered Live to Peers
                          </span>
                        </div>
                        <div className="font-sans text-neutral-200 text-sm sm:text-base leading-relaxed whitespace-pre-line border-l-2 border-emerald-400/50 pl-4 py-1 italic">
                          {data.campaignInfo.speech}
                        </div>
                      </div>
                      <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span>Speaker: Om Thakur & TE INFT Team</span>
                        <span className="text-emerald-400">Classroom Outreach</span>
                      </div>
                    </div>

                    {/* 2. Official Publicity Broadcast Message */}
                    <div className="p-5 md:p-6 bg-neutral-900/90 rounded border border-neutral-800 shadow-lg flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
                            <span>📢</span> Campaign Broadcast Announcement
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded">
                            Broadcast & Posters
                          </span>
                        </div>
                        <div className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line bg-black/40 p-4 rounded border border-neutral-800 max-h-[380px] overflow-y-auto">
                          {data.campaignInfo.publicityMessage}
                        </div>
                      </div>
                      {data.campaignInfo.instagramUrl && (
                        <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                          <span className="text-xs font-mono text-neutral-400">
                            Follow @gadgets2green for updates
                          </span>
                          <a
                            href={data.campaignInfo.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline interactable"
                          >
                            Open Instagram Channel ↗
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 3. Evidence */}
            <section className="bg-neutral-950 p-6 md:p-8 rounded-sm border border-neutral-800">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h2 className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-bold flex items-center gap-2">
                  <span>03.</span> EVIDENCE
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
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
                  {data.liveUrl && (
                    <a
                      href={data.liveUrl}
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
                        className="group-hover:translate-x-0.5 transition-transform"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Open Live Streamlit Dashboard ↗
                    </a>
                  )}
                  {data.instagramUrl && (
                    <a
                      href={data.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-pink-500 text-neutral-200 hover:text-pink-400 text-xs font-mono tracking-wider uppercase rounded transition-all interactable group"
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
                        className="group-hover:scale-110 transition-transform text-pink-400"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram: @gadgets2green ↗
                    </a>
                  )}
                </div>
              </div>

              {data.evidenceImages && data.evidenceImages.length > 0 ? (
                <div className="flex flex-col gap-8">
                  <div
                    className={
                      data.evidenceImages.length === 1
                        ? "flex justify-center"
                        : data.evidenceImages.length === 3
                        ? "grid grid-cols-1 md:grid-cols-3 gap-6"
                        : "grid grid-cols-1 md:grid-cols-2 gap-6"
                    }
                  >
                    {data.evidenceImages.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className={`overflow-hidden rounded border border-neutral-800 flex justify-center p-3 transition-colors ${
                          imgUrl.includes("video_task")
                            ? "bg-neutral-950 max-w-xl w-full"
                            : imgUrl.includes("awareness_campaign")
                            ? "bg-neutral-900/90 w-full"
                            : "bg-white"
                        }`}
                      >
                        <a
                          href={imgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer group w-full h-full flex items-center justify-center"
                        >
                          <img
                            src={imgUrl}
                            alt={`Evidence Image ${idx + 1}`}
                            className="max-h-[550px] w-auto object-contain rounded shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </a>
                      </div>
                    ))}
                  </div>

                  {data.evidence && data.evidence.length > 0 && (
                    <ul className="flex flex-col gap-3">
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
                                View File ↗
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : data.pledgePoster ? (
                <div className="flex flex-col gap-8">
                  <div className="overflow-hidden rounded border border-neutral-800 bg-neutral-900 flex justify-center p-4">
                    <a href={data.pledgePoster} target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
                      <img
                        src={data.pledgePoster}
                        alt="Signed Sustainability Commitment Certificate"
                        className="max-h-[650px] w-auto object-contain rounded shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </a>
                  </div>
                  {data.evidence && data.evidence.length > 0 && (
                    <ul className="flex flex-col gap-3">
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
