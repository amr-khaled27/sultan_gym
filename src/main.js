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

let video = document.querySelector("video");
let videoIcon = document.querySelector(".video-icon");

video.addEventListener("click", () => {
  if (video.classList.contains("playing")) {
    video.classList.remove("playing");
    videoIcon.style.opacity = 1;
    videoIcon.style.pointerEvents = "initial";
    video.pause();
  } else {
    video.classList.add("playing");
    videoIcon.style.opacity = 0;
    videoIcon.style.pointerEvents = "none";
    video.play();
  }
});

videoIcon.onclick = () => {
  if (video.classList.contains("playing")) {
    video.classList.remove("playing");
    videoIcon.style.opacity = 1;
    videoIcon.style.pointerEvents = "initial";
    video.pause();
  } else {
    video.classList.add("playing");
    videoIcon.style.opacity = 0;
    videoIcon.style.pointerEvents = "none";
    video.play();
  }
};

let testmonialButtons = document.querySelectorAll(".testmonial-buttons button");
let texts = document.querySelectorAll(".ttext");
let images = document.querySelectorAll(".person-testmonial img");

testmonialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    testmonialButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");

    images.forEach((image) => {
      if (button.getAttribute("data-btn") === image.getAttribute("data-img")) {
        image.classList.remove("hide");
      } else {
        image.classList.add("hide");
      }
    });
    texts.forEach((text) => {
      if (button.getAttribute("data-btn") === text.getAttribute("data-text")) {
        text.classList.remove("hide");
      } else {
        text.classList.add("hide");
      }
    });
  });
});

let height = document.querySelector("[placeholder='Height in cm']");
let weight = document.querySelector("[placeholder='Weight in kg']");
let calcBtn = document.querySelector(".calculate");
let result = document.querySelector(".bmi-result");
let type = document.querySelector(".bmi-type");
let warning = document.querySelector(".bmi-warning");
let w;
let h;

height.addEventListener("input", () => {
  h = height.value;
});
weight.addEventListener("input", () => {
  w = weight.value;
});

calcBtn.addEventListener("click", () => {
  if (w <= 0 || h <= 0) {
    result.innerHTML = "";
    type.innerHTML = "";
    warning.innerHTML = "Please Provide Valid Weight And Height";
  } else {
    let bmi = ((w / (h * h)) * 10000).toFixed(1);
    if (bmi === "NaN") {
      result.innerHTML = "";
      type.innerHTML = "";
      warning.innerHTML = "Please Provide Valid Weight And Height";
    } else {
      warning.innerHTML = "";
      result.innerHTML = `Your BMI is <span class="bmi-result text-primary">${bmi}</span>`;
      console.log(parseFloat(bmi));
      if (parseFloat(bmi) < 18.5) {
        type.style.color = "rgb(220, 38, 38)";
        type.innerHTML = `<span class="">Underweight</span>`;
      } else if (parseFloat(bmi) >= 18.5 && parseFloat(bmi) < 25) {
        type.style.color = "rgb(22, 164, 74)";
        type.innerHTML = `<span class="">Healthy Weight</span>`;
      } else if (parseFloat(bmi) >= 25 && parseFloat(bmi) < 30) {
        type.style.color = "rgb(250, 204, 21)";
        type.innerHTML = `<span class="">Over Weight</span>`;
      } else {
        type.style.color = "rgb(220, 38, 38)";
        type.innerHTML = `<span class="">Obese</span>`;
      }
    }
  }
});
