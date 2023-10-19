const header = document.getElementById("header");
const btnTop = document.querySelector(".go-top");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-items-link");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 250) {
    header.classList.add("fixed");
    header.style.backgroundColor = "#fff";
  } else if (window.scrollY == 0) {
    header.classList.remove("fixed");
    header.style.backgroundColor = "transparent";
  }
  if (window.scrollY >= 500) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

document.querySelector(".burger-img").addEventListener("click", (e) => {
  menu.classList.add("show");
  menu.classList.remove("hidden");
});

document.querySelector(".cross-img").addEventListener("click", (e) => {
  menu.classList.remove("show");
  menu.classList.add("hidden");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (e) => {
    if (menuLink.classList.contains("unrolled"))
      menuLink.classList.add("unrolled");
    else menuLink.classList.remove("unrolled");
  });
});

// Navigation's buttons
let currentIndex = -550;
const btnLeft = document.querySelector("#left"),
  btnRight = document.querySelector("#right"),
  containers = document.querySelectorAll(".sub-container");

function updateTransform(index) {
  const translateX = -index;
  containers.forEach((cont) => {
    cont.style.transform = `translateX(${translateX}px)`;
  });
}

function incrementIndex() {
  // Incrémente l'indice
  currentIndex = currentIndex >= 395 ? -550 : currentIndex + 315;
  updateTransform(currentIndex);
}

function decrementIndex() {
  // Décrémente l'indice
  currentIndex = currentIndex <= -550 ? 395 : currentIndex - 315;
  updateTransform(currentIndex);
}

if (btnLeft && btnRight) {
  btnLeft.addEventListener("click", decrementIndex);
  btnRight.addEventListener("click", incrementIndex);
}

// actived links
const links = document.querySelectorAll(".menu-items-link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    link.classList.toggle("active");
  });
});

$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
      $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    } else {
      $(".menu").addClass("active");
      $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
  });
});

const boxes = document.getElementsByClassName("--box");

document.querySelectorAll(".data-link-buttons a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetClass = link.getAttribute("class").split(' ')[1];

    Array.from(boxes).forEach((box) => {
      if (box.id === targetClass) {
        box.style.display = "block"; // OK
      } else {
        box.style.display = "none"; // !OK
      }
    });
  });
});

// Video custom player
const video = document.getElementById('present-video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

togglePlay = () => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
  updatePlayButton();
}

playButton.addEventListener('click', togglePlay);
pauseButton.addEventListener('click', togglePlay);

function updatePlayButton() {
  if (video.paused) {
    playButton.style.display = "none";
    pauseButton.style.display = "flex";
  } else {
    playButton.style.display = "flex";
    pauseButton.style.display = "none";
  }
}

updatePlayButton();
