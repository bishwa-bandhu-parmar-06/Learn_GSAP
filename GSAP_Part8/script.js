var tl = gsap.timeline();

function page1animation(){
    tl.from('nav h1', {
        duration: 1,
        delay: 0.5,
        y: -50,
        opacity: 0,
        // ease: 'bounce'
    })
    
    tl.from('nav h4, nav button', {
        duration: 0.7,
        y: -50,
        opacity: 0,
        // ease: 'bounce',
        stagger: 0.2
    
    })
    
    tl.from(".center-part1 h1",{
        x: -200,
        opacity: 0,
        duration: 0.5,
    })
    
    
    tl.from(".center-part1 p",{
        x: -100,
        opacity: 0,
        duration: 0.4,
    })
    
    tl.from(".center-part1 button",{
        opacity: 0,
        duration: 0.4,
    })
    
    tl.from(".center-part2 img",{
        opacity: 0,
        duration: 0.4,
        x: 200
    },"-=0.5")
    
    tl.from(".section1bottom img",{
        opacity: 0,
        y: 30,
        stagger: 0.5,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".section1bottom img",
            scroller: "body",
            start: "top 50%",
            markers: true,
        }
    })

}

page1animation();


gsap.from(".services h3",{
    x: -200,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".services h3",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 40%",
    }
})