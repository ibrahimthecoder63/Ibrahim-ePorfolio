import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Building custom web applications and landing pages for clients using React, Next.js, and Tailwind CSS. Focusing on performance, accessibility, and modern design principles to deliver exceptional user experiences."
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 - Present",
    description: "Actively contributing to open-source libraries, fixing bugs, improving documentation, and learning from the global developer community. Passionate about giving back to the tools I use daily."
  },
  {
    role: "Programming Student",
    company: "Self-Taught",
    period: "2020 - 2022",
    description: "Mastered fundamental computer science concepts, algorithms, and data structures. Built foundational projects in Python and JavaScript to establish a strong technical baseline."
  }
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Journey</h2>
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
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-mono text-primary mt-1 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
