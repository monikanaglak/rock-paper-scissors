const gameGrid = document.querySelector('.game')
let user = document.createElement('div');
let computer = document.createElement('div');
let userChoice = document.createElement('p');
let computerChoiceDisplay = document.createElement('p');
/*******user informations********************************************************************** */

user.classList.add('user-box');
user.textContent = 'User'
userChoice.textContent ="test";

gameGrid.appendChild(user)


/*************************computer box******************************************************** */
computer.innerHTML = 'computer'
computer.classList.add('computer')
computer.textContent = 'Computer';
gameGrid.appendChild(computer)
const choice = ['paper','rock','scissors'];

function clicking(e){
    let clickedThing = e.target.id
    userChoice.innerHTML = clickedThing;
    user.appendChild(userChoice)
    computerChoosing(choice)
}
for(let i=0;i<choice.length; i++){
    const button = document.createElement('button');
    button.classList.add('btn')
    button.id = choice[i];
    button.innerHTML = choice[i];
    button.addEventListener('click', clicking)
    gameGrid.appendChild(button)
}
function computerChoosing(choice){
    computerChoice.textContent = choice[Math.floor(choice.length*Math.random())];
    computer.appendChild(computerChoice)
    console.log(computerChoice.textContent)
    
}