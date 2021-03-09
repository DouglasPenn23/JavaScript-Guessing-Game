// Starting the Game
alert("Welcome to the Guessing Game!")

//Store User Input
let userInput
const winningGuess= "7"
let youWon = false;
let numberOfTries= 0;

const askUserForInput= () =>{
    return prompt("Give me your best guess!")
}

while(!youWon && numberOfTries <3){
    userInput = askUserForInput()


if(userInput === winningGuess){
    alert("You won this game")
    youWon = true;

}
else {
    alert("You've lost")
}
numberOfTries++
console.log(numberOfTries)
}
alert("game over")