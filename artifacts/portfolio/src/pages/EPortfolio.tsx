import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Folder,
  FileText,
  List,
  NotebookPen,
  Target,
  TrendingUp,
  Rocket,
  ChevronDown,
  ArrowLeft,
  BookOpen,
  Star,
  Users,
  Upload,
  Calendar,
} from "lucide-react";
import Footer from "@/components/Footer";

const goal = {
  title: "Goal: Discover Myself",
  subtitle: "Self-Assessment",
  introduction:
    "This is where I am keeping information about who I am — my background, what drives me, the values I carry into my work, and the experiences that have shaped my professional identity. This goal is the foundation on which every other career goal is built.",
  comment:
    "I thought I knew myself, but a better picture of me is emerging here. Through tutoring, development work, and navigating different professional environments, I have learned things about how I think, communicate, and grow that I could not have articulated before. The process of putting this together has been its own kind of self-assessment.",
  reflection:
    "The most important thing this goal has taught me is that career development is not just about acquiring skills — it is about understanding yourself well enough to place those skills in the right context. Knowing what I value, how I learn, and what kind of work energizes me has made every other career decision sharper and more deliberate.",
};

type PDFDoc = {
  title: string;
  type: string;
  date: string;
  introduction: string;
  reflection: string;
  bullets?: string[];
  text?: string;
  icon?: "journal";
  timeframes?: {
    label: "Now" | "Next" | "Later";
    sublabel: string;
    points: string[];
  }[];
  url?: string;
  critique?: string;
};

type Portfolio = {
  id: string;
  icon: React.ReactNode;
  name: string;
  introduction: string;
  reflection: string;
  comments: string;
  documents: PDFDoc[];
};

