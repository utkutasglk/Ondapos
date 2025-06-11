import React from "react";
import "../Footer/footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Pazarlama",
  },
  {
    path: "#",
    display: "Analitik",
  },
  {
    path: "#",
    display: "E-ticaret",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Fiyatlandırma",
  },
  {
    path: "#",
    display: "Dokümantasyon",
  },
  {
    path: "#",
    display: "Rehberler",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "Hakkımızda",
  },
  {
    path: "#",
    display: "Kariyer",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Ondapos</h2>
            <p className="description">Bizimle büyüyün</p>
            <p className="small__text description">
              Ondapos, işletmeler için yenilikçi ödeme çözümleri sunarak dijital
              dönüşümlerine liderlik eder. Güvenli altyapımız ve uzman
              ekibimizle işinizi geleceğe taşıyın.
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Çözümler</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Destek</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Şirket</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year}, developed by Utku Tasguluk. All rights reserved.
          {""}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
