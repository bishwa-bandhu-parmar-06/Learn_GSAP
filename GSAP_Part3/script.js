var intialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector('#string');

string.addEventListener("mousemove", function(dets){
    intialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr: {d: intialPath},
        duration: 0.2,
        ease: "power3.Out"
    })
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
});