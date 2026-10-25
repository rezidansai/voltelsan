import projectMap from "@/assets/project-map.png";
import projectWatch from "@/assets/project-watch.png";
import projectAviation from "@/assets/project-aviation-seres.png";
import projectCargo from "@/assets/project-cargo.png";
import projectBrokerage from "@/assets/project-brokerage.png";
import projectAiAssistant from "@/assets/project-ai-assistant.png";
import yss1Video from "@/assets/yss1.mp4";

export interface Project {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  longDesc: string;
  video?: string;
  img?: string;
  objectPosition?: string;
  client: string;
  year: string;
  techStack: string[];
  metrics: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  architecture: { title: string; desc: string; span?: string }[];
  architectureDesc?: string;
  featuresTitle?: string;
  featuresDesc?: string;
  tr?: {
    tag?: string;
    title?: string;
    desc?: string;
    longDesc?: string;
    client?: string;
    metrics?: { value: string; label: string }[];
    features?: { title: string; desc: string }[];
    architecture?: { title: string; desc: string; span?: string }[];
    architectureDesc?: string;
    featuresTitle?: string;
    featuresDesc?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "fleet-toll-portal",
    tag: "INFRASTRUCTURE & LOGISTICS",
    title: "Fleet Toll & Violation Portal",
    desc: "3. Yavuz Sultan Selim Bridge, Highway Toll Management Portal System for Fleet Customers to Monitor Violations.",
    longDesc: "A high-performance enterprise management portal custom-built for large-scale fleet operators crossing the Yavuz Sultan Selim Bridge. The platform simplifies heavy-duty logistics compliance, toll billing, and violation resolution in near real-time.",
    video: yss1Video,
    client: "ICA - Yavuz Sultan Selim Bridge Operator",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "Kafka"],
    metrics: [
      { value: "0.2s", label: "Toll Processing Latency" },
      { value: "99.98%", label: "Real-Time Matching Accuracy" },
      { value: "50k+", label: "Daily Active Transits Monitor" }
    ],
    features: [
      { title: "Real-Time Transit Tracking", desc: "Instantly stream bridge cross-overs with high-fidelity telemetry and photo proof integration." },
      { title: "Automated Violation Alerts", desc: "Notify fleet operations within minutes of an unpaid toll or violation to prevent massive regulatory fines." },
      { title: "Consolidated Billing Engine", desc: "Process thousands of micro-transactions monthly into unified corporate ledger exports." }
    ],
    architectureDesc: "An excellent system designed to allow corporate employees working in the local pool to have detailed control.",
    architecture: [
      { title: "Transit Stream Processor", desc: "A portal system that monitors violations in the local pool.", span: "md:col-span-2" },
      { title: "OCR & Camera Sync", desc: "Synchronizes gate snapshot metadata with registered fleet license plates instantly." },
      { title: "Ledger Reconciliation", desc: "Runs scheduled ledger checks to automatically reconcile unpaid transits against pre-funded client balances." },
      { title: "Enterprise Admin Hub", desc: "A sleek, responsive dashboard designed for high-density administrative workflows and bulk report generation.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "ALTYAPI & LOJİSTİK",
      title: "Filo Geçiş Ücreti & İhlal Portalı",
      desc: "3. Yavuz Sultan Selim Köprüsü, Filo Müşterilerinin İhlalleri İzlemesi İçin Otoyol Geçiş Yönetim Portalı Sistemi.",
      longDesc: "Yavuz Sultan Selim Köprüsü'nü kullanan büyük ölçekli filo operatörleri için özel olarak tasarlanmış yüksek performanslı kurumsal yönetim portalı. Ağır vasıta lojistik uyumluluğunu, geçiş ücretlendirmesini ve ihlal çözümlemelerini gerçek zamanlıya yakın kolaylaştırır.",
      client: "İCA - Yavuz Sultan Selim Köprüsü İşletmesi",
      metrics: [
        { value: "0.2s", label: "Geçiş İşleme Gecikmesi" },
        { value: "%99.98", label: "Gerçek Zamanlı Eşleşme Doğruluğu" },
        { value: "50k+", label: "Günlük İzlenen Aktif Geçiş" }
      ],
      features: [
        { title: "Gerçek Zamanlı Geçiş Takibi", desc: "Yüksek hassasiyetli telemetri ve fotoğraf kanıtı entegrasyonuyla köprü geçişlerini anında izleyin." },
        { title: "Otomatik İhlal Uyarıları", desc: "Büyük cezaları önlemek için ödenmemiş geçiş veya ihlal durumunda filo operasyonlarını dakikalar içinde bilgilendirin." },
        { title: "Konsolide Faturalama Motoru", desc: "Her ay binlerce mikro işlemi birleştirilmiş kurumsal muhasebe raporlarına dönüştürün." }
      ],
      architectureDesc: "Yerel havuzda çalışan kurumsal personelin detaylı kontrol sağlaması için tasarlanmış kusursuz sistem.",
      architecture: [
        { title: "Geçiş Akışı İşlemcisi", desc: "Yerel havuzdaki ihlalleri anlık izleyen portal mimarisi.", span: "md:col-span-2" },
        { title: "OCR & Kamera Senkronizasyonu", desc: "Gişe kamera fotoğraflarını kayıtlı filo plakalarıyla anında eşleştirir." },
        { title: "Bakiye & Mahsup Uzlaştırma", desc: "Ödenmemiş geçişleri müşteri ön ödeme bakiyeleriyle otomatik olarak denkleştiren zamanlanmış mutabakat sistemi." },
        { title: "Kurumsal Yönetim Merkezi", desc: "Yüksek yoğunluklu idari iş akışları ve toplu raporlama için tasarlanmış modern gösterge paneli.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "yss-mapping-engine",
    tag: "HIGHWAY INFRASTRUCTURE",
    title: "YSS Toll & Transit Mapping Engine",
    desc: "An interactive transit architecture visualizing toll networks and route integrations, providing absolute clarity over complex highway systems.",
    longDesc: "An advanced geospatial mapping engine designed to visualize multi-layer tolling networks and transit flows across the Yavuz Sultan Selim highway network. It delivers sub-second map renderings of vehicle movement, toll zones, and logistics patterns.",
    img: projectMap,
    objectPosition: "object-center",
    client: "Ministry of Infrastructure & ICA",
    year: "2025",
    techStack: ["React", "Mapbox GL JS", "Deck.gl", "PostGIS", "Node.js", "Redis"],
    metrics: [
      { value: "60 FPS", label: "Interactive Map Render Rate" },
      { value: "100%", label: "Geospatial Boundary Accuracy" },
      { value: "10M+", label: "GIS Data Points Processed" }
    ],
    features: [
      { title: "Interactive Map Visualizer", desc: "A portfolio system that clears up confusion within the local browser by showing the location of toll booths, and works perfectly for corporate employees." },
      { title: "Dynamic Flow Analysis", desc: "Model the logic for determining the most optimal route based on vehicle classifications and multi-level pricing ranges." },
      { title: "Toll Zone Virtualization", desc: "Edit and deploy virtual geofences along key logistics sectors to simulate and test future toll rate changes." }
    ],
    architectureDesc: "An excellent system designed to allow corporate employees working in the local pool to have detailed control.",
    featuresTitle: "Designed for Easily Manageable Processes",
    architecture: [
      { title: "Mapbox Custom Overlay Layer", desc: "An integrated control system that displays barrier and free passage points on a map, facilitates transportation by creating routes between selected toll booths, and provides real-time weather information at the passage points.", span: "md:col-span-2" },
      { title: "Spatial Query Optimizers", desc: "A system that shows detailed routes and toll booths for travel between the European and Asian sides of Istanbul, based on selected starting and arriving locations." },
      { title: "Live Fleet Simulation Engine", desc: "A premium calculation system that instantly displays toll fees based on the toll booth." },
      { title: "Location-Based Transitions and Toll Booths", desc: "An innovative system that displays the number of lanes for both directions at barrier-controlled toll booths on a single screen; and provides quick access to the desired location in seconds thanks to its integrated search feature.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "OTOYOL ALTYAPISI",
      title: "YSS Geçiş & Güzergah Haritalama Motoru",
      desc: "Ücret ağlarını ve rota entegrasyonlarını görselleştiren, karmaşık otoyol sistemlerinde mutlak netlik sağlayan interaktif geçiş mimarisi.",
      longDesc: "Yavuz Sultan Selim otoyol ağı üzerindeki çok katmanlı ücretlendirme ağlarını ve geçiş akışlarını görselleştirmek için geliştirilmiş ileri düzey coğrafi bilgi motoru. Araç hareketleri, gişeler ve lojistik paternleri üzerinde anlık harita görselleştirmesi sunar.",
      client: "Altyapı Bakanlığı & İCA",
      metrics: [
        { value: "60 FPS", label: "İnteraktif Harita Yenileme Hızı" },
        { value: "%100", label: "Coğrafi Sınır Hassasiyeti" },
        { value: "10M+", label: "İşlenen CBS Veri Noktası" }
      ],
      features: [
        { title: "İnteraktif Harita Görselleştirici", desc: "Gişelerin konumunu net bir şekilde göstererek karmaşıklığı ortadan kaldıran ve kurumsal personel için optimize edilmiş portal sistemi." },
        { title: "Dinamik Akış Analizi", desc: "Araç sınıflandırmaları ve kademeli fiyat aralıklarına göre en uygun rotayı belirleyen mantıksal modelleme." },
        { title: "Sanal Geçiş Bölgesi Simülasyonu", desc: "Gelecekteki ücretlendirme değişikliklerini test etmek amacıyla kilit lojistik sektörlerinde sanal geofence kurma." }
      ],
      architectureDesc: "Kurumsal personelin operasyonları yerel havuzdan kusursuzca yönetebilmesi için tasarlandı.",
      featuresTitle: "Kolay Yönetilebilir Süreçler İçin İnşa Edildi",
      architecture: [
        { title: "Özel Mapbox Katman Modeli", desc: "Bariyerli ve serbest geçiş noktalarını haritada gösteren, seçilen gişeler arasında rota oluşturan ve hava durumunu anlık aktaran entegre kontrol sistemi.", span: "md:col-span-2" },
        { title: "Mekânsal Sorgu Optimizasyonu", desc: "Avrupa ve Asya yakası arasındaki seyahatler için seçilen başlangıç ve varış noktalarına göre detaylı gişe ve güzergah analizi." },
        { title: "Canlı Filo Simülasyonu", desc: "Gişe bazında geçiş ücretlerini anında hesaplayan ve gösteren akıllı hesaplama motoru." },
        { title: "Konum Tabanlı Gişe & Şerit Yönetimi", desc: "Bariyerli gişelerdeki şerit sayılarını tek ekranda sunan ve entegre arama özelliğiyle istenilen noktaya saniyeler içinde erişim sağlayan yenilikçi sistem.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "luxury-watch-brand",
    tag: "SWISS HAUTE HORLOGERIE",
    title: "Exclusive Brand Infrastructure",
    desc: "Translating the art of traditional watchmaking into a flawless digital experience. A bespoke showcase built for absolute brand authority and elegance.",
    longDesc: "A digital interpretation of understated luxury aesthetics, specifically designed for its high-priced watches. Combining interactive, rich typography with responsive design, it creates an exclusive showcase reflecting absolute prestige and artistic mastery.",
    img: projectWatch,
    objectPosition: "object-center",
    client: "Swiss Haute Horlogerie Maison",
    year: "2026",
    techStack: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion", "Vite"],
    metrics: [
      { value: "100%", label: "Bespoke Pixel Precision" },
      { value: "0.8s", label: "Interactive Loaded States" },
      { value: "4.8x", label: "Client Session Retention Increase" }
    ],
    features: [
      { title: "Haute Horlogerie Gallery", desc: "A stunning digital space designed to showcase the intricate gears, hand-finished cases, and rare dials of ultra-premium watches." },
      { title: "Interactive Craft Walkthrough", desc: "Interactive storyboards displaying step-by-step master artisan assembly techniques." },
      { title: "Prestige VIP Reservation Portal", desc: "A private, token-gated reservation flow built for high-net-worth watch collectors and VIP clientele." }
    ],
    architecture: [
      { title: "3D Component Showcase", desc: "Three.js custom canvas for rendering high-poly CAD models of Swiss mechanical movements in real time.", span: "md:col-span-2" },
      { title: "Micro-Interaction Engine", desc: "Sophisticated event listener orchestrates precise, tactile hover sound effects and physics-based cursor feedback." },
      { title: "Ultra-Light Asset Loading", desc: "Custom pipeline optimizing massive RAW photography assets into responsive WebP slices instantly on-demand." },
      { title: "Secure VIP Gateway", desc: "A sleek, private CRM endpoint using encrypted single-use invitations to protect buyer anonymity and order values.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "İSVİÇRE YÜKSEK SAATÇİLİĞİ",
      title: "Ayrıcalıklı Marka Altyapısı",
      desc: "Geleneksel saatçilik sanatını kusursuz bir dijital deneyime dönüştürme. Mutlak marka otoritesi ve zarafet için inşa edilmiş özel bir vitrin.",
      longDesc: "Üst segment saatler için özel olarak tasarlanmış, sade lüks estetiğinin dijital bir yorumu. İnteraktif, zengin tipografiyi duyarlı tasarımla birleştirerek prestij ve sanatsal ustalığı yansıtan ayrıcalıklı bir vitrin oluşturur.",
      client: "İsviçre Haute Horlogerie Markası",
      metrics: [
        { value: "%100", label: "Özel Piksel Hassasiyeti" },
        { value: "0.8s", label: "Etkileşimli Yükleme Süresi" },
        { value: "4.8x", label: "Müşteri Oturum Süresi Artışı" }
      ],
      features: [
        { title: "Haute Horlogerie Galerisi", desc: "Ultra lüks saatlerin karmaşık mekanizmalarını, el işçiliği kasalarını ve nadir kadranlarını sergilemek için tasarlanmış büyüleyici dijital alan." },
        { title: "İnteraktif Ustalık Deneyimi", desc: "Usta zanaatkarların montaj tekniklerini adım adım sunan etkileşimli hikaye anlatımı." },
        { title: "Prestij VIP Rezervasyon Portalı", desc: "Özel koleksiyonerler ve VIP müşteriler için geliştirilmiş şifreli rezervasyon akışı." }
      ],
      architecture: [
        { title: "3D Bileşen Vitrini", desc: "İsviçre mekanik hareketlerinin yüksek poligonlu CAD modellerini gerçek zamanlı işleyen Three.js özel tuvali.", span: "md:col-span-2" },
        { title: "Mikro Etkileşim Motoru", desc: "Hassas, dokunsal hover efektleri ve fizik tabanlı imleç geri bildirimi sağlayan gelişmiş etkileşim katmanı." },
        { title: "Ultra Hafif Medya Yükleme", desc: "Yüksek çözünürlüklü RAW stüdyo fotoğraflarını talep anında optimize eden duyarlı WebP işleme hattı." },
        { title: "Güvenli VIP Geçidi", desc: "Alıcı gizliliğini korumak için şifreli tek kullanımlık davetiyeler kullanan özel CRM uç noktası.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "private-charter-architecture",
    tag: "GLOBAL AVIATION",
    title: "Autonomous Private Charter Architecture",
    desc: "A centralized ecosystem for executive aviation and private charters. Managing complex routing, high-ticket requests, and operational compliance with absolute precision.",
    longDesc: "An all-in-one centralized digital ecosystem engineered specifically for global private jet charters and luxury corporate aviation. The platform automates flight logistics, custom high-ticket requests, and real-time regulatory compliance.",
    img: projectAviation,
    objectPosition: "object-top",
    client: "Seres Aviation & Private Fleet",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Python", "Docker"],
    metrics: [
      { value: "99.99%", label: "Charter Routing Accuracy" },
      { value: "-35%", label: "Operational Coordination Delay" },
      { value: "$120M+", label: "High-Ticket Charter Value Managed" }
    ],
    features: [
      { title: "Autonomous Dispatcher System", desc: "Intelligent flight routing system automatically checks and plots optimum vectors based on aircraft specs." },
      { title: "Dynamic Catering & VIP Logistics", desc: "Synchronize local ground transportation, concierge services, and catering preferences with instant pilot-alerting." },
      { title: "Instant Manifest Generation", desc: "Generate custom, border-compliant international manifests with automated passport validation in seconds." }
    ],
    architecture: [
      { title: "Automated Flight Route Optimizer", desc: "Uses advanced pathfinding algorithms to compute custom private jet flight plans considering weather, weight, and performance metrics.", span: "md:col-span-2" },
      { title: "Border Control Validator", desc: "Real-time API integrations with international aviation registers and security systems to instantly confirm compliance." },
      { title: "Encrypted VIP Ledger", desc: "Private transactional system logging high-ticket charter bookings with custom privacy guarantees and client isolation." },
      { title: "Cockpit Sync Engine", desc: "Real-time updates directly piped to the crew's flight management tablets via secure low-bandwidth channels.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "KÜRESEL HAVACILIK",
      title: "Otonom Özel Jet Kiralama Mimarisi",
      desc: "Yönetici havacılığı ve özel jet kiralama için merkezi bir ekosistem. Karmaşık rotalama, VIP talepleri ve operasyonel uyumluluğu mutlak hassasiyetle yönetir.",
      longDesc: "Küresel özel jet kiralama ve lüks kurumsal havacılık operasyonları için özel olarak tasarlanmış hepsi bir arada merkezi dijital ekosistem. Uçuş lojistiğini, özel VIP taleplerini ve gerçek zamanlı yasal uyumluluğu otomatikleştirir.",
      client: "Seres Havacılık & Özel Jet Filosu",
      metrics: [
        { value: "%99.99", label: "Uçuş Rotalama Doğruluğu" },
        { value: "-%35", label: "Operasyonel Koordinasyon Gecikmesi" },
        { value: "$120M+", label: "Yönetilen VIP Kiralama Değeri" }
      ],
      features: [
        { title: "Otonom Dispeç Sistemi", desc: "Uçak teknik özelliklerine göre optimum vektörleri otomatik hesaplayan akıllı uçuş rotalama sistemi." },
        { title: "Dinamik VIP İkram & Kara Lojistiği", desc: "Yerel kara transferleri, konsiyerj hizmetleri ve ikram tercihlerini anlık pilot bildirimleriyle senkronize edin." },
        { title: "Anında Manifesto Üretimi", desc: "Pasaport doğrulamasıyla uluslararası sınır kontrolüne tam uyumlu manifestoları saniyeler içinde oluşturun." }
      ],
      architecture: [
        { title: "Otomatik Uçuş Rotası Optimize Edici", desc: "Hava durumu, ağırlık ve performans parametrelerini hesaba katan gelişmiş algoritmalarla özel jet uçuş planlarını hesaplar.", span: "md:col-span-2" },
        { title: "Sınır Kontrol Doğrulayıcısı", desc: "Mevzuata uygunluğu anında teyit etmek için uluslararası havacılık kayıt sistemleriyle gerçek zamanlı API entegrasyonu." },
        { title: "Şifreli VIP İşlem Defteri", desc: "Yüksek değerli kiralama rezervasyonlarını müşteri gizliliği garantisiyle kaydeden özel işlem altyapısı." },
        { title: "Kokpit Senkronizasyon Motoru", desc: "Uçuş mürettebatının tabletlerine düşük bant genişliğinde güvenli kanallarla doğrudan canlı veri akışı sağlar.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "global-cargo-acmi",
    tag: "CARGO & CHARTER",
    title: "Global Cargo & ACMI Operations",
    desc: "A dedicated logistics platform for international cargo chartering, wet lease (ACMI) services, and seasonal demand optimization, operating with absolute regulatory compliance.",
    longDesc: "A dedicated logistics and aircraft management platform built to scale global cargo chartering and ACMI (Aircraft, Crew, Maintenance, and Insurance) wet lease operations, ensuring continuous fleet optimization and absolute safety compliance.",
    img: projectCargo,
    objectPosition: "object-top",
    client: "SMEA (San Marino Executive Aviation)",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Go", "Elasticsearch", "Kubernetes"],
    metrics: [
      { value: "0.15s", label: "Fleet Availability Lookups" },
      { value: "48% ", label: "ACMI Lease Lifecycle Speedup" },
      { value: "99.95%", label: "Payload Utilization Rate" }
    ],
    features: [
      { title: "ACMI Lease Lifecycle Orchestrator", desc: "Manage aircraft, aircrew, insurance, and heavy maintenance scheduling under a single, unified contract timeline." },
      { title: "Heavy Cargo Payload Calculator", desc: "Optimize cargo density and weight placement in real-time, automatically cross-checking balance margins." },
      { title: "Multi-Hub Ground Dispatch", desc: "Track cargo progress through diverse global airports, handling international clearance paperwork dynamically." }
    ],
    architecture: [
      { title: "Payload Center-of-Gravity Solver", desc: "Physics-based model calculates safe aircraft balance parameters and suggests optimum spatial loading maps.", span: "md:col-span-2" },
      { title: "Active Aircrew Schedule Engine", desc: "Algorithmic compliance checks validating required rest cycles and training standards before assignation." },
      { title: "Airport Logistics Pipeline", desc: "Real-time Elasticsearch indexing tracking complex shipping manifest statuses and custom clearance details." },
      { title: "Global Wet Lease Portal", desc: "Sleek procurement portal for corporate airlines to instantly request and secure dry or wet leases for cargo fleets.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "KARGO & KİRALAMA",
      title: "Küresel Kargo & ACMI Operasyonları",
      desc: "Uluslararası kargo kiralama, wet lease (ACMI) hizmetleri ve mevsimsel talep optimizasyonu için yasal standartlara tam uyumlu özel lojistik platformu.",
      longDesc: "Küresel kargo kiralama ve ACMI (Uçak, Mürettebat, Bakım ve Sigorta) operasyonlarını ölçeklendirmek, filo verimliliğini ve mutlak güvenlik standartlarını sağlamak için geliştirilmiş özel filo yönetim platformu.",
      client: "SMEA (San Marino Executive Havacılık)",
      metrics: [
        { value: "0.15s", label: "Filo Müsaitlik Sorgulama Hızı" },
        { value: "%48", label: "ACMI Kiralama Süreç Hızlanması" },
        { value: "%99.95", label: "Yük Kapasitesi Kullanım Oranı" }
      ],
      features: [
        { title: "ACMI Sözleşme Orkestratörü", desc: "Uçak, mürettebat, sigorta ve ağır bakım takvimini tek bir birleşik sözleşme zaman çizelgesinde yönetin." },
        { title: "Ağır Kargo Yük Dağılım Hesaplayıcı", desc: "Kargo yoğunluğunu ve yerleşimini anlık olarak optimize ederek ağırlık-denge limitlerini otomatik denetleyin." },
        { title: "Çok Merkezli Yer Operasyonları", desc: "Kargo ilerleyişini küresel havalimanları üzerinden izleyin ve uluslararası gümrük belgelerini dinamik yönetin." }
      ],
      architecture: [
        { title: "Ağırlık Merkezi Çözücüsü", desc: "Fizik tabanlı model, güvenli uçak dengesi parametrelerini hesaplar ve optimum yükleme planı sunar.", span: "md:col-span-2" },
        { title: "Mürettebat Görev Takvimi Motoru", desc: "Atama öncesinde dinlenme sürelerini ve eğitim standartlarını doğrulayan algoritmik uyumluluk denetimleri." },
        { title: "Havalimanı Lojistik Akışı", desc: "Karmaşık sevkiyat manifestolarını ve gümrük geçiş durumlarını izleyen gerçek zamanlı Elasticsearch dizini." },
        { title: "Küresel Wet Lease Portalı", desc: "Kurumsal havayollarının kargo filoları için dry veya wet lease taleplerini anında iletmesini sağlayan tedarik portalı.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "aircraft-engine-expert",
    tag: "AIRCRAFT TRADING",
    title: "Aircraft & Engine Expert",
    desc: "A premium brokerage and consultancy platform specializing in worldwide aircraft acquisition, turbine engine transactions, and global spare parts trading.",
    longDesc: "A sophisticated brokerage and consultation system designed specifically for private jet acquisitions, complex engine transactions, and global spare parts logistics, delivering supreme confidence to corporate buyers and sellers.",
    img: projectBrokerage,
    objectPosition: "object-top",
    client: "Aviation Consulting Group",
    year: "2026",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Rust", "PostgreSQL", "AWS S3"],
    metrics: [
      { value: "0.08s", label: "Turbine Spec Comparisons" },
      { value: "$450M+", label: "Active Asset Value Managed" },
      { value: "100%", label: "Transaction Confidentiality Rate" }
    ],
    features: [
      { title: "Engine Lifecycle Analytics", desc: "Inspect and trace compressor, turbine, and auxiliary part hours from factory release down to the latest shop visit." },
      { title: "Global Procurement Catalog", desc: "Ultra-fast searching and comparison index for locating certified turbine spare parts across international depots." },
      { title: "Private Acquisition Chamber", desc: "High-security transaction room for multi-million dollar business jet deals, with built-in digital escrow compliance." }
    ],
    architecture: [
      { title: "Component Part Trace Engine", desc: "Rust-powered back-end engine rapidly processes historic maintenance logs to construct verified asset timelines.", span: "md:col-span-2" },
      { title: "Turbine Telemetry Indexer", desc: "Aggregates life-limited parts cycles to forecast next mandatory engine overhauls automatically." },
      { title: "Encrypted Escrow Room", desc: "Secure digital negotiation space utilizing military-grade encryption to safeguard corporate documents and transaction details." },
      { title: "Parts Depot Sync Protocol", desc: "API integrations connecting international warehouse inventories for immediate, real-time parts availability checking.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "UÇAK & MOTOR TİCARETİ",
      title: "Uçak & Türbin Motor Uzmanı",
      desc: "Dünya çapında uçak alımı, türbin motoru işlemleri ve küresel yedek parça ticareti üzerine uzmanlaşmış birinci sınıf aracılık ve danışmanlık platformu.",
      longDesc: "Özel jet alımları, karmaşık motor işlemleri ve küresel yedek parça lojistiği için özel olarak geliştirilmiş, kurumsal alıcı ve satıcılara mutlak güven sunan danışmanlık ve aracılık sistemi.",
      client: "Uluslararası Havacılık Danışmanlık Grubu",
      metrics: [
        { value: "0.08s", label: "Türbin Karşılaştırma Hızı" },
        { value: "$450M+", label: "Yönetilen Aktif Varlık Değeri" },
        { value: "%100", label: "İşlem Gizlilik Güvencesi" }
      ],
      features: [
        { title: "Motor Yaşam Döngüsü Analitiği", desc: "Kompresör, türbin ve yardımcı parça saatlerini fabrika çıkışından son bakıma kadar detaylıca inceleyin." },
        { title: "Küresel Tedarik Kataloğu", desc: "Uluslararası depolardaki sertifikalı türbin parçalarını anında bulmak için ultra hızlı arama dizini." },
        { title: "Özel Alım-Satım Odası", desc: "Milyonlarca dolarlık iş jeti anlaşmaları için dahili dijital emanet uyumluluğuna sahip yüksek güvenlikli işlem alanı." }
      ],
      architecture: [
        { title: "Parça Geçmişi Takip Motoru", desc: "Geçmiş bakım kayıtlarını hızla işleyerek doğrulanmış varlık zaman çizelgeleri oluşturan Rust destekli arka uç.", span: "md:col-span-2" },
        { title: "Türbin Telemetri İndeksleyici", desc: "Sınırlı ömürlü parça döngülerini birleştirerek bir sonraki zorunlu motor revizyonunu otomatik tahmin eder." },
        { title: "Şifreli Emanet Odası", desc: "Kurumsal belgeleri ve işlem detaylarını korumak için askeri düzeyde şifreleme kullanan güvenli dijital müzakere alanı." },
        { title: "Yedek Parça Depo Senkronizasyonu", desc: "Gerçek zamanlı parça mevcudiyetini kontrol etmek için uluslararası depo envanterlerini bağlayan API entegrasyonu.", span: "md:col-span-2" }
      ]
    }
  },
  {
    slug: "kraftox-ai-assistant",
    tag: "AI AUTOMATION",
    title: "Kraftox AI Voice Assistant",
    desc: "A next-generation real-time conversational AI system designed to handle high volumes of customer interactions fluently, contextually, and entirely on-brand.",
    longDesc: "An advanced real-time conversational AI voice platform capable of managing tens of thousands of simultaneous voice calls and customer support sessions, designed to respond contextually, fluently, and securely.",
    img: projectAiAssistant,
    objectPosition: "object-center",
    client: "Kraftox AI Team",
    year: "2026",
    techStack: ["React", "TypeScript", "Tailwind CSS", "WebRTC", "FastAPI", "OpenAI API"],
    metrics: [
      { value: "0.22s", label: "Conversation Latency" },
      { value: "97.5%", label: "First-Call Resolution Rate" },
      { value: "10k+", label: "Simultaneous AI Calls Handled" }
    ],
    features: [
      { title: "Ultra-Low Latency Voice Core", desc: "Streams audio over WebRTC to ensure conversations feel natural, responsive, and uninterrupted." },
      { title: "Context-Aware Agent Matrix", desc: "Automatically loads correct brand guidelines, product databases, and customer records dynamically." },
      { title: "Live Sentiment Supervisor", desc: "Real-time tone analyzer to identify customer distress and seamlessly route to live support when necessary." }
    ],
    architecture: [
      { title: "WebRTC Audio Pipeline", desc: "Pipes bi-directional high-fidelity audio streams with ultra-low latency directly to speech recognition model clusters.", span: "md:col-span-2" },
      { title: "Dynamic Prompt Orchestrator", desc: "Injects live system variables and historic conversation context into the LLM logic in under 5 milliseconds." },
      { title: "Vector Embeddings Index", desc: "Retrieves technical product details and corporate guidelines using supercharged semantic database queries." },
      { title: "Enterprise Control Panel", desc: "Sleek, real-time dashboard displaying current call metrics, sentiment waves, and automated call transcriptions.", span: "md:col-span-2" }
    ],
    tr: {
      tag: "YAPAY ZEKA OTOMASYONU",
      title: "Kraftox Yapay Zeka Sesli Asistanı",
      desc: "Müşteri etkileşimlerini akıcı, bağlamsal ve tamamen marka kimliğine uygun olarak yüksek hacimde yönetmek için tasarlanmış yeni nesil gerçek zamanlı konuşma yapay zekası.",
      longDesc: "On binlerce eşzamanlı sesli aramayı ve müşteri destek oturumunu bağlamsal, akıcı ve güvenli bir şekilde yönetebilen gelişmiş gerçek zamanlı konuşma yapay zekası ses platformu.",
      client: "Kraftox AI Ekibi",
      metrics: [
        { value: "0.22s", label: "Konuşma Gecikmesi" },
        { value: "%97.5", label: "İlk Aramada Çözüm Oranı" },
        { value: "10k+", label: "Eşzamanlı Yapay Zeka Görüşmesi" }
      ],
      features: [
        { title: "Ultra Düşük Gecikmeli Ses Çekirdeği", desc: "Görüşmelerin doğal, duyarlı ve kesintisiz hissettirmesi için WebRTC üzerinden ses akışı sağlar." },
        { title: "Bağlam Farkındalığına Sahip Ajan Matrisi", desc: "Doğru marka kurallarını, ürün veritabanlarını ve müşteri kayıtlarını dinamik olarak otomatik yükler." },
        { title: "Canlı Duygu Analizi Yöneticisi", desc: "Müşteri memnuniyetsizliğini tespit eden ve gerektiğinde çağrıyı canlı desteğe kusursuz aktaran gerçek zamanlı ton analizi." }
      ],
      architecture: [
        { title: "WebRTC Ses İletim Hattı", desc: "Ultra düşük gecikmeyle çift yönlü yüksek kaliteli ses akışlarını doğrudan konuşma tanıma model kümelerine iletir.", span: "md:col-span-2" },
        { title: "Dinamik Prompt Orkestratörü", desc: "Canlı sistem değişkenlerini ve geçmiş konuşma bağlamını 5 milisaniyenin altında LLM mantığına aktarır." },
        { title: "Vektör Gömme (Embedding) Dizini", desc: "Gelişmiş semantik veritabanı sorgularıyla teknik ürün detaylarını ve kurumsal kuralları anında çeker." },
        { title: "Kurumsal Kontrol Paneli", desc: "Anlık çağrı metriklerini, duygu dalgalarını ve otomatik çağrı dökümlerini gösteren modern gösterge paneli.", span: "md:col-span-2" }
      ]
    }
  }
];

export const getLocalizedProject = (project: Project, lang: 'tr' | 'en'): Project => {
  if (lang === 'tr' && project.tr) {
    return {
      ...project,
      tag: project.tr.tag || project.tag,
      title: project.tr.title || project.title,
      desc: project.tr.desc || project.desc,
      longDesc: project.tr.longDesc || project.longDesc,
      client: project.tr.client || project.client,
      metrics: project.tr.metrics || project.metrics,
      features: project.tr.features || project.features,
      architecture: project.tr.architecture || project.architecture,
      architectureDesc: project.tr.architectureDesc || project.architectureDesc,
      featuresTitle: project.tr.featuresTitle || project.featuresTitle,
      featuresDesc: project.tr.featuresDesc || project.featuresDesc,
    };
  }
  return project;
};

export const getLocalizedProjects = (lang: 'tr' | 'en'): Project[] => {
  return projects.map((p) => getLocalizedProject(p, lang));
};
