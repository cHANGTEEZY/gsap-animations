import gsap from "gsap";

const animateToast = document.querySelector(".toast");

const showToastLoop = () => {
  gsap.to(animateToast, {
    y: -120,
    x: 0,
    opacity: 1,
    duration: 0.9,
    ease: "back",
  });
};

// animateToast?.addEventListener("mouseover", () => {
//   gsap.to(animateToast, {
//     scale: 1.04,
//     duration: 0.4,
//   });
// });

// animateToast?.addEventListener("mouseout", () => {
//   gsap.to(animateToast, {
//     scale: 1,
//     duration: 0.4,
//   });
// });

animateToast?.addEventListener("click", () => {
  gsap.to(animateToast, {
    scale: 0.978,
    duration: 0.1,
    // ease: "bounce.inOut",
    onComplete: () => {
      gsap.to(animateToast, {
        scale: 1,
        duration: 0.1,
      });
    },
  });
});

showToastLoop();
