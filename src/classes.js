document.querySelectorAll(`[effect="ripple"]`).forEach((el) => {
  el.addEventListener("click", (e) => {
    e = e.touches ? e.touches[0] : e;
    const r = el.getBoundingClientRect(),
      d = 500;
    el.style.cssText = `--s: 0; --o: 1;`;
    el.offsetTop;
    el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
      e.clientX - r.left
    }; --y:${e.clientY - r.top};`;
  });
});

let root = document.querySelector("html");
let btn = document.querySelector(".darkmode-btn");
let icon = document.querySelector(".darkmode-btn i");

if (
  localStorage.darkmode === "on" ||
  (!("darkmode" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  btn.classList.add("on");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  root.classList.add("darkmode");
} else {
  btn.classList.remove("on");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  root.classList.remove("darkmode");
}

btn.onclick = () => {
  if (!btn.classList.contains("on")) {
    btn.classList.add("on");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    root.classList.add("darkmode");
    window.localStorage.setItem("darkmode", "on");
  } else {
    btn.classList.remove("on");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    root.classList.remove("darkmode");
    window.localStorage.setItem("darkmode", "off");
  }
};

let menuBtn = document.querySelector(".menu-btn");
let aside = document.querySelector("aside");
let closeAside = document.querySelector(".close-menu");
let darkBg = document.querySelector(".dark-bg");

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("active")) {
    menuBtn.classList.add("active");
    aside.classList.add("show-menu");
    darkBg.classList.remove("is-off");
  } else {
    menuBtn.classList.remove("active");
    aside.classList.remove("show-menu");
    darkBg.classList.add("is-off");
  }
});

closeAside.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  aside.classList.remove("show-menu");
  darkBg.classList.add("is-off");
});

window.addEventListener("click", (e) => {
  if (!aside.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove("active");
    aside.classList.remove("show-menu");
    darkBg.classList.add("is-off");
  }
});
