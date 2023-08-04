// Set Options
let statue = true;
let backgroundInterval;

// Start Settings Box

// Color Settings Box
let colorLis = Array.from(
  document.querySelectorAll(".setting-content .option-box .colors-list li")
);

let randomButtons = document.querySelectorAll(
  ".setting-box .setting-content .option-box button"
);
// Local Storage

// Check If There Is A Color In Local Storage
if (window.localStorage.getItem("color-option") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color-option")
  );
  // Check For Active Class
  colorLis.forEach((li) => {
    // Remove Active Class
    li.classList.remove("active");

    // Add Class Active With Data-color === Local Storage Value
    if (li.dataset.color === window.localStorage.getItem("color-option")) {
      // Add Active Class
      li.classList.add("active");
    }
  });
}
// Check

if (window.localStorage.getItem("randomBackground") !== null) {
  if (window.localStorage.getItem("randomBackground") === "true") {
    statue = true;
  } else {
    statue = false;
  }

  // Remove Active Class
  randomButtons.forEach((button) => {
    button.classList.remove("active");
    if (window.localStorage.getItem("randomBackground") === "true") {
      document.querySelector("button.yes").classList.add("active");
    } else {
      document.querySelector("button.no").classList.add("active");
    }
  });
}

// Selecting Elements
let gear = document.querySelector(".setting-box .toggle-setting");
let settingBox = document.querySelector(".setting-box");

// On Clicking Gear
gear.addEventListener("click", (e) => {
  // Toggle CLass Spin To Gear
  document
    .querySelector(".setting-box .toggle-setting i")
    .classList.toggle("fa-fade");
  // Toggle Class Opened From Setting Box
  settingBox.classList.toggle("opened");
});

colorLis.forEach((li) => {
  // Create An Background Color For Li Depending On Dataset Color
  li.style.backgroundColor = li.dataset.color;

  // On Clicking Lis
  li.onclick = (e) => {
    // Select Root Element And Change It's Color
    document.documentElement.style.setProperty(
      "--main-color",
      li.dataset.color
    );
    // Set Color On Local Storage
    window.localStorage.setItem("color-option", li.dataset.color);
    // Loop On Active Class
    colorLis.forEach((li) => {
      // Remove Active Class
      li.classList.remove("active");

      // Add Active Class To Selected Li
      e.currentTarget.classList.add("active");
    });
  };
});

// Loop On Random Background Buttons

// Loop On All Buttons
randomButtons.forEach((btn) => {
  // on Clicking Button
  btn.addEventListener("click", (e) => {
    randomButtons.forEach((btn) => {
      // Remove Active Class From All Buttons
      btn.classList.remove("active");
    });

    // Add Active Class To Clicked Button
    e.currentTarget.classList.add("active");
    if (e.currentTarget.classList.contains("yes")) {
      statue = true;
      ChangeImage();
      window.localStorage.setItem("randomBackground", true);
    } else {
      statue = false;
      clearInterval(backgroundInterval);
      window.localStorage.setItem("randomBackground", false);
    }
  });
});

// End Settings Box

// Start Generate Random Background Images

// Select Landing Element
let landingElement = document.querySelector(".landing-page");
// Create Landing Imgs Array
let imgsList = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
];

// Start Generate Random Background Images

function ChangeImage() {
  if (statue === true) {
    backgroundInterval = setInterval(() => {
      // Generate Random Background Indexs
      let randomIndex = Math.round(Math.random() * imgsList.length);

      // Generate Random Index
      landingElement.style.backgroundImage = `url(./imgs/${imgsList[randomIndex]})`;
    }, 3000);
  }
}
ChangeImage();

// Loop On Links And Active Class
let lis = document.querySelectorAll("ul.list li a");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

