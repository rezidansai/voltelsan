import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Remove the hash from the URL smoothly without reloading
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-elegant" : ""
        }`}
        aria-label="Primary"
      >
        <a 
          href="/" 
          onClick={scrollToTop} 
          className="flex items-center gap-2 text-sm font-semibold tracking-tight cursor-pointer"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-glow animate-glow-pulse" />
          <span className="display-font">Pyzerion<span className="text-primary">.</span></span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
