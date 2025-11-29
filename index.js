import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-card",
      start: "top top",
      end: "+=150%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    }
  });

  tl.from(".card", {
    height: 0,
    duration: 1,
    ease: "power2.inOut",
  });

  tl.from(".square1 img", {
    top: 200,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.to(".card", {
    overflow: "visible",
    duration: 0.01,
  });

  tl.from(".square2", {
    flex: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });

  tl.from(".square3", {
    flex: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });
});
