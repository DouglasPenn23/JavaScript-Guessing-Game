// Starting the Game
alert("Welcome to the Guessing Game!")

//Store User Input
let userInput
const winningGuess= "7"
let youWon = false;
let numberOfTries= 0;

// Here we have a function asking a user for input
// => is shorthand to say you're making a function

const askUserForInput= () =>{
    return prompt("Give me your best guess!")
}

// While you have not won & number of tries is less than 3
// create a variable called userInput and call the function to ask the user for input

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