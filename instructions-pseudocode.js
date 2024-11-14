// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.
// Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
// In this project, think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects. Take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
// If you’re having trouble, Building a house from the inside out is a great article that lays out a highly applicable example both of how you might approach tackling this project as well as how you might organize and structure your code.
// Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties. Try to avoid thinking about the DOM and your HTML/CSS until your game is working. Don’t worry about taking user input at this point either. You can call your functions and pass arguments to them to play the game yourself and check if everything is working as intended.
// Once you have a working console game, create an object that will handle the display/DOM logic. Write a function that will render the contents of the gameboard array to the webpage (for now, you can always just fill the gameboard array with "X"s and "O"s just to see what’s going on).
// Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements (e.g. letting players click on a board square to place their marker). Don’t forget the logic that keeps players from playing in spots that are already taken!
// Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!

/*
INIT the tic-tac-toe board
INIT an array with 9 values containing the squares of the board
INIT a player creation object with names and signs
INIT two players based on the object and give them X and O signs
COMPUTE a random number to choose which player goes first
READ where the player played
PRINT inside the array a value representing the player move
IF three of the same player moves are in a line THEN
    COMPUTE
*/