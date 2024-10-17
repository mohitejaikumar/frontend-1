

const tl = gsap.timeline();

tl.from(".line h1", {
    y:100,
    stagger:0.25,
    duration:0.6,
    delay:0.5
});

tl.from(".line1-part1",{
    opacity:0,
    onStart:function(){
        const counterDiv = document.querySelector(".line1-part1 h5");
        let counter =0;
        const interval = setInterval(()=>{
                if(counter<=100){
                    counterDiv.textContent = counter;
                    counter++;
                }
                else{
                    clearInterval(interval);
                }
        },20);
    }
})
tl.to("#now" , {
    animationName:"anime",
    opacity:1,
})

tl.to("#loader" , {
    opacity:0,
    duration:0.4,
    delay:2
})

tl.from('#page1',{
    y:1200,
    opacity:0,
    delay:0.2
})

tl.to("#loader",{
    display:"none"
})