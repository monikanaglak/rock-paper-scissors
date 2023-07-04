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
    computerChoice.innerHTML = choice[Math.floor(choice.length*Math.random())];
    computer.appendChild(computerChoice)
    
    
}
/******************************************getting to know who won****************************** */
