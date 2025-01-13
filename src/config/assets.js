// Promotional images (Tanıtım resimleri)
import hero from "../assets/images/promotional/1.jpg";
import feature1 from "../assets/images/promotional/2.jpg";
import construction from "../assets/images/promotional/6.png";
import feature3 from "../assets/images/promotional/4.jpg";

// Product images (Ürün resimleri)
import alci1 from "../assets/images/products/alci1.jpg";
import alci2 from "../assets/images/products/alci2.jpg";
import boya1 from "../assets/images/products/boya1.jpg";
import boya2 from "../assets/images/products/boya2.jpg";
import cimento1 from "../assets/images/products/cimento.png";
import cimento2 from "../assets/images/products/cimento2.jpeg";
import kapi1 from "../assets/images/products/kapi1.jpg";
import kapi2 from "../assets/images/products/kapi2.jpg";
import parke1 from "../assets/images/products/parke1.jpeg";
import parke2 from "../assets/images/products/parke2.jpg";
import pvc1 from "../assets/images/products/pvc1.jpg";
import pvc2 from "../assets/images/products/pvc2.jpg";
import pvc3 from "../assets/images/products/pvc3.jpg";

// Ürün resimleri export
export const productImages = {
  // Kategori resimleri
  cimento: cimento1,
  alci: alci1,
  kapi: kapi1,
  boya: boya1,
  zemin: parke1,
  pvc: pvc1,

  // Çimento ürünleri
  portlandCimento: cimento1,
  beyazCimento: cimento2,

  // Alçı ürünleri
  sivaAlci: alci1,
  satenAlci: alci2,

  // Boya ürünleri
  icCepheBoya: boya1,
  disCepheBoya: boya2,

  // Kapı ürünleri
  ahsapKapi: kapi1,
  celikKapi: kapi2,

  // PVC ürünleri
  pvcPencere: pvc1,
  surmeSistem: pvc2,
  camBalkon: pvc3,

  // Zemin kaplamaları
  laminantParke: parke1,
  ahsapParke: parke2,
};

// Tanıtım resimleri export
export const promotionalImages = {
  hero, // Ana sayfa hero bölümü
  construction, // Özellik kartı 2
  feature1, // Özellik kartı 1
  feature3, // Özellik kartı 3
};

// Resim boyutlandırma yardımcı fonksiyonu
export const getOptimizedImageUrl = (image, width = 400) => {
  return `${image}?w=${width}&q=80`;
};
