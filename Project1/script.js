let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    ease: "expo.out",
    duration: 0.6,
  });
});

main.addEventListener("click", function () {
  gsap.to(cursor, {
    scale: 2,
    duration: 0.2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1,
  });
});
imagediv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "view more";

  gsap.to(cursor, {
    scale: 3,
  });
});
imagediv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
  });
});
