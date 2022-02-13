const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

let player = {};

const playGame = () => {
  console.log("lets Play");
  player.start && window.requestAnimationFrame(playGame);
};

const start = () => {
  console.log("start");
  player.start = true;
  window.requestAnimationFrame(playGame);
};

const pressOn = (e) => {
  console.log(e.key + " is pressed");
  keys[e.key] = true;
  console.log(keys);
};

const pressOff = (e) => {
  console.log(e.key + " is released");
  keys[e.key] = false;
  console.log(keys);
};

startScreen.addEventListener("click", start());
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
