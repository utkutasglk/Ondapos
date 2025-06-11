import React from "react";

import "../../styles/testimonial.css";

import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Müşteri Yorumları</h6>
          <h2>
            500'den fazla müşteri{" "}
            <span className="highlight">bize güveniyor</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                "Bu ekiple çalışmak harika bir deneyimdi. Sundukları çözümler
                işimizi inanılmaz kolaylaştırdı ve verimliliğimizi artırdı. Her
                aşamada gösterdikleri profesyonel yaklaşım ve hızlı destekleri
                için kendilerine teşekkür ederiz."
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Hakan Kaya</h5>
                  <p className="description">CEO,Tatilinolsun</p>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <p className="description">
                "E-ticaret sitemize ödeme sistemi entegre etmek gözümüzde
                büyüyordu, ancak Ondapos ekibi sayesinde süreç çok pürüzsüz
                ilerledi. Sundukları güvenli ve kullanıcı dostu arayüz sayesinde
                müşteri memnuniyetimiz ve satışlarımız gözle görülür şekilde
                arttı. Kesinlikle tavsiye ederim."
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Elif Sağlam</h5>
                  <p className="description">Kıraç Kuyumculuk</p>
                </div>
              </div>
            </div>
            <div className="slider__item">
              <p className="description">
                "Ondapos'a geçiş yaptıktan sonra ödeme alma süreçlerimiz
                inanılmaz hızlandı. Özellikle Mobil NFC ve QR ödeme seçenekleri,
                müşterilerimiz için büyük kolaylık sağladı. Düşük komisyon
                oranları ve şeffaf raporlama sistemi sayesinde maliyetlerimizi
                daha iyi yönetiyoruz."
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Mehmet Yılmaz</h5>
                  <p className="description">İşletme Sahibi, Kahve Durağı</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
