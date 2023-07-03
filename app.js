const gameGrid = document.querySelector('.game')
let user = document.createElement('div');
let computer = document.createElement('div');
let userChoice = document.createElement('p');
let computerChoiceDisplay = document.createElement('p');
let compterComputer = document.createElement('p');
let compterSays = document.createElement('p')
/*******user informations***********************************************************************/

user.classList.add('user-box');
user.textContent = 'User';
gameGrid.appendChild(user);


/*************************computer box*********************************************************/
computer.innerHTML = 'Computer'
computer.classList.add('computer')
computer.textContent = 'Computer';

compterComputer.innerHTML = "counter"+" "+"0";
computer.appendChild(computerChoiceDisplay);
computer.appendChild(compterComputer)

gameGrid.appendChild(computer)
/*************************compteur***********************************************************/
/************array of choice*******************************************************************/
const choice = ['paper','rock','scissors'];

function clicking(e){
    let clickedThing = e.target.id
    userChoice.innerHTML = clickedThing;
    user.appendChild(userChoice)
    computerChoosing(choice)
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
function computerChoosing(choice){
    let computerChoice = choice[Math.floor(choice.length*Math.random())];
    computerChoiceDisplay.innerHTML = computerChoice
    computer.appendChild(computerChoiceDisplay)
    
}
/******************************************getting to know who won****************************** */