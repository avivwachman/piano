window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      //createBubble(index);
    });
  });
});

const cursor = document.querySelector(".cursor");
const title = document.querySelector(".title");
const para = document.querySelector(".para");
const bet = document.querySelector(".bet");
const black = document.querySelectorAll(".black");
const white = document.querySelectorAll(".white");
const padsAll = document.querySelector(".pads");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("click");

  setTimeout(() => {
    cursor.classList.remove("click");
  }, 500);
});

black.forEach((one) => {
  one.addEventListener("mouseover", () => {
    cursor.classList.add("turn-white");
  });

  one.addEventListener("mouseleave", () => {
    cursor.classList.remove("turn-white");
  });
});

white.forEach((one) => {
  one.addEventListener("mouseover", () => {
    cursor.classList.add("turn-black");
  });

  one.addEventListener("mouseleave", () => {
    cursor.classList.remove("turn-black");
  });
});
//h
title.addEventListener("mouseover", () => {
  cursor.classList.add("turn-white--text");
});

title.addEventListener("mouseleave", () => {
  cursor.classList.remove("turn-white--text");
});

para.addEventListener("mouseover", () => {
  cursor.classList.add("turn-white--text");
});

para.addEventListener("mouseleave", () => {
  cursor.classList.remove("turn-white--text");
});

bet.addEventListener("mouseover", () => {
  cursor.classList.add("turn-white--text");
});

bet.addEventListener("mouseleave", () => {
  cursor.classList.remove("turn-white--text");
});

// padsAll.addEventListener("mouseover", () => {
//   cursor.classList.add("parade");

// });

// padsAll.addEventListener("mouseleave", () => {
//   cursor.classList.remove("parade");
// });
