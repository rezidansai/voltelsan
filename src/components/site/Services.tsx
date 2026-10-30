import { Bot, Database, LayoutDashboard, Globe, Wrench, SatelliteDish, BatteryCharging, PlugZap, Cable, RadioTower, Earth, PanelsTopLeft, ArrowUpRight } from "lucide-react";
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
    {
      icon: Globe,
      title: t.services.webTitle,
      desc: t.services.webDesc,
    },
    { icon: Wrench, title: t.services.electricalTitle, desc: t.services.electricalDesc },
    { icon: SatelliteDish, title: t.services.satelliteTitle, desc: t.services.satelliteDesc },
    { icon: BatteryCharging, title: t.services.upsTitle, desc: t.services.upsDesc },
    { icon: PlugZap, title: t.services.installationTitle, desc: t.services.installationDesc },
    { icon: Cable, title: t.services.cablingTitle, desc: t.services.cablingDesc },
    { icon: RadioTower, title: t.services.transformerTitle, desc: t.services.transformerDesc },
    { icon: Earth, title: t.services.groundingTitle, desc: t.services.groundingDesc },
    { icon: PanelsTopLeft, title: t.services.panelsTitle, desc: t.services.panelsDesc },
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

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group relative flex min-h-72 flex-col gap-5 bg-background p-7 transition-colors duration-500 hover:bg-secondary/40 md:p-8"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="relative display-font text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="relative mt-auto inline-flex items-center gap-2 pt-3 text-xs font-semibold text-primary hover:underline">
                {t.services.contactCta} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
