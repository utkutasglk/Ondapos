import React from "react";
import "../../styles/blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "Çalışmalarımız hakkında bilgi almak için videolarımızı izleyin...",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Makaleler",
    desc: "Markanızın müşteriyle etkileşimini geliştirmek mi istiyorsunuz? Gelin konuşalım...",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Vaka Analizi",
    desc: "Dönüşüm oranınızı bizimle artırın...",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Blogumuz</h6>
          <h2>
            En son blog yazılarımıza
            <span className="highlight"> bir göz atalım</span>
          </h2>
        </div>
        <div className="blog_wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
