import { motion } from "framer-motion";
import { Target, TrendingUp, Rocket } from "lucide-react";

const goals = [
  {
    horizon: "Now",
    label: "Immediate Focus",
    icon: <Target className="w-5 h-5" />,
    colorClass: "text-primary border-primary/30 bg-primary/8",
    dotColor: "bg-primary",
    items: [
      "Ship polished, production-quality work at Treepz and continue growing as a professional front-end developer",
      "Deepen my understanding of Next.js and TypeScript",
      "Build a full-stack personal project end-to-end — from database to deployed UI",
    ],
  },
  {
    horizon: "Next",
    label: "1–2 Years",
    icon: <TrendingUp className="w-5 h-5" />,
    colorClass: "text-secondary border-secondary/30 bg-secondary/8",
    dotColor: "bg-secondary",
    items: [
      "Graduate with my Honours CS degree from York University",
      "Secure a full-time software engineering or front-end developer role at a company building something meaningful",
      "Make a real, merged contribution to an open-source project I care about",
    ],
  },
  {
    horizon: "Later",
    label: "Long-term Vision",
    icon: <Rocket className="w-5 h-5" />,
    colorClass: "text-accent border-accent/30 bg-accent/8",
    dotColor: "bg-accent",
    items: [
      "Lead development on a product used by real people at scale — and take ownership of its technical direction",
      "Grow into a senior engineering role where I can mentor early-career developers the way others have helped me",
      "Build something of my own — a tool or product that solves a problem I've lived through",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Goals() {
  return (
    <section
      id="goals"
      className="py-24 lg:py-32 bg-card/20 border-y border-border/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What I'm Working Towards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Goals give direction to the work. Here's where I'm focused right
            now, and where I'm aiming to be.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.horizon}
              variants={cardVariants}
              className="bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 p-8 flex flex-col gap-6 group"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-mono font-medium ${goal.colorClass}`}
                >
                  {goal.icon}
                  {goal.horizon}
                </div>
                <span className="text-xs text-muted-foreground/50 font-mono uppercase tracking-widest">
                  {goal.label}
                </span>
              </div>

              <ul className="space-y-4 flex-1">
                {goal.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground font-light leading-relaxed text-sm"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${goal.dotColor} opacity-70`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}