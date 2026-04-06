import { motion } from "framer-motion";

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
      </div>
    </section>
  );
}
