import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Timeline principal com ScrollTrigger
  // scrub: true faz o scroll controlar diretamente a animação (avança e reverte)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-card",
      start: "top top",       // quando o topo da seção chegar no topo da tela
      end: "+=150%",          // a animação dura 150% da altura da viewport de scroll
      scrub: 1,               // suaviza a animação vinculada ao scroll (1 = 1 segundo de delay)
      pin: true,              // FIXA a seção no lugar enquanto a animação acontece
      anticipatePin: 1,       // suaviza o início do pin
      markers: true,          // mostra marcadores para debug (remova depois)
    }
  });

  // Animação 1: Card aparece (height de 0 para normal)
  tl.from(".card", {
    overflow: "hidden",
    height: 0,
    duration: 1,
    ease: "power2.inOut",
  });

  // Animação 2: Imagem sobe para a posição
  tl.from(".square1 img", {
    top: 200,
    duration: 0.8,
    ease: "power2.out",
  });

  // Animação 3: Square2 expande
  tl.from(".square2", {
    flex: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });

  // Animação 4: Square3 expande
  tl.from(".square3", {
    flex: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });
});
