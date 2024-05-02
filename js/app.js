
const all_buttons = document.querySelectorAll("button");
const user_choice_display = document.querySelector(".user_choice_display");
const computer_choice_display = document.querySelector(
  ".computer_choice_display"
);
const result_display = document.querySelector(".result");
let user_compteur= document.querySelector(".user_compteur");
let computer_compteur= document.querySelector(".computer_compteur");
let game_over = document.querySelector(".welcome_secondp");
const choice = ["paper", "rock", "scissors"];
const monika = gsap.timeline();


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
let restart_btn = document.querySelector(".choice_restart");

function userwon() {
  result_display.innerHTML = "User Won";
  user_compteur.textContent++;
  
  if (user_compteur.innerHTML == 3) {
    game_over.innerHTML = "Game over";
    let hello = document.querySelector(".hello");
    hello.classList.add("visible")
    monika.to(".hello",{height:700,duration:1,delay:0.2});
  }
}

function computerwon() {
  result_display.innerHTML = "Computer Won";
  computer_compteur.textContent++;
  console.log(computer_compteur.innerHTML)
  if (computer_compteur.innerHTML == 3) {
    game_over.innerHTML = "Game over";
    
    restart_btn.classList.add("visible")
  }
  
}
function egalite() {
  result_display.innerHTML = "Nobody won";
}
function restart_game(){
  user_compteur.innerHTML = 0;
  computer_compteur.innerHTML = 0;
  game_over.innerHTML = "Let's try again, three points to won"
}