const portfolios: Portfolio[] = [
  {
    id: "dreams",
    icon: <Star className="w-4 h-4" />,
    name: "Portfolio: Dreams & Goals",
    introduction:
      "This portfolio will contain the materials that document my foundational motivations — childhood aspirations, the reasoning behind choosing Computer Science, and the career goals I am actively working toward. It captures where I started and where I am aiming.",
    reflection:
      "Looking back at my earliest motivations, I can see that curiosity has always been the engine. I wanted to understand how things work, and computers were the most interesting mystery I encountered. That curiosity has not faded — it has just become more directed.",
    comments:
      "This portfolio is a living record. As my goals evolve and new milestones are reached, new documents and reflections will be added here. Each entry marks a point in the journey, not a final destination.",
    documents: [
      {
        title: "Childhood Dreams",
        type: "Personal Narrative",
        date: "April 2026",
        introduction:
          "A short reflective piece on early experiences with computers and technology that shaped my interest in software development.",
        reflection:
          "Revisiting these early memories reminded me that the instinct to build and explore has always been there. This portfolio exists partly because of the kid who spent hours figuring out how programs worked — and I think that is worth documenting.",
        bullets: [
          "Fascinated by computers from a young age — more interested in how software was built than simply using it",
          "Spent hours exploring programs, games, and tools, and imagining what I could create",
        ],
      },
      {
        title: "Why This Major (Computer Science)?",
        type: "Written Statement",
        date: "April 2026",
        icon: "journal",
        introduction:
          "This is a written statement that highlights my reasons for choosing this major and the experiences that led me here.",
        reflection:
          "Writing this statement matters because it grounds every career decision in a honest starting point — knowing why you chose your path, even if the reason evolved over time, keeps your development intentional.",
        text: "Initially, I did not have a clear idea of what I wanted to pursue for a career, and my father suggested that I do Computer Science due to its strong long-term opportunities. While that originally impacted my choice, I grew to appreciate problem-solving and its ability to simplify everyday tasks as I became more familiar with coding.",
      },
      {
        title: "Career Goals",
        type: "Personal Planning",
        date: "April 2026",
        introduction:
          "A list outlining my long-term career goals. Written in April 2026 as a personal planning exercise and updated periodically.",
        reflection:
          "Breaking goals into Now, Next, and Later allows me to turn broad aspirations into a tangible plan for action — giving my career a clear direction to move in.",
        critique:
          "Looking back, some of these goals are still too vague to be truly actionable — 'build a full-stack project end-to-end' needs a deadline and a defined scope to hold real weight. The Now column is solid, but the Later column reads more like aspirations than goals. I need to revisit it with more specificity as I get closer to those timeframes.",
        timeframes: [
          {
            label: "Now",
            sublabel: "Immediate Focus",
            points: [
              "Ship polished, production-quality work at Treepz",
              "Deepen understanding of Next.js and TypeScript",
              "Build a full-stack personal project end-to-end",
            ],
          },
          {
            label: "Next",
            sublabel: "1–2 Years",
            points: [
              "Graduate with my Honours CS degree from York University",
              "Secure a full-time software engineering or front-end role",
              "Make a merged contribution to an open-source project",
            ],
          },
          {
            label: "Later",
            sublabel: "Long-Term Vision",
            points: [
              "Lead development on a product used at real scale",
              "Grow into a senior role and mentor early-career developers",
              "Build something of my own that solves a problem I've lived through",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "interests",
    icon: <BookOpen className="w-4 h-4" />,
    name: "Portfolio: Interests & Skills",
    introduction:
      "This portfolio contains my personal interests list and the SMART goals I developed from my undergraduate competency assessments. Together, they map out what I am naturally drawn to and the concrete targets I have set to grow toward it.",
    reflection:
      "Writing out my interests made me realise how much of what I gravitate toward was already shaping my decisions — I just had not named it. Pairing that with SMART goals gave me a way to act on it deliberately rather than just drifting in the right general direction.",
    comments:
      "The interests list reflects patterns I have noticed across every role and course I have taken. The SMART goals are reviewed regularly and updated as milestones are reached — they are meant to hold me accountable, not just look good on paper.",
    documents: [
      {
        title: "Interests List",
        type: "Self-Reflection",
        date: "April 2026",
        introduction:
          "A personal interests list compiled as part of career development coursework. Identifies primary areas: technical problem-solving, design, and education/teaching. Uploaded November 2023.",
        reflection:
          "The results confirmed what I already suspected — but seeing it laid out formally was useful. The intersection of technical work and communication/teaching is exactly where I have found the most satisfaction, and this document gives that observation some structure.",
        bullets: [
          "Primary interest: Technical problem-solving — designing and building systems that work correctly and elegantly",
          "Secondary interest: Design and user experience — making software that feels intuitive and well-crafted",
          "Tertiary interest: Education and communication — explaining complex ideas clearly, reinforced through tutoring",
          "Strong preference for roles that blend independent technical work with team collaboration",
          "High affinity for front-end development, where logic and visual design intersect directly",
          "Graphic design — a strong interest in visual composition, typography, and creating aesthetically purposeful work",
          "Basketball — a lifelong sport that has shaped how I think about teamwork, competition, and staying sharp under pressure",
          "Soccer — another sport I follow and play, valued for the discipline and collective strategy it demands",
        ],
      },
      {
        title: "Personal Development Goals — SMART Format",
        type: "Goal Planning Document",
        date: "February 2026",
        introduction:
          "Six SMART goals developed from 3 undergraduate competency assessments.",
        reflection:
          "Writing goals in SMART format changed how I think about progress. Vague ambitions do not create accountability. These goals do — and I check them regularly to stay honest about where I actually am versus where I want to be.",
        critique:
          "A few of the six goals were written to satisfy the assignment format rather than to genuinely challenge me. On reflection, the strongest ones are the ones tied to real deadlines — those are the ones I actually track. The weaker ones need to be rewritten with harder targets and clearer measures of success.",
        url: "/SMART Goals Assessment.pdf",
      },
    ],
  },
  {
    id: "values",
    icon: <Users className="w-4 h-4" />,
    name: "Portfolio: Values & Personality",
    introduction:
      "This portfolio contains my written reflection on what kind of engineer I want to be and a structured work and lifestyle values assessment. Together they reveal not just what I believe, but what I actually prioritize when real choices have to be made.",
    reflection:
      "Putting these two documents together made it clear that I think about my career in two different registers — the ideal and the practical. They are not always aligned, and that is probably more true for me right now than I would like to admit.",
    comments:
      "The reflection was easy to write because I could be aspirational. The assessment was harder because ranking things forces a real choice — and placing salary above helping people says something honest about where I am right now, even if it is not where I want to end up.",
    documents: [
      {
        title: "My Vision as an Engineer",
        type: "Written Reflection",
        date: "March 2026",
        introduction:
          "A written reflection on how I learn best — through building, applying, and iterating — and the pedagogical principles I have developed through tutoring. From a course assignment. Uploaded October 2023.",
        reflection:
          "Writing this made me realise that my teaching approach and my learning approach are the same: start with a real problem, break it down, and build back up. That consistency across contexts tells me something about how I am wired.",
        critique:
          "The written reflection lists good values — creativity, perseverance, patience — but never backs them up with a real example. It also describes the future as 'prosperous for all,' which is too broad to say anything meaningful. The reflection would be stronger if it tied each ideal to an actual experience rather than keeping it abstract.",
        url: "/Your Vision as an Engineer.pdf",
      },
      {
        title: "Values Perspective Assessment",
        type: "Self-Assessment Exercise",
        date: "February 2026",
        introduction:
          "Completed values perspective assessment identifying core professional values: craftsmanship, honesty, growth, and impact. Includes discussion question responses from the values clarification exercise.",
        reflection:
          "The most clarifying moment was ranking values against each other. When you have to choose between two things you care about, you learn what you actually prioritise. This exercise made explicit what I had been acting on implicitly.",
        critique:
          "Three of the top five work values are about salary and security, which sits in tension with ranking 'Help people' at seven. The conflict between high pay and family time is real but barely explored, and answering 'not really' to missing values feels too quick — creativity and autonomy don't appear anywhere in the list but clearly matter.",
        url: "/Values Assessment.pdf",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function PDFPlaceholder({ doc }: { doc: PDFDoc }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-card/40 transition-colors"
      >
        <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          {doc.icon === "journal" ? (
            <NotebookPen className="w-4 h-4 text-primary/70" />
          ) : doc.bullets ? (
            <List className="w-4 h-4 text-primary/70" />
          ) : (
            <FileText className="w-4 h-4 text-primary/70" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground/85 leading-snug">
            {doc.title}
          </p>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs font-mono text-muted-foreground/50 bg-muted/30 px-2 py-0.5 rounded">
              {doc.type}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground/40">
              <Calendar className="w-3 h-3" />
              {doc.date}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground/40 shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-4 border-t border-border/40 space-y-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary/50 mb-3">
                  Introduction
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {doc.introduction}
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-secondary/50 mb-1.5">
                  Reflection
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{doc.reflection}"
                </p>
              </div>
              {doc.critique && (
                <div className="bg-muted/20 border border-border/50 border-dashed rounded-lg p-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-orange-400/60 mb-2">
                    Critique
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "{doc.critique}"
                  </p>
                </div>
              )}
              {doc.timeframes ? (
                <div className="grid grid-cols-3 gap-3">
                  {doc.timeframes.map((tf) => {
                    const meta = {
                      Now: {
                        icon: <Target className="w-3.5 h-3.5" />,
                        color: "text-primary",
                        badge: "bg-primary/15 border-primary/30",
                        dot: "bg-primary/60",
                      },
                      Next: {
                        icon: <TrendingUp className="w-3.5 h-3.5" />,
                        color: "text-secondary",
                        badge: "bg-secondary/15 border-secondary/30",
                        dot: "bg-secondary/60",
                      },
                      Later: {
                        icon: <Rocket className="w-3.5 h-3.5" />,
                        color: "text-accent",
                        badge: "bg-accent/15 border-accent/30",
                        dot: "bg-accent/60",
                      },
                    }[tf.label];
                    return (
                      <div
                        key={tf.label}
                        className="bg-card/60 border border-border/50 rounded-xl p-4 flex flex-col gap-3"
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${meta.badge} ${meta.color}`}
                          >
                            {meta.icon}
                            {tf.label}
                          </span>
                          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground/40">
                            {tf.sublabel}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {tf.points.map((p, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${meta.dot}`}
                              />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : doc.text ? (
                <div className="bg-card/60 border border-border/50 rounded-lg p-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/40 mb-3">
                    Statement
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.text}
                  </p>
                </div>
              ) : doc.bullets ? (
                <div className="bg-card/60 border border-border/50 rounded-lg p-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/40 mb-3">
                    Key Points
                  </p>
                  <ul className="space-y-2">
                    {doc.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : doc.url ? (
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
                >
                  <FileText className="w-4 h-4" />
                  Open PDF
                </a>
              ) : (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/20 border border-border/40 border-dashed text-xs text-muted-foreground/50 font-mono">
                  <Upload className="w-3.5 h-3.5" />
                  PDF placeholder — document to be uploaded
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EPortfolio() {
  const [openPortfolios, setOpenPortfolios] = useState<Set<string>>(
    new Set(["dreams"]),
  );

  const toggle = (id: string) => {
    setOpenPortfolios((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border/30">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span
            className="text-sm font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            IM's Portfolio
          </span>
          <div className="w-32" />
        </div>
      </header>

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/8 text-xs font-mono uppercase tracking-widest text-primary/70">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                Career Development
              </span>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/40">
                ePortfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary/70">
              {goal.title}
            </h1>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-6 bg-primary/40" />
              <p className="text-muted-foreground/50 font-mono text-sm tracking-wider uppercase">
                {goal.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
              <div className="bg-card/40 border border-border/60 rounded-2xl p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-primary/50 mb-3">
                  Introduction
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.introduction}
                </p>
              </div>
              <div className="bg-card/40 border border-border/60 rounded-2xl p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-accent/50 mb-3">
                  Comment
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{goal.comment}"
                </p>
              </div>
              <div className="bg-card/40 border border-border/60 rounded-2xl p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-secondary/50 mb-3">
                  Reflection / Learned
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{goal.reflection}"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-px bg-border/40" />
              <div className="flex items-center gap-2 px-3">
                <Folder className="w-4 h-4 text-primary/50" />
                <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">
                  {portfolios.length} Portfolios
                </span>
              </div>
              <div className="flex-1 h-px bg-border/40" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {portfolios.map((portfolio, index) => {
              const isOpen = openPortfolios.has(portfolio.id);
              return (
                <motion.div
                  key={portfolio.id}
                  variants={cardVariants}
                  className="bg-background rounded-2xl border border-border hover:border-primary/20 transition-colors duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggle(portfolio.id)}
                    className="w-full border-b border-border/60 px-8 py-5 flex items-center gap-3 bg-card/40 hover:bg-card/70 transition-colors text-left cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <span className="text-xs font-mono font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-primary/50">{portfolio.icon}</span>
                      <Folder className="w-4 h-4 text-muted-foreground/40" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground/85 font-display flex-1">
                      {portfolio.name}
                    </h3>
                    <div className="flex items-center gap-3 ml-auto">
                      <span className="text-xs font-mono text-muted-foreground/40 hidden sm:block">
                        {portfolio.documents.length} documents
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
                          <div className="lg:col-span-2 space-y-5">
                            <div>
                              <p className="text-xs font-mono uppercase tracking-widest text-primary/50 mb-2">
                                Introduction
                              </p>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {portfolio.introduction}
                              </p>
                            </div>
                            <div className="bg-card/50 border border-border/60 rounded-xl p-5 space-y-4">
                              <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-secondary/50 mb-2">
                                  Reflection
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed italic">
                                  "{portfolio.reflection}"
                                </p>
                              </div>
                              <div className="border-t border-border/40 pt-4">
                                <p className="text-xs font-mono uppercase tracking-widest text-accent/50 mb-2">
                                  Comments
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {portfolio.comments}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="lg:col-span-3">
                            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/40 mb-4">
                              Contents
                            </p>
                            <div className="space-y-3">
                              {portfolio.documents.map((doc, i) => (
                                <PDFPlaceholder key={i} doc={doc} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
