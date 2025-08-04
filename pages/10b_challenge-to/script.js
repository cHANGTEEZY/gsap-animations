import gsap from "gsap";

const allToasts = document.querySelectorAll(".toast");

allToasts.forEach((toast, index) => {
  toast.style.bottom = `${index * 80}px`;

  gsap.to(toast, {
    y: -160,
    delay: index * 0.6 + 2,
    duration: 0.6,
    ease: "power2.inOut",
    zIndex: 1000 - index,
    onComplete: () => {
      gsap.to(toast, {
        x: 500,
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
  });
});
