import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.6,
    ease: "back.out(2)",
    // ease: "elastic.in(1, 0.3)",
    // ease: "circ.inOut",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("mouseover", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active"));
