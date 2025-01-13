import React from "react";
import { promotionalContent } from "../../../data/promotional";
import "./SpecialOffers.scss";

const SpecialOffers = () => {
  const { specialOffers } = promotionalContent;

  if (!specialOffers) return <div>Loading...</div>;

  return (
    <section className="special-offers">
      <div
        className="special-offers__background"
        style={{ backgroundImage: `url(${specialOffers.background})` }}
      />
      <div className="container">
        <div className="special-offers__content">
          <div className="special-offers__header">
            <h2>Fiyat ve Kampanya Bilgilendirmesi</h2>
            <p className="section-description">
              Güncel fiyatlar ve kampanyalar hakkında bilgi almak için bizimle
              iletişime geçin
            </p>
          </div>
          <div className="special-offers__notification">
            <div className="notification-card">
              <div className="notification-icon">💬</div>
              <h3>Bizimle İletişime Geçin</h3>
              <p>
                Ürünlerimiz ve güncel kampanyalarımız hakkında detaylı bilgi
                almak için müşteri temsilcilerimizle görüşebilirsiniz
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div className="contact-details">
                    <span className="label">Müşteri Hizmetleri</span>
                    <span className="value">0850 XXX XX XX</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📱</span>
                  <div className="contact-details">
                    <span className="label">WhatsApp Hattı</span>
                    <span className="value">0532 XXX XX XX</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div className="contact-details">
                    <span className="label">E-posta</span>
                    <span className="value">info@yapimarket.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
