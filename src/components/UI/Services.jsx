import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-refund-2-line",
    title: "Sanal Pos",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Iusto eveniet dolorum quidem magni iste ad ex obcaecati!",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobil NFC",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Iusto eveniet dolorum quidem magni iste ad ex obcaecati!",
  },
  {
    icon: "ri-qr-code-line",
    title: "QR Payment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Iusto eveniet dolorum quidem magni iste ad ex obcaecati!",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Secure Payment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Iusto eveniet dolorum quidem magni iste ad ex obcaecati!",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save payment cost your business with</h2>
          <h2 className="highlight">our best service</h2>
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
