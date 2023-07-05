const gameGrid = document.querySelector(".game");
let user = document.createElement("div");
let userChoice = document.createElement("p");
let userCompteur = document.createElement("p");
let userCompteurDiplay = document.createElement("span");
let computerCompteurDiplay = document.createElement("span");
let computer = document.createElement("div");
let computerChoice = document.createElement("p");
let computerCompteur = document.createElement("p");
let resultDisplay = document.querySelector(".result");
let gameOver = document.querySelector(".gameover");

/*******user informations***********************************************************************/

user.classList.add("user-box");
user.textContent = "User";
userCompteur.textContent = "counter";
userCompteurDiplay.textContent = "0";
userCompteur.appendChild(userCompteurDiplay);
user.appendChild(userCompteur);
gameGrid.appendChild(user);

/*************************computer box*********************************************************/
computer.innerHTML = "Computer";
computer.classList.add("computer");
computer.textContent = "Computer";

computerCompteur.textContent = "counter";
computerCompteurDiplay.textContent = "0";
computerCompteur.appendChild(computerCompteurDiplay);
computer.appendChild(computerChoice);
computer.appendChild(computerCompteur);

gameGrid.appendChild(computer);
/*************************compteur***********************************************************/
/************array of choice*******************************************************************/
const choice = ["paper", "rock", "scissors"];

function clicking(e) {
  let clickedThing = e.target.id;
  resultDisplay.innerHTML = "";
  userChoice.innerHTML = clickedThing;
  computerChoice.innerHTML = choice[Math.floor(choice.length * Math.random())];
  user.appendChild(userChoice);
  computer.appendChild(computerChoice);
  getResult(userChoice, computerChoice);
}
/**************************making buttons*******************************************************/
for (let i = 0; i < choice.length; i++) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.id = choice[i];
  button.innerHTML = choice[i];
  button.addEventListener("click", clicking);
  gameGrid.appendChild(button);
}

/******************************************getting to know who won****************************** */
function getResult(userChoice, computerChoice) {
  let userDisplay = userChoice.innerHTML;
  let computerDisplay = computerChoice.innerHTML;
  switch (userDisplay + computerDisplay) {
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
  userCompteurDiplay.textContent++;
  if (userCompteurDiplay.innerHTML == 3) {
    gameOver.innerHTML = "Game over";
  }
}
function computerwon() {
  resultDisplay.innerHTML = "Computer Won";
  computerCompteurDiplay.textContent++;
  console.log(computerCompteurDiplay.textContent);
  if (computerCompteurDiplay.innerHTML == 3) {
    gameOver.innerHTML = "Game over";
  }
}
function egalite() {
  resultDisplay.innerHTML = "nobody won";
}
