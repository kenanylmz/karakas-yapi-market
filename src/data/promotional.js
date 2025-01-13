import { promotionalImages } from "../config/assets";

export const promotionalContent = {
  hero: {
    image: promotionalImages.hero,
    title: "Yapı Malzemeleri ve İnşaat Çözümleri",
    description: "Kaliteli Ürünler, Profesyonel Hizmet, Güvenilir Çözümler",
    subDescription:
      "Türkiye'nin en kapsamlı yapı market ve inşaat malzemeleri tedarikçisi",
  },
  stats: [
    { number: "25+", label: "Yıllık Deneyim" },
    { number: "10000+", label: "Tamamlanan Proje" },
    { number: "50000+", label: "Mutlu Müşteri" },
    { number: "1500+", label: "Ürün Çeşidi" },
  ],
  mainFeatures: {
    title: "Profesyonel İnşaat Çözümleri",
    description:
      "Temel yapı malzemelerinden ince işçilik ürünlerine kadar tüm ihtiyaçlarınız için",
    background: promotionalImages.feature1,
    items: [
      {
        title: "Toptan ve Perakende Satış",
        description: "Her ölçekte projeye uygun fiyatlandırma ve stok imkanı",
        icon: "🏢",
      },
      {
        title: "Geniş Ürün Yelpazesi",
        description: "A'dan Z'ye tüm yapı malzemeleri tek çatı altında",
        icon: "🏗️",
      },
      {
        title: "Teknik Destek",
        description: "Uzman kadromuzla projelendirme ve malzeme seçimi desteği",
        icon: "👷",
      },
    ],
  },
  productCategories: {
    title: "Ürün Kategorilerimiz",
    background: promotionalImages.feature2,
    description:
      "İnşaat ve yapı sektörünün tüm ihtiyaçları için geniş ürün yelpazemiz",
    categories: [
      {
        title: "Yapısal Malzemeler",
        items: ["Çimento", "Demir", "Tuğla", "Beton", "Kum", "Çakıl"],
      },
      {
        title: "İzolasyon Malzemeleri",
        items: ["Su Yalıtım", "Isı Yalıtım", "Ses Yalıtım", "Teras İzolasyon"],
      },
      {
        title: "Kaba Yapı",
        items: ["Tuğla", "Bims", "Gazbeton", "Çatı Malzemeleri"],
      },
      {
        title: "İnce Yapı",
        items: ["Seramik", "Vitrifiye", "Armatür", "Boya"],
      },
    ],
  },
  services: {
    title: "Hizmetlerimiz",
    background: promotionalImages.feature3,
    description: "Profesyonel çözümler ve güvenilir hizmet anlayışı",
    items: [
      {
        title: "Şantiye Teslimatı",
        description: "Özel araç filomuzla güvenli ve hızlı teslimat",
        icon: "🚛",
      },
      {
        title: "Proje Danışmanlığı",
        description: "Uzman ekibimizle malzeme seçimi ve teknik destek",
        icon: "📋",
      },
      {
        title: "Özel Üretim",
        description: "Projeye özel ürün ve çözüm geliştirme",
        icon: "⚙️",
      },
    ],
  },
  about: {
    title: "Kurumsal",
    background: promotionalImages.about,
    description: "25 yıllık sektör tecrübemizle yapı marketçiliğin öncüsüyüz",
    features: [
      {
        title: "Modern Tesisler",
        description: "54.000 m² kapalı alan, 200+ araçlık otopark",
      },
      {
        title: "Güçlü Lojistik",
        description: "Türkiye'nin her yerine teslimat imkanı",
      },
      {
        title: "Kalite Standartları",
        description: "ISO 9001, TSE ve CE sertifikalı ürünler",
      },
    ],
    stats: [
      {
        number: "54000",
        label: "m² Alan",
      },
      {
        number: "200+",
        label: "Araçlık Otopark",
      },
      {
        number: "24/7",
        label: "Teknik Destek",
      },
    ],
  },
  specialOffers: {
    title: "Özel Kampanyalar",
    background: promotionalImages.construction,
    description: "Avantajlı fiyatlar ve özel indirimler",
    offers: [
      {
        title: "Toplu Alım İndirimi",
        description: "Büyük projelere özel fiyatlandırma",
      },
      {
        title: "Sezonsal Kampanyalar",
        description: "Dönemsel ürünlerde özel fırsatlar",
      },
      {
        title: "Nakit İndirimi",
        description: "Peşin ödemelerde ek indirim avantajı",
      },
    ],
  },
  quality: {
    title: "Kalite Politikamız",
    items: [
      "TSE ve CE Sertifikalı Ürünler",
      "Kalite Kontrol Laboratuvarı",
      "Profesyonel Depolama Sistemleri",
      "Uzman Personel Kadrosu",
    ],
  },
  contact: {
    title: "İletişim",
    description: "Size en yakın şubemiz için bizi arayın",
    channels: [
      {
        title: "Müşteri Hizmetleri",
        value: "0850 XXX XX XX",
      },
      {
        title: "WhatsApp Hattı",
        value: "0532 XXX XX XX",
      },
      {
        title: "E-posta",
        value: "info@yapimarket.com",
      },
    ],
  },
};
