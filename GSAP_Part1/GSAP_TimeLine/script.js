

// with using Timeline

var tl = gsap.timeline();

tl.to("#box4",{
    x : 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
})
tl.to("#box5",{
    x : 1000,
    duration: 2,
    backgroundColor: "green",
})
tl.to("#box6",{
    x : 1000,
    duration: 2,
    backgroundColor: "yellow",
})



// Without using Timeline

gsap.to("#box1",{
    x : 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
})

gsap.to("#box2",{
    x : 1000,
    duration: 2,
    delay: 3,
    backgroundColor: "green",
})
gsap.to("#box3",{
    x : 1000,
    duration: 2,
    delay: 5,
    backgroundColor: "yellow",
})