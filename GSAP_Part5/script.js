var tl = gsap.timeline();

var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");
tl.to("#full",{
    right: 0,
    duration: 0.5,
})

tl.from("#full h4",{
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.28,
})

tl.from("#full i",{
    opacity: 0,
})
tl.pause();
menu.addEventListener("click", function(){
    tl.play();
})

close.addEventListener("click", function(){
    tl.reverse();
})