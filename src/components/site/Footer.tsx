import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img 
            src="/voltelsan-logo.png" 
            alt="Voltelsan" 
            className="h-6 w-auto object-contain" 
          />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.tagline}
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">{t.footer.work}</a>
          <a href="#services" className="transition-colors hover:text-foreground">{t.footer.services}</a>
          <a href="#contact" className="transition-colors hover:text-foreground">{t.footer.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
