import { productImages } from "../config/assets";

export const products = {
  categories: [
    {
      id: "cimento",
      title: "Çimento",
      description: "Yüksek kaliteli çimento çeşitleri",
      image: productImages.cimento,
      products: [
        {
          id: "portland-cimento",
          name: "Portland Çimento",
          description: "Genel amaçlı portland çimentosu",
          image: productImages.portlandCimento,
          details: {
            type: "CEM I 42.5R",
            weight: "50 kg",
            usage: "Genel amaçlı yapı işleri",
            features: [
              "Yüksek dayanım",
              "Hızlı priz alma",
              "TSE belgeli",
              "Suya dayanıklı",
            ],
          },
        },
        {
          id: "beyaz-cimento",
          name: "Beyaz Çimento",
          description: "Dekoratif uygulamalar için beyaz çimento",
          image: productImages.beyazCimento,
          details: {
            type: "CEM I 52.5R",
            weight: "50 kg",
            usage: "Dekoratif uygulamalar",
            features: [
              "Yüksek beyazlık",
              "Estetik görünüm",
              "Kolay işlenebilirlik",
              "Dayanıklı yapı",
            ],
          },
        },
      ],
    },
    {
      id: "alci",
      title: "Alçı",
      description: "İç mekan sıva ve kaplama alçıları",
      image: productImages.alci,
      products: [
        {
          id: "siva-alci",
          name: "Sıva Alçısı",
          description: "El ile uygulanan genel amaçlı sıva alçısı",
          image: productImages.sivaAlci,
          details: {
            type: "El Alçısı",
            weight: "30 kg",
            usage: "İç mekan duvar ve tavan",
            features: [
              "Kolay uygulama",
              "Yüksek yapışma",
              "Pürüzsüz yüzey",
              "Nefes alan yapı",
            ],
          },
        },
        {
          id: "saten-alci",
          name: "Saten Alçı",
          description: "Son kat perdah alçısı",
          image: productImages.satenAlci,
          details: {
            type: "Saten Perdah",
            weight: "25 kg",
            usage: "Son kat yüzey düzeltme",
            features: [
              "İnce doku",
              "Pürüzsüz yüzey",
              "Boya altı hazırlık",
              "Kolay zımparalama",
            ],
          },
        },
      ],
    },
    {
      id: "boya",
      title: "Boya",
      description: "İç ve dış cephe boyaları",
      image: productImages.boya,
      products: [
        {
          id: "ic-cephe-boya",
          name: "İç Cephe Boyası",
          description: "Silinebilir iç cephe duvar boyası",
          image: productImages.icCepheBoya,
          details: {
            type: "Su Bazlı",
            coverage: "14-16 m²/L",
            usage: "İç mekan duvarlar",
            features: [
              "Silinebilir",
              "Yüksek örtücülük",
              "Nefes alan",
              "Kolay uygulama",
            ],
          },
        },
        {
          id: "dis-cephe-boya",
          name: "Dış Cephe Boyası",
          description: "Silikon katkılı dış cephe boyası",
          image: productImages.disCepheBoya,
          details: {
            type: "Akrilik",
            coverage: "10-12 m²/L",
            usage: "Dış cephe",
            features: ["UV dayanımı", "Su itici", "Nefes alan", "Uzun ömürlü"],
          },
        },
      ],
    },
    {
      id: "kapi",
      title: "Kapı",
      description: "İç mekan ve dış mekan kapı sistemleri",
      image: productImages.kapi,
      products: [
        {
          id: "ahsap-kapi",
          name: "Ahşap Kapı",
          description: "Modern tasarımlı iç mekan panel kapı",
          image: productImages.ahsapKapi,
          details: {
            material: "MDF",
            color: "Meşe",
            dimensions: "80x200 cm",
            features: [
              "Ses yalıtımlı",
              "Nem dayanımlı",
              "Çelik kasa",
              "Kilit sistemi dahil",
            ],
          },
        },
        {
          id: "celik-kapi",
          name: "Çelik Kapı",
          description: "Güvenlikli dış mekan çelik kapı",
          image: productImages.celikKapi,
          details: {
            material: "Çelik",
            security: "7 Kilit Noktalı",
            dimensions: "90x200 cm",
            features: [
              "Çelik konstrüksiyon",
              "Isı yalıtımlı",
              "Anti-hırsızlık sistem",
              "Özel menteşe sistemi",
            ],
          },
        },
      ],
    },
    {
      id: "zemin",
      title: "Zemin Kaplamaları",
      description: "Parke ve zemin kaplama çözümleri",
      image: productImages.zemin,
      products: [
        {
          id: "laminant-parke",
          name: "Laminant Parke",
          description: "AC4 sınıfı dayanıklı laminant parke",
          image: productImages.laminantParke,
          details: {
            class: "AC4",
            thickness: "8mm",
            dimensions: "195x1380mm",
            features: [
              "Aşınma dayanımı",
              "Çizilme direnci",
              "Kolay montaj",
              "Leke tutmaz",
            ],
          },
        },
        {
          id: "ahsap-parke",
          name: "Ahşap Parke",
          description: "Doğal ahşap parke",
          image: productImages.ahsapParke,
          details: {
            material: "Meşe",
            thickness: "14mm",
            dimensions: "150x1200mm",
            features: [
              "Doğal malzeme",
              "Uzun ömürlü",
              "Cila uygulanabilir",
              "Sağlıklı yaşam",
            ],
          },
        },
      ],
    },
    {
      id: "pvc",
      title: "PVC",
      description: "PVC pencere ve kapı sistemleri",
      image: productImages.pvc,
      products: [
        {
          id: "pvc-pencere",
          name: "PVC Pencere",
          description: "Çift camlı ısı yalıtımlı PVC pencere",
          image: productImages.pvcPencere,
          details: {
            profile: "6 Odacıklı",
            glass: "4+16+4 Isıcam",
            color: "Beyaz",
            features: [
              "Isı yalıtımı",
              "Ses yalıtımı",
              "UV korumalı",
              "Çift açılım",
            ],
          },
        },
        {
          id: "surme-sistem",
          name: "Sürme Sistem",
          description: "Geniş açıklıklar için sürme kapı ve pencere sistemi",
          image: productImages.surmeSistem,
          details: {
            system: "Hebeschiebe",
            glass: "4+12+4 Isıcam",
            color: "Antrasit",
            features: [
              "Kolay kullanım",
              "Yüksek yalıtım",
              "Güvenlik kilidi",
              "Sızdırmazlık",
            ],
          },
        },
        {
          id: "cam-balkon",
          name: "Cam Balkon",
          description: "Katlanır cam balkon sistemi",
          image: productImages.camBalkon,
          details: {
            system: "Isıcamlı",
            glass: "4+10+4 Temperli",
            color: "Beyaz",
            features: [
              "Rüzgar dayanımı",
              "Su sızdırmazlık",
              "Kolay temizlik",
              "Güvenli kullanım",
            ],
          },
        },
      ],
    },
  ],
};
