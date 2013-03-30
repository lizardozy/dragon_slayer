//  Dragon Slayer v.∞+1 zetha 
//------------------------------------------------------------------------------------------------------------------------------------

/*--------- Global Variables ----------*/

// The game is on 
var slaying = true;

// Power level of the Dragon
var life = 1000;

// This variable assigns a random number
// 1 or 0. We will use it to check if we 
// hit the dragon
var youHit = Math.random();

// Weapons to attack the dragon
var magic = 20;
var axe = 40;
var sword = 35;
var arrow = 25;

// String to use in message boxes
var weaponString = "";

/*-------------------------------------*/

/*--------- Game Engine ---------------*/

// Ask player to choose a weapon to attack the dragon
var attackPrompt = prompt("choose your weapon to attack the Dragon; (M)age, (W)arrior, (G)uardian, (R)anger");

//Check to see the chosen weapon
if (attackPrompt === "M" || attackPrompt === "m") {
    attackPrompt = magic;
    weaponString = "Magic";
} else if (attackPrompt === "W" || attackPrompt === "w") {
    attackPrompt = axe;
    weaponString = "Axe";
} else if (attackPrompt === "G" || attackPrompt === "g") {
    attackPrompt = sword;
    weaponString = "Sword";
} else if (attackPrompt === "R" || attackPrompt === "r") {
    attackPrompt = arrow;
    weaponString = "Arrow";
}

// The damage we hit to the Dragon
var damageThisRound = Math.floor(Math.random(attackPrompt) * 200 + 1);

// We set the total damage to zero in the beginning
var totalDamage = 0;

/*-------------------------------------*/

/*--------- Game Starts ---------------*/

// As he game goes on..
while (slaying) {

    // If we hit the Dragon
    if (youHit) {
        confirm("You hit the Dragon with " + weaponString + ". " + "Remaining power of Dragon:" + " " + (life -=damageThisRound));
        // We keep the record of our hits
        totalDamage += damageThisRound;

        // Check to see if we managed to give a great deal of damage..
        if (totalDamage >= life) {
            confirm("Another hit with " + weaponString + ". The Dragon screams and sends a fire ball but you managed to dodge it.");
            // ..if so the dragon is dead
            slaying = false;
        // if not we attack again
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    // if we didn't hit and the Dragon still has life 
    } else if (youHit === 0 && life > 0) {
        confirm("You missed - Dragon swings its tail. You managed to protect yourself with the shield but the hit is strong and smashes you to ground. You jump back on your feet and attack again.");
        totalDamage += damageThisRound;

        // if the total damage exceeds the life
        if (totalDamage >= life) {
            confirm("You strike on the Dragon's head wth " + weaponString + " You craked the skull. Blood is dripping.");
            confirm("You slayed the Dragon. The Game is over. Alas, the worst is yet to come..");
            slaying = false;
        // if not we attack again
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
}

/*-------------------------------------*/
//------------------------------------------------------------------------------------------------------------------------------------