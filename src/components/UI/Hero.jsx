import React from "react";
import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";
import lightImg from "../../images/light-hero-bg.jpg";
const Hero = ({ theme }) => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>En İyi Ödeme Çözümleriyle</h2>

              <h2 className="highlight">Markanızı Öne Çıkarın</h2>
            </div>
            <p className="description">
              İşletmeniz için modern ve güvenilir ödeme altyapıları kurarak,
              müşteri memnuniyetini artırmanıza ve gelirinizi yükseltmenize
              yardımcı oluyoruz.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Hemen Başlayın</button>
              <button className="secondary__btn">Daha Fazlasını Keşfet</button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
