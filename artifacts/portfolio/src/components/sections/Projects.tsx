import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Demo Tutoring Website",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, dark mode support, and advanced filtering capabilities. Built to handle complex datasets with a clean, intuitive interface.",
    image: "/project-1.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    links: { live: "https://demo-tutoring-website.replit.app/" },
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
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm uppercase tracking-wider transition-colors mt-6 md:mt-0"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
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

              <div className="w-full lg:w-2/5 space-y-6">
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
                <div className="flex items-center gap-4 pt-4">
                    {/* <Github className="w-4 h-4" /> Source */}
                  <a
                    href={project.links.live}
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
