import mobileNav from "./mobileNav.js";
let navButton = document.querySelector(".menu-btn");

navButton.addEventListener("click", () => {
  let app = document.querySelector(".app-cont");
  let navbar = document.querySelector(".nav");
  navbar.classList.add("z-10");
  let body = document.getElementsByTagName("body");
  body[0].classList.add("overflow-hidden");
  app.insertAdjacentHTML("beforeend", mobileNav);
  let navTransition = setTimeout(() => {
    app.lastElementChild.style.transform = "translate(0%)";
  }, 1);
  //close button
  app.lastElementChild.children[0].addEventListener("click", () => {
    navbar.classList.remove("z-10");
    body[0].classList.remove("overflow-hidden");
    app.lastElementChild.style.transform = "translate(100%)";
    app.lastElementChild.addEventListener("transitionend", () => {
      clearInterval(navTransition);
      app.lastElementChild.remove();
    });
  });

  let mobileNavLi = Array.from(app.lastElementChild.children[1].children);
  mobileNavLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("data-section-type"));
      let scrollTo = document.querySelector(
        `.${e.target.getAttribute("data-section-type").toString()}`
      );
      scrollTo.scrollIntoView();

      body[0].classList.remove("overflow-hidden");
      app.lastElementChild.style.transform = "translate(100%)";
      app.lastElementChild.addEventListener("transitionend", () => {
        clearInterval(navTransition);
        app.lastElementChild.remove();
      });
    });
  });
});

let desktopNav = Array.from(document.querySelector(".desktop-nav").children);
desktopNav.forEach((link) => {
  link.children[0].addEventListener("click", (e) => {
    let scrollTo = document.querySelector(
      `.${e.target.getAttribute("data-section-type").toString()}`
    );
    scrollTo.scrollIntoView();
  });
});
