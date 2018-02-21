function Letter(char) { // constructors get a capital letter - (L) in this case
    this.char = char; // String to store character
    this.guessed = false; // Boolean to store whether the letter has been guessed 
    this.toString = function () { // toString()Converts a number to a string -- Converting char/num/binary
        if (this.guessed) { // if guessed letter is true...
            return this.char; // Returns the underlying character if the letter has been guessed
        }
        return "_"; // if not, then return this 
    }
    this.isMatch = function(char) {  // << function takes char as an arg and checks against underlying character
    /* ^^ If the string matches the expression, it will return an Array containing the 
    entire matched string as the first element, followed by any results captured in parentheses. */
        if (this.char === char)
        { 
            this.guessed = true;
            return true;
        }
        return false;
    }
   }
   module.exports = Letter;
