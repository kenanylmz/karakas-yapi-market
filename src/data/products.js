import { productImages } from "../config/assets";

export const sections = {
  satis: {
    title: "Satış",
    description: "Geniş ürün yelpazemiz ile yapı malzemeleri satışı yapıyoruz",
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
        description: "Kaliteli alçı çeşitleri",
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
        id: "kapi",
        title: "Kapı",
        description: "Modern ve dayanıklı kapı çeşitleri",
        image: productImages.kapi,
        products: [
          {
            id: "ahsap-kapi",
            name: "Ahşap Kapı",
            description: "Doğal ahşap iç mekan kapısı",
            image: productImages.ahsapKapi,
            details: {
              material: "Masif Ahşap",
              dimensions: "90x200 cm",
              type: "Amerikan Panel",
              features: [
                "Doğal ahşap",
                "Ses yalıtımı",
                "Nem dayanımı",
                "Kolay montaj",
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
              dimensions: "100x210 cm",
              security: "Çok Kilitli Sistem",
              features: [
                "Yüksek güvenlik",
                "Isı yalıtımı",
                "Ses yalıtımı",
                "Uzun ömürlü",
              ],
            },
          },
        ],
      },
      {
        id: "boya",
        title: "Boya",
        description: "İç ve dış cephe boya çeşitleri",
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
              drying: "2-4 saat",
              features: [
                "Silinebilir",
                "Yüksek örtücülük",
                "Kokusuz",
                "Antibakteriyel",
              ],
            },
          },
          {
            id: "dis-cephe-boya",
            name: "Dış Cephe Boyası",
            description: "Dayanıklı dış cephe boyası",
            image: productImages.disCepheBoya,
            details: {
              type: "Akrilik",
              coverage: "10-12 m²/L",
              drying: "4-6 saat",
              features: ["UV dayanımı", "Su geçirmez", "Uzun ömürlü", "Solmaz"],
            },
          },
        ],
      },
      {
        id: "zemin",
        title: "Zemin Kaplamaları",
        description: "Parke ve zemin kaplama çeşitleri",
        image: productImages.zemin,
        products: [
          {
            id: "laminant-parke",
            name: "Laminant Parke",
            description: "AC4 sınıfı laminant parke",
            image: productImages.laminantParke,
            details: {
              class: "AC4",
              thickness: "8mm",
              dimensions: "195x1380mm",
              features: [
                "Çizilme dayanımı",
                "Kolay montaj",
                "Su dayanımı",
                "Uzun ömürlü",
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
        ],
      },
    ],
  },
  alis: {
    title: "Alış",
    description: "Toptan yapı malzemeleri alımı yapıyoruz",
    categories: [
      {
        id: "alis-alci",
        title: "Alçı Alımı",
        description: "Toptan alçı alımı yapılır",
        image: productImages.alci,
        details: {
          title: "Alçı Alım Koşulları",
          description:
            "Sıva alçısı, saten alçı ve kartonpiyer alçısı alımı yapılmaktadır",
          requirements: [
            "Minimum 1000 torba",
            "TSE belgeli ürünler",
            "Fabrika çıkışlı",
            "Toptan fiyat avantajı",
          ],
          brands: ["Alçılar AŞ", "SIVA", "Satencilik", "Alçısan"],
        },
      },
      {
        id: "alis-cimento",
        title: "Çimento Alımı",
        description: "Toptan çimento alımı yapılır",
        image: productImages.cimento,
        details: {
          title: "Çimento Alım Koşulları",
          description:
            "Portland çimento, beyaz çimento ve özel çimento alımı yapılmaktadır",
          requirements: [
            "Minimum 2000 torba",
            "TSE ve CE belgeli",
            "Direkt fabrika sevkiyatı",
            "Uygun ödeme koşulları",
          ],
          brands: ["Çimentaş", "Beyazlar", "PortCim", "Çimsa"],
        },
      },
      {
        id: "alis-parke",
        title: "Parke Alımı",
        description: "Toptan parke alımı yapılır",
        image: productImages.zemin,
        details: {
          title: "Parke Alım Koşulları",
          description:
            "Laminant parke, ahşap parke ve vinil parke alımı yapılmaktadır",
          requirements: [
            "Minimum 1000 m²",
            "AC4 ve üzeri sınıf",
            "Garanti belgeli",
            "Toptan fiyatlandırma",
          ],
          brands: ["ParkeLine", "LaminantCo", "WoodFloor", "VinylTech"],
        },
      },
      {
        id: "alis-kapi",
        title: "Kapı Alımı",
        description: "Toptan kapı alımı yapılır",
        image: productImages.kapi,
        details: {
          title: "Kapı Alım Koşulları",
          description:
            "Amerikan panel kapı, çelik kapı ve oda kapısı alımı yapılmaktadır",
          requirements: [
            "Minimum 50 adet",
            "Garanti belgeli",
            "TSE standartlarına uygun",
            "Toptan fiyat avantajı",
          ],
          brands: ["DoorTech", "ÇelikKapı", "PanelDoor", "KapıSan"],
        },
      },
      {
        id: "alis-pvc",
        title: "PVC Alımı",
        description: "Toptan PVC doğrama alımı yapılır",
        image: productImages.pvc,
        details: {
          title: "PVC Alım Koşulları",
          description:
            "PVC pencere, kapı ve cam balkon sistemleri alımı yapılmaktadır",
          requirements: [
            "Proje bazlı alım",
            "7 odacıklı profil",
            "ISO belgeli",
            "Uygun ödeme planı",
          ],
          brands: ["WinTech", "PVCPro", "PencereSan", "ProfilCo"],
        },
      },
      {
        id: "alis-boya",
        title: "Boya Alımı",
        description: "Toptan boya alımı yapılır",
        image: productImages.boya,
        details: {
          title: "Boya Alım Koşulları",
          description:
            "İç cephe, dış cephe ve özel boyalar alımı yapılmaktadır",
          requirements: [
            "Minimum 1000 kg",
            "TSE belgeli",
            "Su bazlı ürünler",
            "Toptan fiyatlandırma",
          ],
          brands: ["BoyaCo", "ColorTech", "Boyasan", "RenkPro"],
        },
      },
    ],
  },
};
