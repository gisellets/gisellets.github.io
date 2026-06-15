const roles = [
  "A Computer Science Student",
  "A Lifelong Learner",
  "A Problem Solver",
  "A Leader",
  "A Web Developer",
  "A Coffee Lover"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const display = document.getElementById("type-text");
  if (!display) return;

  let fullText = roles[i];

  if (isDeleting) {
    currentText = fullText.substring(0, j--);
  } else {
    currentText = fullText.substring(0, j++);
  }

  display.textContent = currentText;

  let speed = isDeleting ? 60 : 90;

  if (!isDeleting && currentText === fullText) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    i = (i + 1) % roles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

type();

