/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript program is a foundation for building a Contacts list. Each contact's details are saved as
an object's attributes and are later displayed when the list() function is called. You can also search for 
a specific contact in the list by passing their name as an argument to the search() function. 

Fundamental introductory concepts such control flow, functions and the use of JavaScript objects come 
together to achieve the functionality. 
**********************************************************************************************************/


var friends = new Object();

friends.bob = new Object();
friends.mack = new Object();

friends.bob.firstName = "Bob"
friends.bob.lastName = "Gates";
friends.bob.number = "038238398";
friends.bob.address = [2, "InMyDrive Way", "USA" ];

friends.mack.firstName = "Captain Mack";
friends.mack.lastName = "Jobs";
friends.mack.number = "33736756";
friends.mack.address = [54, "LovingJS Road", "Creativity", 2780];

var list = function (friends) {
  for (var i in friends) {
   console.log(i);
  }
};

var search = function (name) {
        for (var j in friends) {
         if (name === friends[j].firstName) {
         console.log(friends[j]); }
         else {console.log("No match");}
         return friends[j];
        };

};

list(friends);

search("Captain Mack");
