export type Language = 'tr' | 'en';

export interface TranslationDictionary {
  nav: {
    work: string;
    services: string;
    stack: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    phrases: string[];
    desc: string;
    getStarted: string;
    viewWork: string;
  };
  portfolio: {
    tag: string;
    title: string;
    desc: string;
    caseStudy: string;
  };
  services: {
    tag: string;
    title: string;
    titleSub: string;
    aiTitle: string;
    aiDesc: string;
    crmTitle: string;
    crmDesc: string;
    adminTitle: string;
    adminDesc: string;
  };
  stack: {
    tag: string;
    title: string;
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    name: string;
    email: string;
    company: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };
  footer: {
    tagline: string;
    work: string;
    services: string;
    contact: string;
  };
  caseStudy: {
    backToProjects: string;
    visitLivePlatform: string;
    executiveSummary: string;
    techStack: string;
    projectDetails: string;
    client: string;
    timeline: string;
    systemArchitecture: string;
    architectureTitle: string;
    coreFeatures: string;
    featuresTitle: string;
    scaleCtaTitle: string;
    backToAll: string;
    footerCopyright: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    returnHome: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  tr: {
    nav: {
      work: "Projeler",
      services: "Hizmetler",
      stack: "Teknolojiler",
      contact: "İletişim",
      getStarted: "Başlayın",
    },
    hero: {
      badge: "Modern Markalar İçin Akıllı Sistemler",
      phrases: [
        "Karmaşık Operasyonel Süreçler İçin Akıllı Sistemler.",
        "Gelecek Nesil Kurumsal Markalar İçin Akıllı Sistemler.",
        "Kusursuz Sermaye Otomasyonu İçin Akıllı Sistemler.",
      ],
      desc: "Kurumsal düzeyde yapay zeka destekli yanıt sistemleri ve özel CRM altyapıları. Eski hantal yönetim sistemleri tarafından yavaşlatılmak istemeyen yenilikçi şirketler için tasarlandı.",
      getStarted: "Başlayın",
      viewWork: "Projeleri İnceleyin",
    },
    portfolio: {
      tag: "Seçilmiş Projeler",
      title: "Hantal süreçleri sonlandırın. Akıllı sistemler inşa edin.",
      desc: "Zamanınızı verimsiz operasyonlarla kaybetmeyi bırakın.",
      caseStudy: "Vaka analizi",
    },
    services: {
      tag: "Neler Yapıyoruz",
      title: "Verimsizlikleri sonlandırın.",
      titleSub: "Operasyonları ölçekleyin.",
      aiTitle: "Yapay Zeka Otomasyonu",
      aiDesc: "Ekibinizin yetişemediği iş hacmini akıcı, bağlamsal ve marka kimliğinize birebir uygun şekilde yöneten sesli asistanlar ve yapay zeka yanıt sistemleri.",
      crmTitle: "Özel CRM Geliştirme",
      crmDesc: "Hazır şablonlar yerine, doğrudan gerçek iş akışınız etrafında tasarlanmış süreçler. İlk temas anından gelire kadar tamamen size ait altyapı.",
      adminTitle: "Yönetim Paneli Tasarımı",
      adminDesc: "Karmaşık operasyonları anında berraklaştıran kontrol panelleri. Hız, netlik ve kendinden emin kararlar için geliştirildi.",
    },
    stack: {
      tag: "Teknoloji Altyapısı",
      title: "Geçici trendler için değil, kalıcılık ve dayanıklılık için seçilen araçlar.",
    },
    contact: {
      tag: "İletişime Geçin",
      title: "Otomatikleştirmeye değer bir sisteminiz mi var?",
      desc: "Ekibinizi tüketen iş akışından bahsedin. Taleplerinize bir iş günü içinde şahsen dönüş yapıyorum.",
      name: "Ad Soyad",
      email: "E-posta",
      company: "Şirket",
      message: "Ne inşa etmek istiyorsunuz?",
      send: "Mesaj Gönder",
      sending: "Gönderiliyor…",
      success: "Mesajınız alındı. En kısa sürede iletişime geçeceğim.",
    },
    footer: {
      tagline: "Voltelsan. Kusursuz amaç ve hassasiyetle inşa edildi.",
      work: "Projeler",
      services: "Hizmetler",
      contact: "İletişim",
    },
    caseStudy: {
      backToProjects: "Projelere Dön",
      visitLivePlatform: "Canlı Platformu Ziyaret Et",
      executiveSummary: "Yönetici Özeti",
      techStack: "Teknoloji Yığını",
      projectDetails: "Proje Detayları",
      client: "Müşteri",
      timeline: "Tarih",
      systemArchitecture: "Sistem Mimarisi",
      architectureTitle: "Özel Operasyonel Modüller",
      coreFeatures: "Temel Özellikler",
      featuresTitle: "Gelişmiş Platform Yetenekleri",
      scaleCtaTitle: "Sistemlerinizi ölçeklendirmek ister misiniz?",
      backToAll: "Tüm Projelere Dön",
      footerCopyright: "Voltelsan. Tüm hakları saklıdır. Mutlak marka otoritesi ve hassasiyet.",
    },
    notFound: {
      title: "404",
      subtitle: "Sayfa bulunamadı",
      returnHome: "Ana Sayfaya Dön",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      stack: "Stack",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Intelligent Systems for Modern Brands",
      phrases: [
        "Intelligent Systems for Complex Operational Processes.",
        "Intelligent Systems for Next-Gen Enterprise Brands.",
        "Intelligent Systems for Seamless Capital Automation.",
      ],
      desc: "Enterprise-level AI-powered response systems and custom CRMs. Designed for companies that don't want to be slowed down by legacy management systems.",
      getStarted: "Get Started",
      viewWork: "View Work",
    },
    portfolio: {
      tag: "Selected Work",
      title: "Eliminate cumbersome processes. Build smart systems.",
      desc: "Stop wasting time on cumbersome processes.",
      caseStudy: "Case study",
    },
    services: {
      tag: "What I do",
      title: "Eliminate inefficiencies.",
      titleSub: "Scale operations.",
      aiTitle: "AI Automation",
      aiDesc: "Voice assistants and response systems that handle the volume your team can't — fluently, contextually, and on-brand.",
      crmTitle: "Custom CRM Development",
      crmDesc: "Pipelines built around your real workflow, not a template. From lead capture to revenue, fully owned by you.",
      adminTitle: "Admin Panel Design",
      adminDesc: "Dashboards that make complex operations feel obvious. Built for speed, clarity, and confident decisions.",
    },
    stack: {
      tag: "The Stack",
      title: "Tools chosen for longevity, not hype.",
    },
    contact: {
      tag: "Let's Talk",
      title: "Have a system worth automating?",
      desc: "Tell me about the workflow that drains your team. I respond personally within one business day.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "What are you building?",
      send: "Send message",
      sending: "Sending…",
      success: "Message received. I'll be in touch shortly.",
    },
    footer: {
      tagline: "Voltelsan. Architected with intent.",
      work: "Work",
      services: "Services",
      contact: "Contact",
    },
    caseStudy: {
      backToProjects: "Back to Projects",
      visitLivePlatform: "Visit Live Platform",
      executiveSummary: "Executive Summary",
      techStack: "Tech Stack",
      projectDetails: "Project Details",
      client: "Client",
      timeline: "Timeline",
      systemArchitecture: "System Architecture",
      architectureTitle: "Bespoke Operational Modules",
      coreFeatures: "Core Features",
      featuresTitle: "Engineered Capabilities",
      scaleCtaTitle: "Interested in scaling your systems?",
      backToAll: "Back to All Projects",
      footerCopyright: "Voltelsan. All rights reserved. Absolute brand authority and precision.",
    },
    notFound: {
      title: "404",
      subtitle: "Oops! Page not found",
      returnHome: "Return to Home",
    },
  },
};
