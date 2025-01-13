import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>Hakkımızda</h2>
        <div className="about-section__content">
          <div className="about-section__text">
            <p>
              Yapı sektörüne değer katan ve inşaat projeleriniz için ihtiyacınız
              olan her türlü malzemeyi sunan geniş bir platformuz. Kaliteli
              ürünler, uygun fiyatlar ve müşteri odaklı hizmet anlayışımızla,
              yapı projelerinizin güvenilir destekçisiyiz.
            </p>
          </div>
          <div className="about-section__features">
            <div className="feature">
              <h3>Geniş Ürün Yelpazesi</h3>
              <p>Her türlü yapı ve inşaat ihtiyacına uygun çözümler</p>
            </div>
            <div className="feature">
              <h3>Kaliteli Markalar</h3>
              <p>Güvenilir ve sertifikalı ürün seçenekleri</p>
            </div>
            <div className="feature">
              <h3>Rekabetçi Fiyatlar</h3>
              <p>Projenizin bütçesine dost fiyat politikası</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
