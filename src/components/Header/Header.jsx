import React, { useRef, useEffect } from "react";

import "./header.css";

const nav__links = [
  {
    path: "#",
    display: "Anasayfa",
  },
  {
    path: "#about",
    display: "Hakkımızda",
  },
  {
    path: "#service",
    display: "Hizmetler",
  },
  {
    path: "#projects",
    display: "Projeler",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    // === START OF THE FIX ===

    // 1. Handle the "Home" link separately
    if (targetAttr === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Added for a nice scrolling effect
      });
      return; // Stop the function here
    }

    // 2. For all other links, find the element and scroll
    const targetElement = document.querySelector(targetAttr);

    // 3. Add a safety check to make sure the element exists
    if (targetElement) {
      const location = targetElement.offsetTop;

      window.scrollTo({
        left: 0,
        top: location - 80, // Your 80px offset for the sticky header
        behavior: "smooth", // Added for a nice scrolling effect
      });
    }
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Ondapos</h2>
          </div>
          {/* ============ navigation ========= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ light mode ========= */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i>
                  Dark
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i>
                  Light
                </span>
              )}
            </span>
          </div>
          <span className="mobile_menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
