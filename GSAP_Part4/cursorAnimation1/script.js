var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');

main.addEventListener('mousemove', (e) => {
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out(1.7)"
    })
});