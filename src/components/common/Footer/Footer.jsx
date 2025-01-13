import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Karakaş Yapı Market</h3>
          <p>Yapı projelerinizin güvenilir çözüm ortağı</p>
        </div>

        <div className="footer__section">
          <h4>Hızlı Erişim</h4>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/products">Ürünlerimiz</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>İletişim</h4>
          <ul>
            <li>Telefon: +90 555 555 5555</li>
            <li>E-posta: destek@yapimalzemeleri.com</li>
            <li>Adres: [Şirket Adresi]</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 Karakaş Yapı Market. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
