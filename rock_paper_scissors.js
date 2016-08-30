/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript app is based on the game of rock paper scissors. Rock paper scissors is a classic 2 player game. 
Each player chooses either rock, paper or scissors. The possible outcomes:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.

The JavaScript code will break the game into 3 phases:
a. User makes a choice
b. Computer makes a choice
c. A compare function will determine who wins between the user and the computer.

Several introductory fundamental concepts such as functions, variables and utilising the Math object for 
random numbers, are harnessed to create the game. Try it out!
**********************************************************************************************************/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    while (choice1 === choice2){
        return("The result is a tie!");
        console.log("Make another choice");
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors"){
            return ("rock wins");
        }
        else {return ("paper wins");}
    }
    
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {return ("scissors wins");}
    }
    
    else {
        if (choice2 === "rock") {
            return ("rock wins");   
        }
        else {return ("scissors wins");}
    }
 
};

compare(userChoice, computerChoice);
