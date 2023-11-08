(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

// prevent Default
document.addEventListener("contextmenu", function (lihan) {
  lihan.preventDefault();
});

// loader
const fadeOut = () => {
  const loaderWrapper = document.querySelector(".preloader");
  const body = document.body;
  loaderWrapper.classList.add("fade");
  body.classList.remove("onscroll");
};
window.addEventListener("load", fadeOut);