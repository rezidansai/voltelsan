const stack = ["Next.js", "Supabase", "Vercel", "Node.js", "PostgreSQL", "TypeScript", "OpenAI", "Tailwind"];

const TechStack = () => {
  const items = [...stack, ...stack];
  return (
    <section id="stack" className="py-32 md:py-44">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">The Stack</p>
          <h2 className="display-font text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Tools chosen for longevity, not hype.
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max marquee-track gap-16 py-6">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="display-font shrink-0 text-3xl font-medium text-muted-foreground/60 transition-colors hover:text-foreground md:text-5xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
