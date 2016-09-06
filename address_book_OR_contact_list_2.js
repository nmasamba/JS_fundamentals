/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript program is a an extension and improvement of the Contacts list (see the other programs in 
this series). Each contact's details are saved as an object's attributes into an associative array. The
details are later displayed when the list() function is called. The list() function iterates through each
object and prints out firstName and lastName concatenated to produce a full name. You can also search for 
a specific contact in the list by passing their lastName as an argument to the search() function. Enhanced
functionality also enables you to add a new friend to the phone book using the add() function - perfect 
for those instances in which we would have made a friend! 

Fundamental introductory concepts such control flow, arrays, functions and object-oriented programming come 
together to achieve the functionality. 
**********************************************************************************************************/


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var arrayItems = contacts.length;
    for (var j=0; j<arrayItems; j++) {
        if (lastName === contacts[j].lastName) {
            printPerson(contacts[j]);
        }
    }
}

function add (firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber
    };
}



add("Nash", "William", "me@Mysite.com", "040904004"); 
list();
