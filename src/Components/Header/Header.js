import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

function Header() {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <div>
          <img
            src="https://res.cloudinary.com/dwahdqsxe/image/upload/v1621490282/mainLogo_d9qyvf.png"
            class="logo-main-img"
            alt=""
          />
          <a href="#" class="nav__logo">
            {" "}
            <span style={{ fontSize: "20px", fontWeight: "900" }}>E</span>xa
            <span style={{ fontsize: "20px", fontWeight: "700" }}>M</span>ade
          </a>
        </div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link ">
                <i class="bi bi-house nav__icon"></i>
                <span class="nav__name">Home</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link active-link">
                <i class="bi bi-file-person-fill nav__icon"></i>
                <span class="nav__name">About</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="bi bi-pencil-square nav__icon"></i>
                <span class="nav__name">
                  Articles{" "}
                  <i class="bi bi-caret-down-fill d-none d-md-inline"></i>
                </span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#portfolio" class="nav__link">
                <i class="bi bi-file-earmark nav__icon"></i>
                <span class="nav__name">
                  Materials{" "}
                  <i class="bi bi-caret-down-fill d-none d-md-inline"></i>
                </span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#contactme" class="nav__link">
                <i class="bi bi-question-diamond nav__icon"></i>
                <span class="nav__name">
                  Tests <i class="bi bi-caret-down-fill d-none d-md-inline"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <img
            src={images["perfil.png"]}
            alt=""
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
            class="nav__img"
          />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              <i class="bi bi-person-circle"></i> My Account
            </a>
            <a class="dropdown-item" href="#">
              <i class="bi bi-clock-history"></i> History
            </a>
            <a class="dropdown-item" href="#">
              <i class="bi bi-box-arrow-in-right"></i> Logout
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
