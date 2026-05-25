import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Cpu, Layers, HardDrive, Terminal, ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";

import watchApGreen from "@/assets/watch_ap_green.png";
import watchRmBlue from "@/assets/watch_rm_blue.png";
import watchRmDark from "@/assets/watch_rm_dark.png";
import watchApWhite from "@/assets/watch_ap_white.png";

const watches = [
  {
    brand: "RICHARD MILLE",
    model: "Audemars Piguet Royal Oak Green Dial 1551...",
    desc: "It has a raised inner dial (sw dial), is weighted and produced with ...",
    img: watchApGreen
  },
  {
    brand: "RICHARD MILLE",
    model: "RM-062",
    desc: "It is a great watchband model and offers customers a unique exp...",
    img: watchRmBlue
  },
  {
    brand: "RICHARD MILLE",
    model: "R.M.",
    desc: "It is a great watchband model and offers customers a unique exp...",
    img: watchRmDark
  },
  {
    brand: "AUDEMARS PIGUET",
    model: "Audemars Piguet Royal Oak 15510ST",
    desc: "Highest version with customized inner dial",
    img: watchApWhite
  }
];

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find project based on slug
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If project is not found, redirect to Not Found page
  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="display-font text-5xl font-semibold md:text-7xl">Project Not Found</h1>
        <p className="mt-6 text-muted-foreground">The case study you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  // Icons for bento cards based on index
  const getBentoIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Cpu className="h-6 w-6 text-primary" />;
      case 1:
        return <Layers className="h-6 w-6 text-primary" />;
      case 2:
        return <HardDrive className="h-6 w-6 text-primary" />;
      default:
        return <Terminal className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="display-font font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          PYZERION
        </Link>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 min-h-[70vh] flex items-end overflow-hidden">
        {/* Full-width visual background */}
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-45 scale-[1.01]"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.img}
              alt={project.title}
              className={`h-full w-full object-cover opacity-40 scale-[1.01] ${project.objectPosition || "object-center"}`}
            />
          )}
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient opacity-80" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto max-w-6xl relative z-10 px-6 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase rounded-full border border-primary/30 bg-primary/10 text-primary mb-6 animate-pulse">
              {project.tag}
            </span>
            <h1 className="display-font text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {project.desc}
            </p>
            {project.slug === "luxury-watch-brand" && (
              <a
                href="https://www.kbchrono.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C5A572] hover:bg-[#b09062] px-6 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(197,165,114,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.slug === "private-charter-architecture" && (
              <a
                href="https://seres.aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/80 px-6 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.slug === "global-cargo-acmi" && (
              <a
                href="https://www.smea.aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/80 px-6 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.slug === "aircraft-engine-expert" && (
              <a
                href="https://www.gozoaviation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/80 px-6 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.slug === "kraftox-ai-assistant" && (
              <a
                href="https://kraftox-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/80 px-6 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Executive Summary & Metrics */}
      <section className="py-24 border-t border-border/40 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            
            {/* Left: Summary */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-semibold">Executive Summary</h2>
                <p className="display-font text-2xl md:text-3xl font-medium leading-relaxed text-white">
                  {project.longDesc}
                </p>
              </div>
              
              {/* Tech Stack list */}
              <div className="mt-12">
                <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-md border border-border bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metrics & Details */}
            <div className="md:col-span-5 flex flex-col gap-8 justify-between">
              
              {/* Quick Specs */}
              <div className="rounded-3xl border border-border bg-card/30 p-8 flex flex-col gap-6">
                <h3 className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">Project Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">Client</span>
                    <span className="block text-sm font-medium text-white mt-1">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">Timeline</span>
                    <span className="block text-sm font-medium text-white mt-1">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Glowing Metrics grid */}
              <div className="grid gap-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/20 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-card/40"
                  >
                    <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
                    <span className="block text-3xl md:text-4xl font-semibold tracking-tight text-white display-font group-hover:text-primary transition-colors duration-300">
                      {m.value}
                    </span>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-2">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* System Architecture (Bento Box Grid) */}
      <section className="py-24 border-t border-border/40 bg-card/10">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-semibold">System Architecture</span>
            <h2 className="display-font text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              Bespoke Operational Modules
            </h2>
            <p className="mt-4 text-muted-foreground">
              {project.architectureDesc || "An intricate breakdown of the proprietary back-end systems and interfaces driving absolute authority."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {project.architecture.map((arch, index) => (
              <div
                key={arch.title}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-glow ${
                  arch.span || ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary mb-6 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow">
                  {getBentoIcon(index)}
                </div>
                <h3 className="display-font text-xl font-semibold text-white mb-3">
                  {arch.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                  {arch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterpieces of Time Section for Luxury Watch Brand */}
      {project.slug === "luxury-watch-brand" && (
        <section className="py-24 border-t border-white/5 bg-black relative z-10 overflow-hidden">
          {/* Subtle watch background overlay on the right */}
          <div className="absolute right-0 top-0 w-[45%] h-full pointer-events-none opacity-[0.07] select-none z-0 overflow-hidden hidden lg:block">
            <img 
              src={watchRmDark} 
              alt="Overlay Watch" 
              className="w-full h-full object-contain scale-150 translate-x-[25%] -translate-y-[10%] rotate-[15deg] filter grayscale contrast-125"
            />
          </div>

          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            {/* KBCHRONO Top Navigation */}
            <div className="flex justify-between items-center py-6 border-b border-white/5 mb-16 text-xs tracking-widest uppercase font-medium text-white/50 font-sans">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="flex flex-col gap-[3px] w-4">
                    <span className="h-[1.5px] w-full bg-white/50 group-hover:bg-white transition-colors"></span>
                    <span className="h-[1.5px] w-full bg-white/50 group-hover:bg-white transition-colors"></span>
                  </span>
                  <span>Menu</span>
                </button>
              </div>
              <a 
                href="https://www.kbchrono.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer"
              >
                {/* Custom Elegant K B Logo */}
                <span className="text-[#C5A572] font-serif text-2xl font-semibold tracking-normal">K</span>
                <span className="text-[#C5A572] font-serif text-2xl font-light tracking-normal -ml-1">B</span>
                <span className="text-[#C5A572] font-sans text-sm font-semibold tracking-[0.25em] ml-2">KBCHRONO</span>
              </a>
              <div className="flex items-center gap-8">
                <button className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  Search
                </button>
                <button className="hover:text-white transition-colors flex items-center gap-1">English <span className="text-[7px]">▼</span></button>
                <a 
                  href="https://www.kbchrono.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Collections
                </a>
              </div>
            </div>

            {/* Title Section */}
            <div className="max-w-3xl mb-12">
              <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#C5A572] mb-3 block">
                Collections
              </span>
              <h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Masterpieces of Time
              </h2>
              {/* Short Gold Underline Line */}
              <div className="h-[1.5px] w-24 bg-gradient-to-r from-[#C5A572] to-transparent" />
            </div>

            {/* Filter Navigation */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-6">
              {["Collection", "Model", "Concept", "Gender", "Type", "Material", "Color"].map((filter) => (
                <button
                  key={filter}
                  className="group flex items-center gap-1.5 text-xs tracking-wider uppercase font-bold text-[#C5A572] hover:opacity-80 transition-opacity"
                >
                  <span>{filter}</span>
                  <span className="text-[#C5A572]/60 text-[8px] transition-transform group-hover:translate-y-0.5">▼</span>
                  <span className="text-white/60 font-normal lowercase tracking-normal text-xs ml-1">all</span>
                </button>
              ))}
            </div>

            {/* Separator line below filters */}
            <div className="h-[1px] bg-white/5 w-full mb-14" />

            {/* Product Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {watches.map((watch) => (
                <div
                  key={watch.model}
                  className="group relative overflow-hidden rounded-3xl border border-transparent bg-transparent hover:bg-white/[0.02] p-4 transition-all duration-500 hover:border-white/5 flex flex-col justify-between"
                >
                  {/* Glowing background on hover with subtle gold hue */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#C5A572]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Watch Image Container */}
                  <div className="relative flex justify-center items-center py-6 h-64 overflow-hidden rounded-2xl bg-transparent">
                    <img
                      src={watch.img}
                      alt={watch.model}
                      className="w-full max-w-[170px] h-full object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1.5 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.02)] group-hover:drop-shadow-[0_0_15px_rgba(197,165,114,0.15)]"
                    />
                  </div>

                  {/* Typography Details */}
                  <div className="mt-6 relative z-10">
                    <span className="block text-[10px] tracking-[0.25em] uppercase text-[#C5A572] font-semibold mb-2">
                      {watch.brand}
                    </span>
                    <h3 className="display-font text-base font-bold text-white mb-2 leading-tight group-hover:text-[#C5A572] transition-colors duration-300">
                      {watch.model}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/40 font-light font-sans">
                      {watch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Floating Action Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-[#C5A572] hover:bg-[#b09062] flex items-center justify-center shadow-[0_4px_20px_rgba(197,165,114,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.792-4.382 9.795-9.79.001-2.618-1.01-5.08-2.848-6.92C16.378 2.05 13.92 1.033 11.3 1.033c-5.402 0-9.792 4.382-9.795 9.79-.001 2.012.528 3.975 1.535 5.71l-.999 3.651 3.734-.979zm12.187-5.067c-.297-.15-1.762-.87-2.033-.969-.272-.1-.47-.15-.668.15-.198.299-.767.969-.94 1.169-.173.2-.347.224-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.299-.018-.46.13-.61.134-.134.298-.348.446-.521.15-.173.2-.299.3-.499.099-.2.05-.376-.025-.525-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.762-.719 2.01-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </a>
        </section>
      )}

      {/* Key Features */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            
            {/* Left: Section Header */}
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block font-semibold">Key Capabilities</span>
              <h2 className="display-font text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-white">
                {project.featuresTitle || "Engineered for Absolute Precision"}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {project.featuresDesc || "We design fully autonomous platforms that scale with deep operational efficiency."}
              </p>
            </div>

            {/* Right: Features List */}
            <div className="md:col-span-8 grid gap-8">
              {project.features.map((feature, i) => (
                <div key={feature.title} className="flex gap-6 border-b border-border/40 pb-8 last:border-0 last:pb-0">
                  <span className="display-font text-xl md:text-2xl font-semibold text-primary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display-font text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA / Back to Projects */}
      <section className="py-32 border-t border-border/40 bg-gradient-to-b from-transparent to-card/10 text-center">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="display-font text-3xl md:text-5xl font-semibold text-white mb-8">
            Interested in scaling your systems?
          </h2>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 px-8 py-4 text-sm font-medium text-primary hover:text-white transition-all duration-500 hover:shadow-glow"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Back to All Projects
            <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-border/40 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Pyzerion. All rights reserved. Absolute brand authority and precision.</p>
      </footer>
    </main>
  );
};

export default CaseStudy;
