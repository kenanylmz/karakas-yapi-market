import React from "react";
import "./WhyChooseUs.scss";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Geniş Ürün Yelpazesi",
      description:
        "Her türlü yapı ve inşaat ihtiyacına uygun çözümler sunuyoruz.",
      icon: "🏗️",
    },
    {
      title: "Kaliteli Markalar",
      description:
        "Güvenilir ve sertifikalı ürün seçenekleri ile hizmetinizdeyiz.",
      icon: "⭐",
    },
    {
      title: "Rekabetçi Fiyatlar",
      description: "Projenizin bütçesine uygun fiyat politikası uyguluyoruz.",
      icon: "💰",
    },
    {
      title: "Uzman Danışmanlık",
      description:
        "Deneyimli ekibimiz ile doğru ürün seçiminde size yardımcı oluyoruz.",
      icon: "👨‍💼",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
        <div className="why-choose-us__grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-card__icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
