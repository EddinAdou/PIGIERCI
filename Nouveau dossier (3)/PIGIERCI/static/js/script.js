const header = document.getElementById("header");
const headerContent = document.getElementsByClassName("text-present")[0];
const btnTop = document.querySelector(".go-top");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-items-link");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 350) {
    header.classList.add("fixed");
    header.style.backgroundColor = "#fff";
    if (headerContent) headerContent.style.padding = "14% 15%";
  } else if (window.scrollY == 0) {
    header.classList.remove("fixed");
    header.style.backgroundColor = "transparent";
    if (headerContent) headerContent.style.padding = "13% 15%";
  }
  if (window.scrollY >= 500) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

// Click outside the menu box
$(document).mouseup((e) => {
  const container = $(".menu")

  if (!$(container).is(e.target) && $(container).has(e.target).length === 0 && menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("hidden");
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

// Actived links
const navLinks = [...document.getElementsByClassName('click-link')];
window.addEventListener('load', () => {
  let pathname = window.location.pathname;
  for (let link of navLinks) {
    let linkHref = new URL(link).pathname
    if (linkHref === pathname) {
      link.className += " active";
    }
  }
})

// Box infos
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

if (video) {
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
    if (video.paused || video.ended) {
      playButton.style.display = "none";
      pauseButton.style.display = "flex";
    } else {
      playButton.style.display = "flex";
      pauseButton.style.display = "none";
    }
  }

  updatePlayButton();
}
