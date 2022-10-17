let close = document.querySelector(".mobile-menu .close");
let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let mobileLink = document.querySelectorAll(".mobile-link");
let overlay = document.querySelector(".overlay");

function toggleMenuCLasses() {
  overlay.classList.toggle("menu-opened");
}

hamburger.addEventListener("click", toggleMenuCLasses);
close.addEventListener("click", toggleMenuCLasses);

overlay.addEventListener("click", function () {
  overlay.classList.remove("menu-opened");
});

// Animation
var tl = gsap.timeline({ defaults: { duration: 0.8 } });

tl.from(".hero", {
  duration: 1,
  ease: "power4.in",
  delay: 0.08,
  opacity: 0,
})
  .from(".brand", {
    delay: 0.2,
    opacity: 0,
  })
  .from(".list-link", {
    opacity: 0,
    delay: -0.8,
    stagger: {
      amount: 0.6,
    },
  })
  .from(".section-title span", {
    duration: 1.6,
    y: 50,
    ease: "power4.out",
    skewY: 7,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero p", {
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero .price", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.3,
    },
  })
  .from(".hero .price .cta-container", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".item", {
    y: 50,
    opacity: 0,
    delay: 0.01,
    stagger: {
      amount: 0.4,
    },
  })
  .from(".hero img", {
    y: 50,
    opacity: 0,
    delay: -1,
    stagger: {
      amount: 0.4,
    },
  });
