function breakThetext(){
    var h1 = document.querySelector('h1');
    var h1Text = h1.textContent;

    var splittedText = h1Text.split('');
    var halfValue = Math.floor(splittedText.length / 2);
    var clutter = "";
    splittedText.forEach((latter,index) => {
        if(index < halfValue){
            clutter += `</span><span class="a" ${index}>${latter}`;
        }else{
            clutter += `<span class="b" ${index}>${latter}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakThetext();

gsap.from("h1 .a",{
    y: 80,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.5
})

gsap.from("h1 .b",{
    y: 80,
    opacity: 0,
    duration: 0.6,
    stagger: -0.15,
    delay: 0.5
})