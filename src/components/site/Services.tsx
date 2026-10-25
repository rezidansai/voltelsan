import { Bot, Database, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      title: t.services.aiTitle,
      desc: t.services.aiDesc,
    },
    {
      icon: Database,
      title: t.services.crmTitle,
      desc: t.services.crmDesc,
    },
    {
      icon: LayoutDashboard,
      title: t.services.adminTitle,
      desc: t.services.adminDesc,
    },
  ];

  return (
    <section id="services" className="relative border-y border-border bg-background py-32 md:py-44">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">{t.services.tag}</p>
          <h2 className="display-font text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {t.services.title}<br />{t.services.titleSub}
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
