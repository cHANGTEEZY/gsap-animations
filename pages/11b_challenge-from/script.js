import gsap from "gsap";

gsap.to(".card-front", {
  rotateY: 180,
  duration: 2,
  //   opacity: 0,
  repeat: -1,
  yoyo: true,
  delay: 1,
  repeatDelay: 1,
  //   ease: "elastic.in",
});

gsap.to(".card-back", {
  rotateY: 360,
  duration: 2,
  //   opacity: 1,
  repeat: -1,
  yoyo: true,
  delay: 1,
  repeatDelay: 1,
  //   ease: "elastic.in",
});
