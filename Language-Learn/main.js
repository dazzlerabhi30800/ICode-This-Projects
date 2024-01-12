const tiers = document.querySelectorAll(".tier");
const selectBtns = document.querySelectorAll(".select");

selectBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tiers.forEach((tier) => tier.classList.remove("active"));
    tiers[index].classList.add("active");
  });
});
