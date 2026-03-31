import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 lg:py-6 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="text-xl font-display font-bold tracking-tight">
        <a href="#top" className="hover:text-primary transition-colors">
          IM.
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="hidden md:block">
        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}
