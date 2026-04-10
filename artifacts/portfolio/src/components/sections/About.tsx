import { motion } from "framer-motion";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 translate-x-0.5"
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden border border-border/50 bg-card">
              <img
                src="/profile.jpg"
                alt="Ibrahim Mammadov"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Behind the Code
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I'm Ibrahim Mammadov — originally from Azerbaijan, now based in
                Ontario, Canada, and currently pursuing a Computer Science
                degree at York University. My programming journey started at 16
                with a simple curiosity about how websites work, and has since
                grown into a genuine passion for front-end development.
              </p>
              <p>
                I specialize in building clean, responsive interfaces using
                React, TypeScript, and modern CSS — experiences that feel
                intuitive to use and polished to look at. What makes me a
                stronger developer than my years alone suggest is my background
                in tutoring: teaching mathematics has sharpened how I
                communicate complex ideas, collaborate with others, and write
                code that people can actually understand.
              </p>
              <p>
                I'm currently focused on growing as a front-end developer while
                deepening my software engineering fundamentals through my
                studies. I'm always chasing the next challenge — whether that's
                a tricky UI problem, a new framework, or a project that pushes
                me somewhere I haven't been before.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-4xl font-display font-bold text-foreground mb-2">
                  2+
                </h4>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  Years Coding
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-24"
        >
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/50 bg-card group cursor-pointer">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />

            {/* Animated noise texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] mix-blend-overlay" />

            {/* Decorative lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-8 px-10 pointer-events-none select-none">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
                  Introduction
                </span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">
                  00:00 / 00:00
                </span>
                <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">
                  1080p
                </span>
              </div>
            </div>

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="relative">
                {/* Ripple rings */}
                <div className="absolute inset-0 rounded-full bg-primary/20 scale-150 group-hover:scale-[2] transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-[1.75] group-hover:scale-[2.5] transition-transform duration-700 delay-100 ease-out opacity-0 group-hover:opacity-100" />

                {/* Play button circle */}
                <div className="relative w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 text-primary-foreground">
                  <PlayIcon />
                </div>
              </div>

              <div className="text-center">
                <p className="text-base font-display font-semibold text-foreground tracking-wide">
                  Watch My Story
                </p>
                <p className="text-sm text-muted-foreground font-light mt-1">
                  A quick intro — coming soon
                </p>
              </div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
