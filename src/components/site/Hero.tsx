import { useEffect, useState } from "react";
import pyzerionVideo from "@/assets/pyzerion.mp4";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const phrases = [
    "Intelligent Systems for Complex Operational Processes.",
    "Intelligent Systems for Next-Gen Enterprise Brands.",
    "Intelligent Systems for Seamless Capital Automation."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    
    if (isPausing) {
      const timeout = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const tick = () => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsPausing(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(tick, isDeleting ? 30 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPausing, currentPhraseIndex]);

  let s1 = "";
  let s2 = "";
  let s3 = "";
  let s4 = "";

  if (currentPhraseIndex === 0) {
    s1 = currentText.slice(0, Math.min(currentText.length, 20));
    s2 = currentText.length > 20 ? currentText.slice(20, Math.min(currentText.length, 32)) : "";
    s3 = currentText.length > 32 ? currentText.slice(32, Math.min(currentText.length, 44)) : "";
    s4 = currentText.length > 44 ? currentText.slice(44, Math.min(currentText.length, 54)) : "";
  } else if (currentPhraseIndex === 1) {
    s1 = currentText.slice(0, Math.min(currentText.length, 20));
    s2 = currentText.length > 20 ? currentText.slice(20, Math.min(currentText.length, 33)) : "";
    s3 = currentText.length > 33 ? currentText.slice(33, Math.min(currentText.length, 44)) : "";
    s4 = currentText.length > 44 ? currentText.slice(44, Math.min(currentText.length, 51)) : "";
  } else {
    s1 = currentText.slice(0, Math.min(currentText.length, 20));
    s2 = currentText.length > 20 ? currentText.slice(20, Math.min(currentText.length, 33)) : "";
    s3 = currentText.length > 33 ? currentText.slice(33, Math.min(currentText.length, 41)) : "";
    s4 = currentText.length > 41 ? currentText.slice(41, Math.min(currentText.length, 52)) : "";
  }

  return (
    <section id="top" className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
      >
        <source src={pyzerionVideo} type="video/mp4" />
      </video>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          Intelligent Systems for Modern Brands
        </div>

        <h1 className="display-font animate-fade-in text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {s1}
          {s2 && <br className="hidden sm:block" />}
          {s2}
          {s3 && <br className="hidden sm:block" />}
          {s3}
          {s4 && (
            <span className="text-gradient">{s4}</span>
          )}
          <span className="ml-1.5 inline-block w-[4px] h-[0.85em] align-middle bg-primary animate-caret-blink" />
        </h1>

        <p
          className="mt-8 max-w-2xl animate-fade-in text-base text-muted-foreground md:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          Enterprise-level AI-powered response systems and custom CRMs. Designed for companies that don't want to be slowed down by legacy management systems.
        </p>

        <div className="mt-12 flex animate-fade-in flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white hover:text-primary hover:border-white"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
