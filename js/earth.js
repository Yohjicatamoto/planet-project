// Earth,a pop-up message box with fun facts.
// "Show fun facts..." opens fun facts, "Next fact" cycles through 
// "OK", the x button or Escape key closes it

const funFacts = [
  "Earth is the densest planet in the solar system.",
  "Earth is not a perfect sphere. It bulges at the equator because it spins.",
  "Earth travels around the Sun at about 30 km per second",
  "The highest point on Earth is Mount Everest at 8,849 (My home country!!)",
  "Earth's magnetic field protects us from the solar wind, also causes the northern and southern lights.",
  "Earth's spin is very slowly getting slower",
  "Earth is the only planet not named after a Greek or Roman god."
];

let current = 0;

const overlay = document.getElementById("facts-overlay");
const factText = document.getElementById("fact-text");
const factCount = document.getElementById("fact-count");
const openBtn = document.getElementById("open-facts");
const nextBtn = document.getElementById("next-fact");
const okBtn = document.getElementById("close-facts");
const closeX = document.getElementById("close-x");

function showFact() {
  factText.textContent = funFacts[current];
  factCount.textContent = "Fact " + (current + 1) + " of " + funFacts.length;
}

function openDialog() {
  showFact();
  overlay.hidden = false;
  okBtn.focus();
}

function closeDialog() {
  overlay.hidden = true;
  openBtn.focus();
}

function nextFact() {
  // go to the next fact, back to the first one after the last
  current = (current + 1) % funFacts.length;
  showFact();
}

openBtn.addEventListener("click", openDialog);
nextBtn.addEventListener("click", nextFact);
okBtn.addEventListener("click", closeDialog);
closeX.addEventListener("click", closeDialog);
closeX.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    closeDialog();
  }
});

// close with the keyboard
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !overlay.hidden) {
    closeDialog();
  }
});

// clicking the dark area outside also closes it
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    closeDialog();
  }
});
