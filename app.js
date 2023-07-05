const gameGrid = document.querySelector('.game')
let user = document.createElement('div');
let userChoice = document.createElement('p');
let userCompteur = document.createElement('p');
let computer = document.createElement('div');
let computerChoice = document.createElement('p');
let computerCompteur = document.createElement('p');


/*******user informations***********************************************************************/

user.classList.add('user-box');
user.textContent = 'User';
userCompteur.innerHTML = "counter" + " 0 "
user.appendChild(userCompteur)
gameGrid.appendChild(user);


/*************************computer box*********************************************************/
computer.innerHTML = 'Computer'
computer.classList.add('computer')
computer.textContent = 'Computer';

computerCompteur.innerHTML = "counter"+" "+"0";
computer.appendChild(computerChoice);
computer.appendChild(computerCompteur)

gameGrid.appendChild(computer)
/*************************compteur***********************************************************/
/************array of choice*******************************************************************/
const choice = ['paper','rock','scissors'];

function clicking(e){
    let clickedThing = e.target.id
    userChoice.innerHTML = clickedThing;
    console.log(clickedThing)
    computerChoice.innerHTML = choice[Math.floor(choice.length*Math.random())];
    user.appendChild(userChoice)
    computer.appendChild(computerChoice)
    console.log(computerChoice)
    getResult(userChoice,computerChoice)
}
/**************************making buttons*******************************************************/
for(let i=0;i<choice.length; i++){
    const button = document.createElement('button');
    button.classList.add('btn')
    button.id = choice[i];
    button.innerHTML = choice[i];
    button.addEventListener('click', clicking)
    gameGrid.appendChild(button)
}


/******************************************getting to know who won****************************** */
function getResult(userChoice,computerChoice){
    console.log(userChoice,computerChoice)
}