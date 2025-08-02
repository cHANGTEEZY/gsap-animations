import { gsap } from "gsap";

gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      y: -80,
      x: 20,
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      ease: "ease.inOut",
      yoyo: true,
      repeat: -1,
      duration: 0.5,
    });
  },
});
