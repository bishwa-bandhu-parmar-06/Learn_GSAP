gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        markers: true,
        scrub: 3,
        pin: true,
    }
})