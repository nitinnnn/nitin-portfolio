import anime from "animejs";

anime({
  targets: "#web-dev-text-js h1",
  loop: false,
  duration: 1200,
  translateX: ['-100%', '0'],
  easing: 'easeOutSine'
}).play();

var nitin = document.querySelector("#nitin-js") as HTMLDivElement;
var layer = document.querySelector("#layer-js") as HTMLDivElement;

layer.addEventListener("mousemove", (e) => {
  var ivalueX = (e.pageX * -1) / 20;
  var ivalueY = (e.pageY * -1) / 20;

  nitin.style.transform = "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)";
});

var headings = document.querySelectorAll(".heading-wrap");

headings[1].addEventListener("mouseenter", () => {
  if (headings[1].classList.contains("inactive")) {
    headings[1].classList.remove("inactive");
    headings[1].classList.add("active");

    headings[0].classList.remove("active");
    headings[0].classList.add("inactive");
  }
});
headings[1].addEventListener("mouseleave", () => {
  if (headings[1].classList.contains("active")) {
    headings[1].classList.remove("active");
    headings[1].classList.add("inactive");

    headings[0].classList.add("active");
    headings[0].classList.remove("inactive");
  }
});
