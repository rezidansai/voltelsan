const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="display-font font-semibold">Pyzerion<span className="text-primary">.</span></span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pyzerion AI Studio. Architected with intent.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
