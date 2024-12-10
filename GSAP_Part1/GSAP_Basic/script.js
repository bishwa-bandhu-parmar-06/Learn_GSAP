gsap.to("#box",{
    x : 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    repeat: 1,
    yoyo: true
})

gsap.to("#box2",{
    x : 1000,
    y: 100,
    duration: 2,
    delay: 3,
    scale: 0.5,
    backgroundColor: "green",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true
})

gsap.from("#box3",{
    x : 1000,
    duration: 2,
    delay: 5
})

gsap.to("h1",{
    color: "red",
    duration: 2,
    delay: 1,
    opacity: 1
})

gsap.from("h1",{
    y: 50,
    opcity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.5
})