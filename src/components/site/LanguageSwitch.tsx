import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border/70 bg-secondary/60 p-0.5 backdrop-blur-md transition-all duration-300 hover:border-primary/40 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="flex items-center pl-2 pr-1 text-muted-foreground/70" aria-hidden="true">
        <Globe className="h-3.5 w-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage("tr")}
        className={`relative rounded-full px-2.5 py-1 text-xs font-semibold tracking-wider transition-all duration-300 ${
          language === "tr"
            ? "bg-primary text-primary-foreground shadow-glow"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={language === "tr"}
      >
        TR
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative rounded-full px-2.5 py-1 text-xs font-semibold tracking-wider transition-all duration-300 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-glow"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
