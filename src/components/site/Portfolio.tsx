import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const ScrollReveal = ({ children, direction }: { children: React.ReactNode; direction: "left" | "right" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const translateClass = direction === "left" 
    ? "-translate-x-[120px] md:-translate-x-[180px]" 
    : "translate-x-[120px] md:translate-x-[180px]";

  return (
    <div
      ref={ref}
      style={{
        transition: "transform 1400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1400ms cubic-bezier(0.16, 1, 0.3, 1), filter 1400ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity, filter"
      }}
      className={`transform-gpu ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100 blur-0 scale-100"
          : `${translateClass} translate-y-16 opacity-0 blur-[10px] scale-[0.95]`
      }`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Selected Work</p>
            <h2 className="display-font max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Eliminate cumbersome processes. Build smart systems.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Stop wasting time on cumbersome processes.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} direction={i % 2 === 0 ? "right" : "left"}>
              <article
                className="group relative grid overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-elegant md:grid-cols-12"
              >
                <div className={`relative md:col-span-7 h-full ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="h-full aspect-[16/10] md:aspect-auto overflow-hidden">
                    {p.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      >
                        <source src={p.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        width={1280}
                        height={896}
                        className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${p.objectPosition || "object-center"}`}
                      />
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-12">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">{p.tag}</p>
                    <h3 className="display-font text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <Link
                    to={`/case-studies/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer group/link animate-fade-in"
                  >
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
