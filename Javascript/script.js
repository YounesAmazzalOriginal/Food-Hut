document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-btn").forEach((eachBtn) => {
    eachBtn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((eachBtnNotActive) => {
        eachBtnNotActive.classList.remove("active");
      });
      eachBtn.classList.add("active");
    });
  });

  // Toggle Nav
  document.querySelector(".open-nav").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.add("toggleNav");
  });
  document.querySelector(".close-nav").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.remove("toggleNav");
  });

  document.querySelectorAll("nav ul li a").forEach((eachNavLink) => {
    eachNavLink.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      nav.classList.remove("toggleNav");
    });
  });
  // /Toggle Nav

  // Switch Mode
  let themeSwitcher = false;
  document.querySelector(".theme-btn").addEventListener("click", () => {
    themeSwitcher = !themeSwitcher;
    const stylesheet = document.querySelector("#stylesheet");
    stylesheet.href = themeSwitcher ? "/Css/index.css" : "/Css/lightMode.css";

    localStorage.setItem("mode", stylesheet.href);

    const circle = document.querySelector(".theme-btn .circle");
    circle.style.marginLeft = themeSwitcher ? "20px" : "3px";
    circle.style.backgroundColor = themeSwitcher
      ? "white"
      : "var(--dark-color)";
    circle.style.color = themeSwitcher ? "var(--dark-color)" : "white";

    localStorage.setItem("circlesituation", circle.style.marginLeft);
    localStorage.setItem("circleBg", circle.style.backgroundColor);
    localStorage.setItem("circleColor", circle.style.color);

    //
    if (
      window.matchMedia("(min-width: 320px) and (max-width: 599px)").matches
    ) {
      const nav = document.querySelector("nav");
      nav.style.backgroundColor = themeSwitcher ? "black" : "white";

      localStorage.setItem("mobileNavBg", nav.style.backgroundColor);
    }
  });
  const savedMode = localStorage.getItem("mode");
  const savedCircleSituation = localStorage.getItem("circlesituation");
  const savedCircleBg = localStorage.getItem("circleBg");
  const savedCirclecolor = localStorage.getItem("circleColor");
  const savedCircleIcon = localStorage.getItem("icon");
  const savedMobileNavBg = localStorage.getItem("mobileNavBg");

  if (
    savedMode &&
    savedCircleSituation &&
    savedCircleBg &&
    savedCirclecolor &&
    savedCircleIcon &&
    savedMobileNavBg
  ) {
    const circle = document.querySelector(".theme-btn .circle");
    const nav = document.querySelector("nav");
    stylesheet.href = savedMode;
    circle.style.backgroundColor = savedCircleBg;
    circle.style.marginLeft = savedCircleSituation;
    circleIcon.classList(savedCircleIcon);

    nav.style.backgroundColor = savedMobileNavBg;
  }
  // /Switch Mode
});

function filterBtn(target) {
  document.querySelectorAll(".food-single-card").forEach((singleDishe) => {
    const DishData = singleDishe.getAttribute("data-type");
    singleDishe.style.display = "none";
    if (DishData == target.textContent) {
      singleDishe.style.display = "flex";
    }
  });
}
function filterBtnAll() {
  document.querySelectorAll(".food-single-card").forEach((singleDishe) => {
    singleDishe.style.display = "flex";
  });
}
