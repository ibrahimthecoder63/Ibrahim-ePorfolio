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
              <img src="/avatar.png" alt="Ibrahim Mammadov" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Behind the Code</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I'm Ibrahim Mammadov, a young programmer with an insatiable curiosity for how things work under the hood. I specialize in building robust, visually engaging applications that live at the intersection of design and engineering.
              </p>
              <p>
                My journey started with simple scripts and has evolved into full-stack development, where I strive to create scalable, user-centric software. I believe in writing code that not only works flawlessly but is clean, maintainable, and elegant.
              </p>
              <p>
                When I'm not in my code editor, I'm constantly learning new frameworks, exploring system architecture, or seeking out the next big challenge to level up my skills.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-display font-bold text-foreground mb-2">3+</h4>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Years Coding</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-foreground mb-2">20+</h4>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
