import React from "react";
import "./About.scss";

const About = () => {
  const companyStats = [
    {
      number: "25+",
      label: "Yıllık Deneyim",
      icon: "🏢",
    },
    {
      number: "10000+",
      label: "Tamamlanan Proje",
      icon: "🏗️",
    },
    {
      number: "50000+",
      label: "Mutlu Müşteri",
      icon: "👥",
    },
    {
      number: "1500+",
      label: "Ürün Çeşidi",
      icon: "📦",
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>Hakkımızda</h1>
          <p className="lead">
            Karakaş Yapı Market olarak, yapı malzemeleri sektöründe 25 yıllık
            deneyimimizle hem toptan alım hem de satış hizmeti veriyoruz. Geniş
            ürün yelpazemiz ve güçlü tedarik zincirimiz ile müşterilerimize en
            kaliteli ürünleri sunuyor, aynı zamanda büyük miktarlarda alım
            yaparak tedarikçilerimize güvenilir bir iş ortağı oluyoruz.
          </p>
        </div>

        <div className="stats-grid">
          {companyStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="content-card vision">
            <h2>Vizyonumuz</h2>
            <p>
              Yapı malzemeleri sektöründe müşterilerimize en kaliteli ürünleri,
              en uygun fiyatlarla sunarak, projelerinin güvenilir çözüm ortağı
              olmak.
            </p>
          </div>

          <div className="content-card mission">
            <h2>Misyonumuz</h2>
            <p>
              Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, doğru
              ürünleri doğru fiyatlarla sunmak ve sektörde güvenilir bir marka
              olmak.
            </p>
          </div>

          <div className="content-card contact">
            <h2>İletişim Bilgileri</h2>
            <div className="contact-info">
              <div className="info-item">
                <span className="icon">📍</span>
                <div className="details">
                  <h3>Adres</h3>
                  <p>Şanlıurfa</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div className="details">
                  <h3>Telefon</h3>
                  <p>
                    <a href="tel:+905452362456">+90 545 236 24 56</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <div className="details">
                  <h3>E-posta</h3>
                  <p>
                    <a href="mailto:yusufkrks97@gmail.com">
                      yusufkrks97@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card business-model">
            <h2>İş Modelimiz</h2>
            <div className="business-sections">
              <div className="section">
                <h3>Satış Hizmetlerimiz</h3>
                <p>
                  Geniş ürün yelpazemiz ile müşterilerimize kaliteli yapı
                  malzemeleri sunuyoruz. Perakende ve toptan satış
                  seçeneklerimizle her ölçekte projeye uygun çözümler
                  üretiyoruz.
                </p>
              </div>
              <div className="section">
                <h3>Alım Hizmetlerimiz</h3>
                <p>
                  Güçlü finansal yapımız ve geniş depolama alanlarımız sayesinde
                  büyük miktarlarda toptan alım yapıyoruz. Üreticiler için
                  güvenilir ve sürdürülebilir bir iş ortağıyız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
