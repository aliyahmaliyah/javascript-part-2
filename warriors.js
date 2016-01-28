function fight(other) {
    console.log(this.name + " rushes to the arena with " + other.name)
}
function randomPower() {
    var power = Math.floor((Math.random)*100+1);
    return power;
    
}
function faceoff(other) {
    if (this.power > other.power) {
        console.log("Whoa!" + " " + this.name + " just smoked you, " + other.name + "!");
    }
    else if (this.power < other.power) {
        console.log("You really screwed the pooch on this one, " + this.name + ".");
    }
}
function Warrior(name,gender) {
        this.name = name;
        this.gender = gender;
        this.level = 1;
        this.weapon = "Wooden Sword";
        this.power = Math.floor(Math.random()*100+1);
        this.fight = fight;
        this.faceoff = faceoff;
    }
var warrior1 = new Warrior("aliyah", "F");
var warrior2 = new Warrior("Sonic", "M");
var warrior3 = new Warrior("mom", "F");
warrior1.fight(warrior2);
warrior1.faceoff(warrior3);
