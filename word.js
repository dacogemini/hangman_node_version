var Letter = require("./letter.js");
function Word(input) {
    var userChars = []; // An array of new Letter objects

    for (var letter in input) {
        userChars.push(new Letter(input[letter].toUpperCase()));
       }
    this.word = userChars;
    this.numberCorrect = 0;
    this.showLetters = function () {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i] + " ";
        }
        console.log(wordString);
    }

    this.checkGuess = function (char) {
        var correct = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].isMatch(char)) {
                correct = true;
                this.numberCorrect++;
            }
        }
        return correct;
    }
}

module.exports = Word;