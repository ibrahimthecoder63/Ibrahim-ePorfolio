import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    icon: <Layout className="w-6 h-6 text-primary" />,
    context: "Used daily in professional work and personal projects — my core toolkit",
    skills: ["HTML", "React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Back-End",
    icon: <Database className="w-6 h-6 text-secondary" />,
    context: "Foundational knowledge for building APIs and handling server-side logic",
    skills: ["Node.js", "JavaScript"],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    context: "JS & TS professionally; Python, C & Java through university coursework",
    skills: ["JavaScript", "TypeScript", "Python", "C", "Java"],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="w-6 h-6 text-muted-foreground" />,
    context: "The core of my everyday development workflow",
    skills: ["Git", "Linux", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-card/30 border-y border-border/50 relative"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-display">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground/60 font-light leading-snug mb-5">
                {category.context}
              </p>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3"></span>
                    <span className="font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
