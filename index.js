import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".square3", {
    flex: 0,
    duration: 1.5,
    delay: 1.5,
    ease: "circ.inOut",
  });
  gsap.from(".square2", {
    flex: 0,
    duration: 1.5,
    delay: 1.5,
    ease: "circ.inOut",
  });
  gsap.from(".square1 img", {
    top: 200,
    ease: "steps(2)",
    delay: 1,
  });
  gsap.from(".card", {
    overflow: "hidden",
    height: 0,
    duration: 1,
    ease: "bounce.in",
    delay: 1,
  });
});
