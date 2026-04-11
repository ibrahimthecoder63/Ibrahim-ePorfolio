import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Treepz",
    logo: "/treepz-logo.png",
    logoClass: "h-6",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Building and shipping responsive landing pages and web applications for clients using React, Next.js, and Tailwind CSS",
      "Translating Figma designs into pixel-accurate, accessible interfaces with a strong focus on mobile performance",
      "Structuring components for maintainability so projects stay clean and scalable as they grow",
    ],
    takeaway:
      "This role taught me what it means to ship production code — not just write it. Building for real users means the interface has to be clear and reliable, not just well-structured on the inside.",
  },
  {
    role: "Math Tutor",
    company: "TUTORAX",
    logo: "/tutorax-logo.png",
    logoClass: "h-6",
    period: "Oct 2025 – Present",
    bullets: [
      "Tutoring high school and university students in calculus, algebra, and discrete mathematics",
      "Breaking down abstract concepts into clear, step-by-step explanations — a skill that directly improves how I write documentation and communicate technical decisions in code",
      "Adapting my approach to each student's learning pace, building patience and strong communication under pressure",
      "Maintaining consistent high ratings through structured, goal-oriented sessions with measurable student improvement",
    ],
    takeaway:
      "Teaching reinforced that the clearest explanation always wins — a principle I now apply directly to how I name variables, write comments, and structure my code for others to read.",
  },
  {
    role: "Deputy Returning Officer",
    company: "Elections Canada",
    logo: "/elections-logo.png",
    logoClass: "h-8",
    period: "Apr 2025",
    bullets: [
      "Managed a federal polling station during the 2025 Canadian federal election, overseeing ballot processing and voter verification",
      "Ensured full compliance with Elections Canada guidelines, demonstrating the level of attention to detail and accountability I bring to every project",
    ],
    takeaway:
      "Running a polling station showed me that systems only work when every person follows the process precisely — which deepened my appreciation for code quality, thorough testing, and clear documentation.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            The roles and experiences that have shaped how I think, build, and
            communicate.
          </p>
        </motion.div>

        <div className="max-w-4xl border-l border-border/50 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-primary mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={`${exp.logoClass} w-auto object-contain`}
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.75 }}
                />
              </div>
              <ul className="space-y-2.5 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground font-light leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="border-l-2 border-primary/40 pl-4">
                <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                  <span className="text-primary/70 font-mono text-xs uppercase tracking-widest not-italic block mb-1">
                    Takeaway
                  </span>
                  {exp.takeaway}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
