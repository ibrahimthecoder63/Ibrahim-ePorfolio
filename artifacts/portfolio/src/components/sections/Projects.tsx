import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Math Tutoring Platform",
    description:
      "A full-stack tutoring website built to connect students who need math help with a real tutor. Features an integrated session booking system and a contact form for inquiries — allowing interested students to reach out or reserve a slot directly. Built from scratch with server-side form handling in PHP, this was my first project that solved a real problem for real users rather than just serving as a coding exercise.",
    learned:
      "Building this taught me how to handle server-side form logic, structure a multi-page site around a user's goal, and think about the experience from the visitor's perspective — not just the developer's.",
    image: "/project-1.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    links: { github: "#", live: "https://demo-tutoring-website.replit.app/" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex md:items-end md:justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Selected Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A collection of projects showcasing my progression and
              capabilities in software development.
            </p>
          </div>
          <span
            title="Coming soon"
            className="hidden md:inline-flex items-center gap-2 text-muted-foreground/40 font-mono text-sm uppercase tracking-wider cursor-not-allowed mt-6 md:mt-0 select-none"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </span>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-8 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
            >
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden border border-border/50 bg-card aspect-[16/9]">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="w-full lg:w-2/5 space-y-5">
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-bold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="border-l-2 border-primary/40 pl-4">
                  <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                    <span className="text-primary/70 font-mono text-xs uppercase tracking-widest not-italic block mb-1">What I learned</span>
                    {project.learned}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  {/* <a
                    href={project.links.github}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card hover:bg-muted border border-border transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a> */}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
