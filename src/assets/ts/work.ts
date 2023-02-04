function resizePortolfioImages(){
    document.querySelectorAll('.slideshow-img').forEach((image) => {
        var image2 = (<HTMLDivElement>image);
        
        image2.style.height = `${image2.clientWidth}px`;
    });
}

resizePortolfioImages();

window.onresize = function(event) {
    resizePortolfioImages();
};