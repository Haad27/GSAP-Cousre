gsap.to("#page2 h1", {
  xPercent: -250, // same as translateX(-250%)
  ease: "none",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top top",
    end: () => "+=" + document.querySelector("#page2 h1").offsetWidth * 2.5, // match how far text needs to scroll
    scrub: 1,
    pin: true
  }
});
