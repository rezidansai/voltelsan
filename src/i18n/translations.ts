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
    webTitle: string;
    webDesc: string;
    mobileTitle: string;
    mobileDesc: string;
    ecomTitle: string;
    ecomDesc: string;
    electricalTitle: string;
    electricalDesc: string;
    satelliteTitle: string;
    satelliteDesc: string;
    upsTitle: string;
    upsDesc: string;
    installationTitle: string;
    installationDesc: string;
    cablingTitle: string;
    cablingDesc: string;
    transformerTitle: string;
    transformerDesc: string;
    groundingTitle: string;
    groundingDesc: string;
    panelsTitle: string;
    panelsDesc: string;
    contactCta: string;
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
      webTitle: "Web Sitesi Geliştirme", webDesc: "Markanıza uygun, hızlı ve kullanıcı dostu web deneyimleri.",
      mobileTitle: "Mobil Uygulama Geliştirme", mobileDesc: "İş süreçlerinizi her yerden erişilebilir kılan iOS ve Android uygulamaları.",
      ecomTitle: "E-Ticaret Çözümleri", ecomDesc: "Ürünlerinizi kolayca yönetebileceğiniz güvenli ve ölçeklenebilir satış altyapıları.",
      electricalTitle: "Elektrik Arıza, Bakım ve Onarım", electricalDesc: "Ev, apartman, iş yeri ve sahalarda hızlı arıza tespiti ve güvenli çözüm.",
      satelliteTitle: "Uydu ve İnternet Sistemleri", satelliteDesc: "Uydu ve internet altyapılarında kurulum, bakım, arıza tespiti ve onarım.",
      upsTitle: "UPS Sistemleri", upsDesc: "Kesintisiz güç kaynaklarında kurulum, bakım, akü kontrolü ve arıza desteği.",
      installationTitle: "Enerji Tesisatı", installationDesc: "Daire, dükkân, site ve iş yerleri için yeni tesisat ve enerji hattı çekimi.",
      cablingTitle: "Kablo ve Saha İşleri", cablingDesc: "Yer altı kablo, havai hat ve saha kablolama uygulamaları.",
      transformerTitle: "Trafo ve OG Sistemleri", transformerDesc: "Trafo ve orta gerilim enerji sistemlerinde bakım, onarım ve arıza desteği.",
      groundingTitle: "Topraklama İşleri", groundingDesc: "Can ve ekipman güvenliği için profesyonel topraklama uygulamaları.",
      panelsTitle: "Elektrik Panoları", panelsDesc: "Pano kurulumu, düzenleme, arıza, periyodik bakım ve onarım hizmetleri.",
      contactCta: "Bu hizmet için yazın",
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
      webTitle: "Website Development", webDesc: "Fast, user friendly web experiences tailored to your brand.",
      mobileTitle: "Mobile App Development", mobileDesc: "iOS and Android apps that keep your business workflows accessible anywhere.",
      ecomTitle: "E-commerce Solutions", ecomDesc: "Secure, scalable sales platforms that make product management simple.",
      electricalTitle: "Electrical Faults, Maintenance & Repair", electricalDesc: "Fast fault detection and safe solutions for homes, apartments, businesses, and sites.",
      satelliteTitle: "Satellite & Internet Systems", satelliteDesc: "Installation, maintenance, fault detection, and repair for satellite and internet infrastructure.",
      upsTitle: "UPS Systems", upsDesc: "Installation, maintenance, battery checks, and fault support for uninterruptible power supplies.",
      installationTitle: "Electrical Installations", installationDesc: "New electrical installations and power line runs for homes, shops, residential sites, and businesses.",
      cablingTitle: "Cabling & Field Works", cablingDesc: "Underground cable, overhead line, and on-site cabling work.",
      transformerTitle: "Transformer & Medium Voltage Systems", transformerDesc: "Maintenance, repair, and fault support for transformer and medium voltage power systems.",
      groundingTitle: "Grounding Works", groundingDesc: "Professional grounding applications to protect people and equipment.",
      panelsTitle: "Electrical Panels", panelsDesc: "Panel installation, organization, fault repair, periodic maintenance, and servicing.",
      contactCta: "Ask about this service",
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
