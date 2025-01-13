import React from "react";
import "./Contact.scss";

const Contact = () => {
  const emailAddress = "yusufkrks97@gmail.com";
  const emailSubject = "Yapı Market Ürün Bilgi Talebi";
  const emailBody = "Merhaba, ürünleriniz hakkında bilgi almak istiyorum.";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const contactMethods = [
    {
      icon: "📍",
      title: "Adres",
      content: "Şanlıurfa",
      link: null,
    },
    {
      icon: "📞",
      title: "Telefon",
      content: "+90 545 236 24 56",
      link: "tel:+905452362456",
    },
    {
      icon: "📧",
      title: "E-posta",
      content: "yusufkrks97@gmail.com",
      link: mailtoLink,
    },
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>İletişim</h1>
          <p className="lead">
            Ürünlerimiz ve hizmetlerimiz hakkında bilgi almak için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{method.icon}</span>
              <h3>{method.title}</h3>
              {method.link ? (
                <a href={method.link}>{method.content}</a>
              ) : (
                <p>{method.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Ürün ve Fiyat Bilgisi Alın</h2>
          <p>
            Ürünlerimiz, fiyatlarımız ve hizmetlerimiz hakkında detaylı bilgi
            almak için hemen e-posta gönderin.
          </p>
          <a href={mailtoLink} className="cta-button">
            E-posta Gönder
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
