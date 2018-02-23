function Letter(ent) { // CONSTRUCTOR
    this.ent = ent; // store letter entered
    this.guessed = false; // is letter guessed?
    this.toString = function () { // javaScript will call the function automatically whenever casting that object to a string (
        if (this.guessed) {
            return this.ent;
        }
        return "_";
    }
    this.isMatch = function (ent) {
        if (this.ent === ent) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}
module.exports = Letter;