import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-medium uppercase tracking-wider">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Ibrahim{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Mammadov
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10"
          >
            Just a young programmer aspiring to do great things
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-lg hover:bg-primary transition-all duration-300"
            >
              View Work
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-foreground border border-border px-8 py-4 rounded-full font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
