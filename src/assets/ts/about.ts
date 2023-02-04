var nitin = document.querySelector("#about-nitin-js") as HTMLDivElement;
var layer = document.querySelector("#about-layer-js") as HTMLDivElement;

layer.addEventListener("mousemove", (e) => {
  var ivalueX = (e.pageX * -1) / 20;
  var ivalueY = (e.pageY * -1) / 20;

  nitin.style.transform = "translate3d(" + ivalueX + "px," + ivalueY + "px, 0)";
});

