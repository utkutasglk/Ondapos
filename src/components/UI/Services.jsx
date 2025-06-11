import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-refund-2-line",
    title: "Sanal Pos",
    desc: "Web siteniz veya mobil uygulamanız üzerinden online olarak güvenli ödemeler alın.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobil NFC",
    desc: "Telefonunuzu POS cihazına dönüştürerek temassız ve hızlı ödemeler kabul edin.",
  },
  {
    icon: "ri-qr-code-line",
    title: "QR Payment",
    desc: "Müşterilerinizin QR kod okutarak akıllı telefonlarıyla kolayca ödeme yapmasını sağlayın.",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Secure Payment",
    desc: "En güncel güvenlik standartları ile hem işletmenizi hem de müşterilerinizi koruyun.",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Hizmetlerimiz</h6>
          <h2>İşletmenizin ödeme maliyetlerinden</h2>
          <h2 className="highlight">en iyi hizmetimizle tasarruf edin</h2>
        </div>
        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={item}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
