import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageSwitchProps {
  className?: string;
}

const languages = [
  {
    code: "tr" as const,
    label: "Türkçe",
    short: "TR",
    flag: "🇹🇷",
  },
  {
    code: "en" as const,
    label: "English",
    short: "EN",
    flag: "🇬🇧",
  },
];

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      {/* Sleek Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none ${
          isOpen
            ? "border-primary/50 bg-primary/10 text-foreground shadow-glow"
            : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:bg-white/[0.07] hover:text-foreground"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-45" />
        <span className="font-semibold tracking-wider text-[11px] uppercase text-foreground">
          {currentLang.short}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-muted-foreground/80 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "group-hover:translate-y-0.5"
          }`}
        />
      </button>

      {/* Floating Glassmorphism Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full mt-2.5 w-40 origin-top-right rounded-2xl border border-white/10 bg-background/85 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200 z-50"
        >
          <div className="space-y-0.5">
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setLanguage(item.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm select-none" aria-hidden="true">
                      {item.flag}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 text-primary animate-in fade-in duration-150" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
