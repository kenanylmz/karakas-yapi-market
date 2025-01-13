import { productImages } from "../config/assets";

export const categories = [
  {
    id: 1,
    title: "Temel Malzemeler",
    description: "Çimento, kum, kireç, beton katkıları",
    image: productImages.temel.cimento,
    products: [
      {
        id: 1,
        name: "Portland Çimento",
        description: "42.5 R Yüksek Dayanımlı Portland Çimentosu",
        image: productImages.temel.cimento,
        features: [
          "42.5 R Portland Çimentosu",
          "50 kg'lık torbalar",
          "Yüksek dayanım",
          "TSE standartlarına uygun üretim",
        ],
      },
      // Diğer temel malzemeler...
    ],
  },
  {
    id: 2,
    title: "Yapı Kimyasalları",
    description: "Su yalıtımı, yapıştırıcılar, harç malzemeleri",
    image: productImages.kapi.kapi1,
    products: [
      {
        id: 1,
        name: "Su Yalıtım Malzemesi",
        description: "Çift komponentli su yalıtım malzemesi",
        image: productImages.kapi.kapi1,
        features: ["UV dayanımlı", "Yüksek elastikiyet", "Kolay uygulama"],
      },
      // Diğer yapı kimyasalları...
    ],
  },
  // Diğer kategoriler...
];
