import { useEffect, useState } from "react";
import heroVideo from "@/assets/pyzerion.mp4";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const phrases = t.hero.phrases;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    setCurrentText("");
    setCurrentPhraseIndex(0);
    setIsDeleting(false);
    setIsPausing(false);
  }, [language]);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex] || phrases[0];
    
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
  }, [currentText, isDeleting, isPausing, currentPhraseIndex, phrases]);

  // Compute normal text and gradient highlight text
  const fullText = phrases[currentPhraseIndex] || phrases[0];
  const gradientStartIndex = language === "tr" 
    ? fullText.indexOf("Akıllı") 
    : (currentPhraseIndex === 0 ? 32 : currentPhraseIndex === 1 ? 33 : 33);

  const normalPart = gradientStartIndex !== -1 && currentText.length > gradientStartIndex
    ? currentText.slice(0, gradientStartIndex)
    : currentText;

  const gradientPart = gradientStartIndex !== -1 && currentText.length > gradientStartIndex
    ? currentText.slice(gradientStartIndex)
    : "";

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
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="display-font animate-fade-in text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] min-h-[3.2em]">
          <span>{normalPart}</span>
          {gradientPart && (
            <span className="text-gradient ml-1">{gradientPart}</span>
          )}
          <span className="ml-1.5 inline-block w-[4px] h-[0.85em] align-middle bg-primary animate-caret-blink" />
        </h1>

        <p
          className="mt-8 max-w-2xl animate-fade-in text-base text-muted-foreground md:text-lg leading-relaxed"
          style={{ animationDelay: "120ms" }}
        >
          {t.hero.desc}
        </p>

        <div className="mt-12 flex animate-fade-in flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            {t.hero.getStarted}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white hover:text-primary hover:border-white"
          >
            {t.hero.viewWork}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
