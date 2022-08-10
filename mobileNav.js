const mobileNav = `
<div class="mobileNav flex items-center justify-center ">
  <button class="bg-none absolute p-7 top-0 right-0 rotate-90 transition-all duration-300 ease-in-out">
  <img src="./assets/navbutton.png" />
  </button>
    <ul class="flex flex-col gap-10 text-center">
      <li><a href="#skills" data-section-type="skills" class="text-gray-300 text-xl">Skills</a></li>
      <li><a href="#works" data-section-type="works"  class="text-gray-300 text-xl">Works</a></li>
      <li><a href="#contact" data-section-type="contact"  class="text-gray-300 text-xl">Contact</a></li>
      <li>
        <a href="/resume.pdf" download class="border border-green-300 rounded-lg px-12 py-3 text-green-300">Resume</a>
      </li>
    </ul>
</div>`;

export default mobileNav;
