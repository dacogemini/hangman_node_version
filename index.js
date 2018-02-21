var Word = require("./word.js");
const readline = require('readline');
const rl = readline.createInterface({ // Turns on the readline module
  input: process.stdin, // Listens for input -- Instance of stream objects
  output: process.stdout // Sends output -- Instance of stream objects
});
var guesses = [];

var list = ["abend","activex","alert","algol", "babel","backend","bool","bind",
"class","closure", "clojure","compile","segfault","servlet","literal","lexicon","zombie","transcompiler","token"];

module.exports = list;

console.log("Welcome to hangman-node-version! All words relate to programming! Have a blast!"); 
console.log("You will have 10 chances to guess a random word.");
console.log("Blank characters show how many letters are in the word.");
console.log("Correct letter guess, it will be made visible.");
console.log("If you guess all the letters you win!");
console.log("You can quit at any time by typing quit");
var secretWord = list[Math.floor(Math.random() * list.length + 1)];
var word = new Word(secretWord);
var chances = 10;
word.showLetters();
var guessString = "";
rl.on("line", (input) => {
    var entry = input.toUpperCase();
    
    if ( entry == "QUIT" || entry == "NO")
    {
        rl.close();    
    }
    else if (entry == "YES"){
        secretWord = list[Math.floor(Math.random() * list.length + 1)];
        word = new Word(secretWord);
        chances = 10;
        guessString = "";
        guesses = [];
    }
    else if (guesses.indexOf(entry) == -1)
    {
        guesses.push(entry);
        guessString += entry + " ";
        if (word.checkGuess(entry) == false)
        {
            console.log("Incorrect, please try again!");
            chances--;
            console.log(`You have ${chances} chances remaining.`);
        }
    }
    else if (guesses.indexOf(entry) != -1)
    {
        console.log("You already guessed that letter!");
    }
    if (word.numberCorrect == word.word.length)
    {
        word.showLetters();
        console.log("Congratulations! You win! Would you like to play again? Type yes or no.");
    }
    else if (chances == 0)
    {
        console.log(`You Lose :( -- The correct word was ${secretWord}`);
        console.log("Would you like to play again? Type yes or no.");
    }
    else
    {
        console.log(`Letters guessed: ${guessString}`);
        word.showLetters();
    }

    
}).on('close', () => {
  console.log('Thank you for playing!');
  process.exit(0);
});
