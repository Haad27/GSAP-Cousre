document.addEventListener("DOMContentLoaded", function() {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true
  });
  tl.to("#box", {
    x: 500,
    rotation: 20,
    duration: 1,
    delay: 0,
    scale: 1.5,
    backgroundColor: "blue", // use backgroundColor for divs, not color
    yoyo: true,
    repeat: 2
  })
  .to("#box1", {
    x: 500,
    rotation: 20,
    duration: 1,
    backgroundColor: "red", // use backgroundColor for divs, not color
    delay: 0,
    scale: 1.5
  });
});

gsap.from("h1",{
    color : "red",
    duration : 1,
    delay : 1,
    y : -20,
    opacity: 0,
    stagger : 0.5,
    repeat : -1,
    yoyo : true
})

// Make sure there is at least one <h4> element in your HTML for this to animate
gsap.timeline().from("h4", {
    x: -200,
    duration: 1,
    opacity: 0,
    scale: 0.5
})

.from("h2", {
    x: -200,
    duration: 1,
    opacity: 0,
    scale: 0.5
});

