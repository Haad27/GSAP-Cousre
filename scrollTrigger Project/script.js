gsap.from("#page1 #box", {
    scale: 0,
    delay:1,
    duration :2,
    rotation :360,
});

gsap.from("#page3 #box2", {
    scale: 0,
    delay:1,
    duration :2,
    rotation :360,
});

gsap.from("#page2 h1", {
   opacity:0,
   x:500,
   duration :1,
   scrollTrigger:{
    trigger:"#page2 h1", //that triggers the satrt of aniamtoin
    scroller:"body",
    markers :true,  //help for understanding where it starts and ends
    start:"top 50%",  // where the triggers will start
   }
});

gsap.from("#page2 h2", {
   opacity:0,
   x:-500,
   duration :1,
   scrollTrigger:{
    trigger:"#page2 h2", //that triggers the satrt of aniamtoin
    scroller:"body",
    markers :true,  //help for understanding where it starts and ends
    start:"top 50%",  // where the triggers will start
   }
});

gsap.from("#page2 #box1", {
    scale: 0,
    delay:1,
    duration :1,
    rotation :360,
    scrollTrigger:{ 
        trigger:"#page2 #box1", //that triggers the satrt of aniamtoin
        scroller:"body",
        markers :true,  //help for understanding where it starts and ends
        start:"top 90%",  // where the triggers will start 
        start:"top 90%",  // where the triggers will start 
        end:"top 30%",//place between which it should start and end in between this interval
        scrub:2,// you can change the number for smoothnes
        //but for true it will also wokr but for smoothness you can give number 
        pin :true,  //this pins the aniamtion so if on bottom on screen it start to animate
        //this it is will pinned in the bottom and go to nexct  pages as well
    }
});