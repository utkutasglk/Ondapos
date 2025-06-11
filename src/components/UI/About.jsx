import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Hızlı İş Süreci",
    desc: "Projenize hızla başlar, modern teknolojilerimiz sayesinde verimli ve kesintisiz bir hizmet akışı sağlarız.",
  },
  {
    icon: "ri-team-line",
    title: "Alanında Uzman Ekip",
    desc: "Her biri kendi alanında profesyonel olan ekibimiz, projenizin her aşamasında size özel çözümler sunmak için çalışır.!",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Müşteri Desteği",
    desc: "Tüm sorularınız ve ihtiyaçlarınız için size bir telefon kadar yakınız. Kesintisiz müşteri hizmetlerimizle her zaman yanınızdayız.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Neden bizi seçmelisiniz</h6>
            <h2>
              Müşterilerimizin{" "}
              <h2 className="highlight">finansal zorlukları</h2> aşmasında
              uzmanız
            </h2>

            <p className="description about__content-desc">
              Finansal hedeflerinize ulaşmanız için size özel stratejiler
              geliştiriyoruz. Deneyimli ekibimizle, işinizin karşılaştığı her
              türlü mali engeli aşmanıza yardımcı oluyor ve sürdürülebilir
              büyüme için sağlam bir zemin hazırlıyoruz.
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
