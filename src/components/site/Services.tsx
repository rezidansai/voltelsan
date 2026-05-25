import { Bot, Database, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Voice assistants and response systems that handle the volume your team can't — fluently, contextually, and on-brand.",
  },
  {
    icon: Database,
    title: "Custom CRM Development",
    desc: "Pipelines built around your real workflow, not a template. From lead capture to revenue, fully owned by you.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panel Design",
    desc: "Dashboards that make complex operations feel obvious. Built for speed, clarity, and confident decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative border-y border-border bg-background py-32 md:py-44">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">What I do</p>
          <h2 className="display-font text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Eliminate inefficiencies.<br />Scale operations.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col gap-6 bg-background p-10 transition-colors duration-500 hover:bg-secondary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="display-font text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
