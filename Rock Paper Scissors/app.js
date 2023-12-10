let usrScore = 0;
let compScore = 0;
let choices = document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let userScore=document.querySelector('#user-score');
let computerScore=document.querySelector('#comp-score');

// Genrating User Choices;
choices.forEach((btn) => {

  btn.addEventListener('click', () => {
    let userChoice=btn.getAttribute('id');
   
    buildLogic(userChoice,computerChoices);
    

  })
})
// console.log('########################');
// Generating Computer Choices Using random method!;
let options = ['rock', 'paper', 'scissors'];
let comIdx = Math.floor(Math.random() * 3)
let computerChoices = options[comIdx];
console.log(computerChoices);
// Creating Play Game function!;

// Creating Game Logic;
let buildLogic=(userChoice,computerChoices)=>{

  
  if (userChoice == computerChoices) {
   msg.innerText="The Game was draw";
   msg.style.backgroundColor='grey';
  }
  else if (userChoice == 'rock' && computerChoices == 'scissors') {
    usrScore++;
    userScore.innerText=usrScore;
    msg.innerText="You Win";
    msg.style.backgroundColor='green';
  }
  else if (userChoice == 'paper' && computerChoices == 'rock') {
    usrScore++;
    userScore.innerText=usrScore;
    msg.innerText="You Win";
    msg.style.backgroundColor='green';
  }
  else if (userChoice == 'scissors' && computerChoices == 'paper') {
    usrScore++;
    userScore.innerText=usrScore;
    msg.innerText="You Win";
    msg.style.backgroundColor='green';
   
  }
  else {
    msg.innerText="Computer Win";
    msg.style.backgroundColor='red';
    compScore++;
    computerScore.innerText=compScore;
    
  }
}
