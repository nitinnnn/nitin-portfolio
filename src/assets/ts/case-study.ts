declare const $: any;

function resizeImages(){
  document.querySelectorAll(".gallery-img").forEach((image) => {
    var image2 = <HTMLDivElement>image;
  
    image2.style.height = `${image2.clientWidth}px`;
  });
}

resizeImages();
tryVideoResize();

window.onresize = function(event) {
  resizeImages();
  tryVideoResize();
};

function tryVideoResize() {
  try{
    const video = <HTMLDivElement>document.querySelector(".video-demo");
    video.style.height = `${(video.clientWidth / 16) * 8.165}px`;
  } catch (e) {}
}

// 
let navbar_timeline = anime.timeline({ autoplay: true, loop: false });

// Add animations
let nav_anime = {
  targets: '.big-text-title',
  translateY: ["200", "0"],
  opacity: [0, 1],
  delay: 100,
  duration: 1000,
  direction: "alternate",
  easing: "easeOutExpo",
};

// Add animation to timeline
navbar_timeline.add(nav_anime);
