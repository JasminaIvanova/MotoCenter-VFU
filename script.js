const scroll = document.querySelector(".scroll-container"),
first = scroll.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".scroll-wrap i");

let  prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = scroll.scrollWidth - scroll.clientWidth; 
    arrowIcons[0].style.display = scroll.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = scroll.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstWidth = first.clientWidth + 14; 
        scroll.scrollLeft += icon.id == "left" ? -firstWidth : firstWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
const autoSlide = () => {
  
    if(scroll.scrollLeft - (scroll.scrollWidth - scroll.clientWidth) > -1 || scroll.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); 
    let firstWidth = first.clientWidth + 14;
  
    let valDifference = firstWidth - positionDiff;
    if(scroll.scrollLeft > prevScrollLeft) { 
        return scroll.scrollLeft += positionDiff > firstWidth / 3 ? valDifference : -positionDiff;
    }
   
    scroll.scrollLeft -= positionDiff > firstWidth / 3 ? valDifference : -positionDiff;
}




