import mobileNav from "./mobileNav.js";

let navButton = document.querySelector(".menu-btn");
let app = document.querySelector(".app-cont");
let navbar = document.querySelector(".nav");
let body = document.getElementsByTagName("body");

function insertNavElement(navbarElement, bodyElement, appContElement) {
	navbarElement.classList.add("z-10");
	bodyElement.classList.add("overflow-hidden");
	appContElement.insertAdjacentHTML("beforeend", mobileNav);
}

function animateInsertedNav() {
	let navTransition = setTimeout(() => {
		app.lastElementChild.style.transform = "translate(0%)";
	}, 1);

	return navTransition;
}

function removeInsertedNav(bodyElement, appContElement, navTransition) {
	bodyElement.classList.remove("overflow-hidden");
	appContElement.lastElementChild.style.transform = "translate(100%)";
	appContElement.lastElementChild.addEventListener("transitionend", () => {
		clearInterval(navTransition);
		appContElement.lastElementChild.remove();
	});
}

function scrollToPageSection(targetElement) {
	let scrollTo = document.querySelector(`.${targetElement.target.getAttribute("data-section-type").toString()}`);
	scrollTo.scrollIntoView();
}

function disbaleMobileNavAtDesktop() {
	let browserWidth = window.innerWidth;
	let smallDesktopSize = 1280;
	let mobileNav = document.querySelector(".mobileNav");

	if (mobileNav && browserWidth >= smallDesktopSize) {
		mobileNav.remove();
	}
}

window.addEventListener("resize", disbaleMobileNavAtDesktop);
navButton.addEventListener("click", () => {
	insertNavElement(navbar, body[0], app);

	let navTransition = animateInsertedNav();
	let closeMobileNavBtn = app.lastElementChild.children[0];
	closeMobileNavBtn.addEventListener("click", () => {
		removeInsertedNav(body[0], app, navTransition);
	});

	let mobileNavLinks = Array.from(app.lastElementChild.children[1].children);
	mobileNavLinks.forEach((link) => {
		link.addEventListener("click", (targetElement) => {
			scrollToPageSection(targetElement);
			removeInsertedNav(body[0], app, navTransition);
		});
	});
});

let desktopNavLinks = Array.from(document.querySelector(".desktop-nav").children);
desktopNavLinks.forEach((link) => {
	link.children[0].addEventListener("click", (targetElement) => {
		scrollToPageSection(targetElement);
		removeInsertedNav(body[0], app, navTransition);
	});
});
