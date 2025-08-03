import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button?.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      isFloating = true;
    }
  } else {
    button?.classList.remove("show");
  }
});

button?.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.2,
  });
});

button?.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
  });
});

button?.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
