const buttons = ["paper", "rock", "scissors"];
const all_buttons = document.querySelectorAll("button");
const user_choice = document.querySelector(".user_choice_display");
const computer_choice = document.querySelector(
  ".computer_choice_display"
);
const result_display = document.querySelector(".game-result");
let start = document.querySelector(".start");
let user_compteur = document.querySelector(".user_compteur");
let computer_compteur = document.querySelector(".computer_compteur");
let test = document.querySelector(".game");
let game_over = document.querySelector(".game-over");
all_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    user_choice.textContent = e.target.id;
    computer_choice.textContent =
      buttons[Math.floor(buttons.length * Math.random())];
    getResult(user_choice, computer_choice);
  });
});

function getResult(user_choice, computer_choice) {
  let user = user_choice.textContent;
  let computer = computer_choice.textContent;
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
  result_display.innerHTML = "User Won";
  user_compteur.textContent++;
  if (user_compteur.innerHTML == 3) {
    console.log("je suis ici + " + user_compteur.innerHTML)
    game_over.innerHTML = "Game over";
    restart_game()
  }
}

function computerwon() {
  result_display.innerHTML = "Computer Won";
  computer_compteur.textContent++;
    if (computer_compteur.innerHTML == 3) {
    game_over.innerHTML = "Game over";
    restart_game()
    }
}
function egalite() {
  result_display.innerHTML = "Nobody won";
}
function restart_game() {
  user_compteur.innerHTML = 0;
  computer_compteur.innerHTML = 0;
  test.classList.add("flex")
    let btn = document.createElement("a");
    btn.href = "../game.html"
    btn.textContent = "play again";
    btn.classList.add("play-again");
    test.appendChild(btn)
  game_over.innerHTML = "Let's try again, three points to won";
}
