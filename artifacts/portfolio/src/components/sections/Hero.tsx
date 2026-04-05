import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const typedPhrases = ["Computer Science Student", "Front-End Developer", "Problem Solver"];

function useTypewriter(phrases: string[], speed = 75, deleteSpeed = 38, pauseTime = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? displayed.slice(0, -1)
          : current.slice(0, displayed.length + 1)
      );
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(t);
  }, [displayed, isDeleting, phraseIndex, phrases, speed, deleteSpeed, pauseTime]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(typedPhrases);

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-20 w-[650px] h-[650px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary mb-8 shadow-sm shadow-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-medium uppercase tracking-[0.12em]">
              Available for new opportunities
            </span>
            <Sparkles className="w-3 h-3 opacity-60" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-5"
          >
            Ibrahim{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">
              Mammadov
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-8 text-xl md:text-2xl font-mono font-medium text-muted-foreground min-h-[2rem]"
          >
            <span className="text-primary/60 select-none">&gt;</span>
            <span className="text-foreground/80">{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[2px] h-[1.2em] bg-primary ml-0.5 translate-y-[1px]"
            />
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed mb-10"
          >
            Just a young programmer aspiring to do great things
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              View Work
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-foreground border border-border/70 px-8 py-4 rounded-full font-semibold text-base hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-3 text-muted-foreground/50"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent"
            />
            <span className="text-xs font-mono tracking-widest uppercase rotate-90 origin-left translate-x-5">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
