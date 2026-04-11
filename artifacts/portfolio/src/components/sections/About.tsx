import { motion } from "framer-motion";
import { useRef, useState } from "react";

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

function PauseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
      setStarted(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

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
                I'm Ibrahim — based in Toronto and studying Computer Science at
                York University. I got into coding at 16 just trying to
                understand how websites worked, and somewhere along the way it
                stopped being a hobby and became what I want to do.
              </p>
              <p>
                I build interfaces — clean, responsive, and actually pleasant to
                use. React, TypeScript, and modern CSS are my main tools, but
                what I care about most is the feel of the end result. My
                background in tutoring math has made me a better communicator
                and a more deliberate coder — if you can explain something
                clearly, you probably understand it.
              </p>
              <p>
                Outside of development, I'm into graphic design, basketball, and
                soccer. Design keeps my eye sharp for detail and proportion.
                Sport keeps everything else in check. I try to bring the same
                focus I have on the court or the pitch into the work — stay
                patient, keep improving, and see things through.
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

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-24"
        >
          <div
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-border/50 bg-black group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/api/video/intro.mp4"
              className="w-full h-full object-cover"
              onEnded={() => setPlaying(false)}
              playsInline
            />

            {/* Overlay — hides once playing */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-black/60 to-secondary/10 transition-opacity duration-500 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            />

            {/* Top-left label */}
            {!playing && (
              <div className="absolute top-6 left-8 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-widest">
                  Introduction
                </span>
              </div>
            )}

            {/* Center play/pause button */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="relative">
                {!playing && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-150 group-hover:scale-[2] transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100" />
                    <div className="absolute inset-0 rounded-full bg-primary/10 scale-[1.75] group-hover:scale-[2.5] transition-transform duration-700 delay-100 ease-out opacity-0 group-hover:opacity-100" />
                  </>
                )}
                <div className="relative w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 text-primary-foreground">
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </div>
              </div>

              {!started && (
                <div className="text-center">
                  <p className="text-base font-display font-semibold text-foreground tracking-wide">
                    Watch My Story
                  </p>
                  <p className="text-sm text-muted-foreground font-light mt-1">
                    A quick intro
                  </p>
                </div>
              )}
            </div>

            {/* Decorative glows */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
