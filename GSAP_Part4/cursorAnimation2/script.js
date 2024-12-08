var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var image = document.querySelector('#image');
main.addEventListener('mousemove', (e) => {
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 1,
        // ease: "back.out(1.7)"
    })
});

image.addEventListener('mouseenter', () => {  
    cursor.innerHTML = 'View  More';  
    gsap.to(cursor,{
        scale: 2,
        duration: 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.164)'
    })
});

image.addEventListener('mouseleave', () => {
    cursor.innerHTML = '';
    gsap.to(cursor,{
        scale: 1,
        duration: 0.5,
        backgroundColor: ''
    })
});