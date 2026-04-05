import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">together.</span></h2>
            <p className="text-lg text-muted-foreground mb-10 font-light max-w-md">
              I'm currently open for new opportunities. Whether you have a project in mind or just want to chat about tech, feel free to reach out.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">hello@example.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">Remote / Global</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-mono text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-4 py-4 hover:bg-primary/90 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
