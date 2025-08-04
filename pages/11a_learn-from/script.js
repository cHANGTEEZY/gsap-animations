import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const cardAnimation = gsap.from(".card", {
  opacity: 0,
  y: 50,
  duration: 0.4,
  //   delay: 0.2,
  ease: "power4.out",
  stagger: 0.2,
});

repeat?.addEventListener("click", () => {
  cardAnimation.restart();
});
