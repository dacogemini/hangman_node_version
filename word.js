

var Letter = require("./letter.js");

function Word(input) { // << input = the randomly generated word, e.g. bind
    var userChars = []; //<< bind is now here -- An array of new Letter objects
    for (var letter in input) { // **for/in loop** letter = letters in array, [b, i, n, d]
        userChars.push(new Letter(input[letter].toUpperCase()));
       }
    this.word = userChars; // bind is now 'word'
    this.numberCorrect = 0;
    this.showLetters = function () { // returns a string representing the word
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i] + " ";
        }
        console.log(wordString); // wordString = '_'
    }

    this.checkGuess = function (ent) {
        var correct = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].isMatch(ent)) {
                correct = true;
                this.numberCorrect++;
            }
        }
        return correct;
    }
}

module.exports = Word;