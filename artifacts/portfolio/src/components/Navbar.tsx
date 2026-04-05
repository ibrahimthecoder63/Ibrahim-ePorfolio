import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Gradient border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          {/* Logo */}
          <a
            href="#top"
            data-testid="link-logo"
            className="relative group text-lg font-black tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              IM
            </span>
            <span className="text-foreground/80 text-sm align-super ml-0.5">'s Portfolio</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-testid="button-lets-talk"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border border-primary/30 text-primary bg-primary/8 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm shadow-primary/10"
            >
              Let's Talk
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-4 right-4 z-40 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/30 p-4"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
