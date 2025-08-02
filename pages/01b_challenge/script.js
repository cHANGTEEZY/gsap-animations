import gsap from "gsap";

gsap.to(".card", {
  opacity: 1,
  scale: 0.97,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      //   scale: 1,
      //   x: 100,
      duration: 0.9,
      //   ease: "back.inOut",
      boxShadow: "0px 0px 70px rgba(255,255,255,0.3)",
      //   yoyo: ,
      //   repeat: -1,
    });
  },
});
