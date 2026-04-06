import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Zap,
  Mail,
  MapPin,
  Globe,
  Trophy,
  ImageIcon,
} from "lucide-react";

function DiplomaImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="pt-4 border-t border-border/50">
      <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
        Ontario Secondary School Diploma
      </p>
      <a
        href="/diploma.png"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden border border-border/60 bg-muted/20 group cursor-pointer"
      >
        {failed ? (
          <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground/50 py-10">
            <ImageIcon className="w-8 h-8" />
            <p className="text-xs font-mono text-center px-4">
              Diploma image not found
            </p>
          </div>
        ) : (
          <div className="relative">
            <img
              src="/diploma.png"
              alt="Ontario Secondary School Diploma"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              onError={() => setFailed(true)}
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
          </div>
        )}
      </a>
    </div>
  );
}

const education = [
  {
    degree: "Bachelor of Arts Honours in Computer Science",
    school: "York University",
    period: "2023 – 2028",
    details:
      "Focused on software engineering, algorithms, and distributed systems. Dean's list achievement.",
  },
];

const universityAwards = [
  "Member of Dean's Honour Roll (Winter 2024)",
  "Lassonde Entrance Scholarship",
  "YorkU Automatic Entrance Scholarship",
  "YorkU Automatic Entrance Scholarship 2",
];

const highSchoolAwards = [
  "Ontario Scholar Award",
  "Grade 12 TV Production Award",
  "Grade 12 Family Studies Award",
];

const experience = [
  {
    role: "Front-End Developer",
    company: "Co-op",
    period: "2026 – Present",
    type: "Full-time",
    bullets: [
      "Build and maintain responsive web applications using Next.js (14+), React, and TypeScript",
      "Translate UI/UX designs into pixel-perfect, accessible interfaces using Tailwind CSS or styled-components",
      "Another point...",
    ],
  },
  {
    role: "Programming Student",
    company: "Self-Taught",
    period: "2020 – 2022",
    type: "Learning",
    bullets: [
      "Mastered computer science fundamentals: algorithms, data structures, design patterns",
      "Built 20+ projects ranging from CLI tools to full-stack web applications",
      "Participated in online hackathons and competitive programming challenges",
    ],
  },
];

const skills = [
  { name: "React / Next.js", level: 60 },
  { name: "TypeScript", level: 60 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Java", level: 85 },
  { name: "Python", level: 80 },
  { name: "Git", level: 70 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionTitle({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-primary">
        {label}
      </h3>
      <div className="flex-1 h-px bg-border/60 ml-1" />
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Resume
            </h2>
            <p className="text-muted-foreground text-lg">
              A snapshot of my background, skills, and experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 shrink-0"
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left column — sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            {/* Identity card */}
            <motion.div
              variants={itemVariants}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/30 mb-2">
                <img
                  src="/avatar.png"
                  alt="Ibrahim Mammadov"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold">
                  Ibrahim Mammadov
                </h4>
                <p className="text-sm text-primary font-mono mt-0.5">
                  Front-End Developer
                </p>
              </div>
              <div className="space-y-2.5 pt-2 border-t border-border/60">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Mail className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span>ibrahim.mammad63@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span>Toronto, ON</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Globe className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span>Open to remote worldwide</span>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6"
            >
              <SectionTitle
                icon={<GraduationCap className="w-4 h-4 text-primary" />}
                label="Education"
              />
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "pt-5 border-t border-border/50" : ""}
                  >
                    <p className="font-semibold text-foreground text-sm leading-snug mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-xs font-mono text-primary mb-1">
                      {edu.school}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mb-2">
                      {edu.period}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards & Diploma */}
            <motion.div
              variants={itemVariants}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6"
            >
              <SectionTitle
                icon={<Trophy className="w-4 h-4 text-primary" />}
                label="Awards & Achievements"
              />
              <div className="space-y-5">
                {/* University Awards */}
                <div>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-secondary mb-3">
                    University
                  </p>
                  <ul className="space-y-2">
                    {universityAwards.map((award, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {award}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High School Awards */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
                    High School
                  </p>
                  <ul className="space-y-2">
                    {highSchoolAwards.map((award, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {award}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ontario Secondary School Diploma */}
                <DiplomaImage />
              </div>
            </motion.div>

            {/* Skill proficiency */}
            <motion.div
              variants={itemVariants}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6"
            >
              <SectionTitle
                icon={<Zap className="w-4 h-4 text-primary" />}
                label="Proficiency"
              />
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-mono text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — experience timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl p-6 lg:p-8"
            >
              <SectionTitle
                icon={<Briefcase className="w-4 h-4 text-primary" />}
                label="Work Experience"
              />

              <div className="relative border-l border-primary/20 ml-3 space-y-10">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary shadow-[0_0_12px_2px] shadow-primary/30" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-display font-bold text-foreground leading-tight">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="text-xs font-mono text-primary">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary/80 w-fit">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Highlights row */}
              <div className="mt-10 pt-8 border-t border-border/60 grid grid-cols-3 gap-4">
                {[
                  { label: "Years Coding", value: "2+" },
                  { label: "Project", value: "1" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
