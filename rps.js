//rock paper scissors
const getUserChoice = function (userInput) {
    userInput=userInput.toLowerCase();
  
    // get correct input 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput; 
      if (userInput === 'bomb') {
        return 'You Won!'
      }
      }
      
      else {
        return console.log('Error message');
      }
  }
  const getComputerChoice= function(randomNumber) {
    randomNumber = Math.floor(Math.random()*3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'; 
      break;
  }
  }
  
  //determine winner
  const determineWinner = function (userChoice, computerChoice) {
  
    //tie
    if (userChoice === computerChoice) {
         return "Tie!";
    }
  
    // user rock and computer paper
    if (userChoice=== 'rock') {
      if (computerChoice === 'paper'); 
       return 'The computer won!';
  
      }else {
        return 'You won!';
    }
  
  
  if (userChoice=== 'paper') {
      if (computerChoice === 'scissors'); 
       return 'The computer won!';
  
      }else {
        return 'You won!';
    }
  
  if (userChoice=== 'scissors') {
      if (computerChoice === 'rock'); 
       return 'The computer won!';
  
      }else {
        return 'You won!';
    }
  
     }
  
  
  const playGame = function () {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log ("You threw " + userChoice);
    console.log("The computer threw "+ computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  };
  
  playGame();