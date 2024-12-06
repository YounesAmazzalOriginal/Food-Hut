document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-btn").forEach((eachBtn) => {
    eachBtn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((eachBtnNotActive) => {
        eachBtnNotActive.classList.remove("active");
      });
      eachBtn.classList.add("active");
    });
  });
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
