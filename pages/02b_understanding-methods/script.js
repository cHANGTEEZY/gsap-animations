import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
  opacity: 1,
  rotate: 360,
  borderRadius: "50%",
  yoyo: true,
  repeat: 2,
  onStart: () => {},
});

play?.addEventListener("click", () => {
  animation.play();
});

pause?.addEventListener("click", () => {
  animation.pause();
});

resume?.addEventListener("click", () => {
  animation.resume();
});

reverse?.addEventListener("click", () => {
  animation.reverse();
});

restart?.addEventListener("click", () => {
  animation.restart();
});

kill?.addEventListener("click", () => {
  animation.kill();
});

yoyo?.addEventListener("click", () => {
  animation.yoyo();
  animation.repeat(4);
});
