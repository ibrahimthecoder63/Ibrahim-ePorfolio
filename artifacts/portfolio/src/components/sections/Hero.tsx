import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Sparkles,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

const typedPhrases = [
  "Computer Science Student",
  "Front-End Developer",
  "Problem Solver",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ibrahimthecoder63",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ibrahim-mammadov-28873b3b8/",
    icon: Linkedin,
  },
  {
    label: "+1 (647) 679-4828",
    href: "tel:+16476794828",
    icon: Phone,
  },
];

function useTypewriter(
  phrases: string[],
  speed = 75,
  deleteSpeed = 38,
  pauseTime = 2200,
) {
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

    const t = setTimeout(
      () => {
        setDisplayed(
          isDeleting
            ? displayed.slice(0, -1)
            : current.slice(0, displayed.length + 1),
        );
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(t);
  }, [
    displayed,
    isDeleting,
    phraseIndex,
    phrases,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

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
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
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

          {/* Heading — Orbitron for futuristic look */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-4xl md:text-6xl lg:text-7xl text-foreground block">
              Ibrahim
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary block">
              Mammadov
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-2 mb-6 text-lg md:text-xl font-mono font-medium text-muted-foreground min-h-[1.8rem]"
          >
            <span className="text-primary/60 select-none">&gt;</span>
            <span className="text-foreground/80">{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[2px] h-[1.1em] bg-primary ml-0.5 translate-y-[1px]"
            />
          </motion.div>

          {/* Tagline + socials row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
          >
            <p className="text-base text-muted-foreground font-light leading-relaxed shrink-0">
              Just a young programmer aspiring to do great things
            </p>

            {/* Divider */}
            <span className="hidden sm:block w-px h-4 bg-border/60 shrink-0" />

            {/* Social links */}
            <div className="flex items-center gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <s.icon className="w-3 h-3" />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 bg-white text-background px-8 py-4 rounded-full font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-black/20"
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
        </div>
      </div>
    </section>
  );
}
