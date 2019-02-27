/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this points to an object within its scope, thus this in the Global scope would point to the Window     object

* 2. implicit binding: this points to the object preceding the "dot"

* 3. new binding: used with constructor functions, this points to the object that is called with the        "new" keyword

* 4. Explicit binding: this is connected to an object via the use of ".call()", ".apply()", or ".bind()"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(`To see the entirety of the Window's object look at ${this}:`, this);

// Principle 2

// code example for Implicit Binding

const family = {
    father: "Pop",
    mother: "Momma",
    child: "Lincoln",
    activities: function () {
        return `${this.father} likes to rough house with ${this.child}.`
    }
}

console.log(family.activities());

// Principle 3

// code example for New Binding

function Games(attr) {
    this.name = attr.name;
    this.card = attr.card;
    this.board = attr.board;
    this.active = attr.active;
    this.favorite = function () {
        console.log(`${this.name}'s favorite games are ${this.card}, ${this.board}, and ${this.active}.`);
    }
}

const popsGames = new Games({
    card: "Go-Fish",
    board: "Risk",
    active: "Vollyball",
    name: "Poppi",
})

const momGames = new Games({
    card: "Hearts",
    board: "Candy Land",
    active: "Soccer",
    name: "Mom",
})

popsGames.favorite()
momGames.favorite()

// Principle 4

// code example for Explicit Binding

function kidGames(kG) {
    Games.call(this, kG);
    this.video = kG.video;
}

const LincGames = new kidGames({
    card: "Slap Jack",
    board: "Shoots 'n Ladders",
    active: "Tag",
    video: "Super Mario Cart",
    name: "Lincoln"
})

console.log(LincGames);