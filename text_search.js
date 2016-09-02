/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript text search algorithm checks a block of text for a specific word, which in this case is my 
name, Nyasha. Specifically, it will check the text for the first letter of my name, then push (add) the 
number of characters equal to the name's length to an array. By inspecting the array, I was able to 
see if my name was mentioned! Feel free to play around with the input text and to change the myName variable 
to your name and run the search algorithm.

Several introductory fundamental concepts such as loops, arrays and conditional logic are utilised to 
implement the algorithm.
**********************************************************************************************************/




var text = "text in a string that Nyasha does not necessarily / mean anything but is meant to be for Nyasha Nyasha mostly decoration / purposes but also to be Nyasha searched Nyasha by this algorithm I / will be Nyasha writing in a mo.";

var myName = "Nyasha";
var hits = [];

for (var i=0; i < text.length; i++) {
    if (text[i]=== "N") {
        for (var j=1; j < (myName.length + 1); j++) {
            hits.push(myName[j-1]);
        }
    }
}

if (hits.length===0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);   
}