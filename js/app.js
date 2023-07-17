const all_buttons = document.querySelectorAll("button");
const user_choice_display = document.querySelector(".user_choice_display");
const computer_choice_display = document.querySelector(
  ".computer_choice_display"
);
const resultDisplay = document.querySelector(".result");
let user_compteur= document.querySelector(".user_compteur");
let computer_compteur= document.querySelector(".computer_compteur");
let game_over = document.querySelector(".gameover");
const choice = ["paper", "rock", "scissors"];

all_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    user_choice_display.textContent = e.target.id;
    computer_choice_display.textContent =
      choice[Math.floor(choice.length * Math.random())];
    getResult(user_choice_display, computer_choice_display);
  });
});
function getResult(user_choice_display, computer_choice_display) {
  let user = user_choice_display.textContent;
  let computer = computer_choice_display.textContent;
  switch (user + computer) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      userwon();
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      computerwon();
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      egalite();
      break;
  }
}
function userwon() {
  resultDisplay.innerHTML = "User Won";
  user_compteur.textContent++;
  if (user_compteur.innerHTML == 3) {
    game_over.innerHTML = "Game over";
  }
}
function computerwon() {
  resultDisplay.innerHTML = "Computer Won";
  computer_compteur.textContent++;
  if (computer_compteur.innerHTML == 3) {
    game_over.innerHTML = "Game over";
  }
}
function egalite() {
  resultDisplay.innerHTML = "nobody won";
}
