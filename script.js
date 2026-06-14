const roles = [
    "Computer Science Student",
    "Leader",
    "Problem Solver",
    "Web Developer",
    "Lifelong Learner"
];

let index = 0;

const btn = document.getElementById("identityBtn");
const text = document.getElementById("identityText");

btn.addEventListener("click", () => {
    index = (index + 1) % roles.length;
    text.textContent = roles[index];
});


