document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    if (typeof firstPageAnim === 'function') firstPageAnim();
});

function firstPageAnim() {
  const tl = gsap.timeline();
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 2,
    ease: "expo.inOut",
  })
  .to(".boundingelem", {
    y: 0,
    ease: "expo.inOut",
    duration: 1.5,
    stagger: 0.2,
  }, "-=1")
  .from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
  }, "-=1");
}

function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circlemousefollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circlemousefollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

    })
}
circlemousefollower();
circleChaptaKaro();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    const rect = elem.getBoundingClientRect();
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "power3.out",
      left: dets.clientX - rect.left - 100, 
      top: dets.clientY - rect.top - 100,   
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});