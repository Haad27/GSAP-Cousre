document.addEventListener("DOMContentLoaded", function() {
  // Example: Using GSAP timeline with .to() and .from()
  // This timeline animates #box to the right, then animates #box1 after #box is done.
  const tl = gsap.timeline({
    repeat: 1, // The whole timeline will play forward, then backward, then stop
    yoyo: true // Makes the timeline reverse after finishing
  });

  // Animate #box from its current position to the right with scaling and color change
  tl.to("#box", {
    x: 500,
    rotation: 20,
    duration: 1,
    scale: 1.5,
    backgroundColor: "blue",
    ease: "power2.inOut"
  })
  // Animate #box1 after #box is done
  .from("#box1", {
    x: -500,
    scale: 0.5,
    backgroundColor: "yellow",
    duration: 1,
    ease: "power2.inOut"
  })
  .to("#box1", {
    x: 500,
    rotation: 20,
    duration: 1,
    backgroundColor: "red",
    scale: 1.5,
    ease: "power2.inOut"
  });

  // Animate all h1 elements from above with a fade-in and staggered effect
  gsap.from("h1", {
    color: "red",
    duration: 1,
    delay: 1,
    y: -20,
    opacity: 0,
    stagger: 0.5,
    repeat: -1,
    yoyo: true
  });

  // Animate h4 and then h2 in sequence using a timeline
  const headingTimeline = gsap.timeline();
  headingTimeline
    .from("h4", {
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
});

