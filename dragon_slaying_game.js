/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript game uses the power of random number outcomes to determine whether or not you get to
slay the dragon in a given round or whether the dragon turns you into his BBQ! The fun is in the fact
that you never know what the outcome will be in any given round. Run the app and get some randomness
in your life.

Concepts such as conditional logic and math libraries come together to create this simplistic but fun
little game. 
**********************************************************************************************************/


var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;


while (slaying) {
    
    if (youHit) {
        console.log("Congrats, you hit the fierce dragon!");
        
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("FINISH HIM! You slew the lowly dragon!");   
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);   
        }
    } else {
        console.log("Oh darn, the dragon has turned you into BBQ!");
    }
    

slaying = false;

}