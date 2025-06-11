import React from "react";
import "../../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Birlikte çalışalım</h6>
            <h2>
              Yeni fikirleri{" "}
              <span className="highlight">keşfedin ve abone olun </span>
            </h2>
          </div>
          <div className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="secondary__btn subscribe__btn">
              Şimdi Abone Ol
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
