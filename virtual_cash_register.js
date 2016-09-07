/*********************************************************************************************************
Author: Nyasha Pride Masamba

Based on the lessons from Codecademy at https://www.codecademy.com/learn/javascript

This JavaScript program is a virtual cash register which you can use during your summer job during those
pesky times when the supermarket's main cash register suddenly stops working. To be used as a temporary
measure only, or until the head office sends support staff! The cash register has the following functionality:
- An object called cashRegister which has attributes such as total to track the running total
- Helper methods to find previous transaction amounts and to scan the items in shopping basket and quantities
- A method to void the last transaction, in case the last transaction was done in error
- A method to apply staff discounts, along with StaffMember objects with differing levels of discounts

Feel free to change the data to suit your situation and be sure to extend the functionality to do even more
fun stuff like accepting online orders.  

Fundamental introductory concepts such control flow, conditional logic, arrays, functions and 
object-oriented programming come together to achieve the functionality. 
**********************************************************************************************************/


function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("NPM", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total *= (1-(employee.discountPercent/100));   
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));