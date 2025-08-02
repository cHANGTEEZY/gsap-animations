import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  //   scale: 1.03,
  duration: 2,
  animationDelay: 600,
  rotate: 180,
  yoyo: true,
  repeat: -1,
  scale: 1.25,
  borderRadius: "50%",
  x: 300,
  delay: 2,
});
