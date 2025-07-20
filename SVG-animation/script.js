// var intial = "M 10 100 Q 500 100 990 100"
// var final = "M 10 100 Q 500 100 990 100"

// var string = document.querySelector("#string")
 

// //if you do click then the action will perform when clicked 
// //when it is mouseenter then when mouse goies by then it will enter
// string.addEventListener("mouseenter",function(dets){
//  intial = `M 10 100 Q ${dets.x} ${dets.y} 990 100`,
//  gsap.to("svg path" ,{
//     attr:{
//         d: intial
//     },
//     duration:0.3,
//     ease: "power3.out",
//     duration:0.3,

//  })
// })


// string.addEventListener("mouseleave",function(dets){
//     gsap.to("svg path" ,{
//        attr:{
//            d: final
//        },
//        duration:2.3,
//        ease: "elastic.out(1,0.1)",
   
//     })
//    })
const path = document.querySelector("svg path");
const string = document.querySelector("#string");

string.addEventListener("mousemove", function (e) {
  const bounds = string.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  const newD = `M 10 100 Q ${x} ${y} 990 100`;

  gsap.to(path, {
    attr: { d: newD },
    duration: 0.3,
    ease: "power2.out"
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(path, {
    attr: { d: "M 10 100 Q 500 100 990 100" },
    duration: 2.5,
    ease: "elastic.out(1, 0.1)"
  });
});


// string.addEventListener("mouseleave",function(){
//     console.log("leaved")
// })



// to make it smooth 

// let path = document.querySelector("svg path");

// document.querySelector("#string").addEventListener("mousemove", function (e) {
//   let bounds = this.getBoundingClientRect();
//   let relativeY = e.clientY - bounds.top; // relative to SVG container

//   // Clamp Y to avoid distortion
//   relativeY = Math.max(0, Math.min(200, relativeY));

//   let newPath = `M 10 100 Q 250 ${relativeY} 490 100`;

//   gsap.to(path, {
//     duration: 0.3,
//     ease: "power2.out",
//     attr: {
//       d: newPath
//     }
//   });
// });
