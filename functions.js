"use strict"

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

console.log(sayHello('codeup'));
function sayHello(name){
    let message = "Hello " + name + "!";
    return message;

}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

    let helloMessage = sayHello("Michael");
console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "John";
let helloMessage2 = sayHello(myName);
console.log(helloMessage2);



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */




let tipAnswer = calculateTip(1412,17.36);
 console.log(tipAnswer);
function calculateTip(total, tip) {
    console.log("Running calculateTip()")
    console.log("The total of the bill is " + total)
    console.log("The tip entered is " + tip)
    let tipFormatted = tip / 100;
    console.log(tipFormatted)
    tipFormatted = parseFloat(tipFormatted);
    console.log("Turning the tipFormatted into a number")
    console.log("tipFormatted")
    let answer = parseFloat(total * tipFormatted).toFixed(2);
    console.log("The calculated tip is : " + answer);
    return parseFloat(answer);
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let billTotal= prompt("What is the total of the bill?");
let tipPercentage = prompt("What percentage would you like to tip?");
let tipUserAnswer = calculateTip(billTotal, tipPercentage);
alert("The calculated tip is " + tipUserAnswer.toFixed(2));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

let originalPrice = 100;
let discountPercent = 20;
let appliedDiscount = applyDiscount(originalPrice, discountPercent);
console.log( "---  We are about to apply " + discountPercent + "% discount to original price of " + originalPrice + " ------");
function applyDiscount(price, discount){
    let discountFormatted = discount/100;
    let result= (1 - discountFormatted) * price ;
    return result.toFixed(2);
}

console.log(applyDiscount(500, 20));




//template literals- simplification method for concantination

//* const sayHello = (name) => {
    //let message = "Hello, " + name + + "!";
    //let message =`Hello,
    //${name}!`
    //return message;


// "use strict"
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// console.log(sayHello('codeup'));
// function sayHello(name){
//     let message= "Hello " + name + "!";
//     return message;
//
// }
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
//     let helloMessage = sayHello("Michael");
// console.log(helloMessage)
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// let myName = "John";
// let helloMessage2 = sayHello(myName);
// console.log(helloMessage2);
//
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
//
//
//
// let tipAnswer = calculateTip(1412,17.36);
// console.log(tipAnswer);
// function calculateTip(total, tip) {
//     console.log("Running calculateTip()")
//     console.log("The total of the bill is " + total)
//     console.log("The tip entered is " + tip)
//     let tipFormatted = tip / 100;
//     console.log(tipFormatted)
//     tipFormatted = parseFloat(tipFormatted);
//     console.log("Turning the tipFormatted into a number")
//     console.log("tipFormatted")
//     let answer = parseFloat(total * tipFormatted).toFixed(2);
//     console.log("The calculated tip is : " + answer);
//     return parseFloat(answer);
// }
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
// let billTotal= prompt("What is the total of the bill?");
// let tipPercentage = prompt("What percentage would you like to tip?");
// let tipUserAnswer = calculateTip(billTotal, tipPercentage);
// alert("The calculated tip is " + tipUserAnswer.toFixed(2));
//
//


console.log("------ APPLY A DISCOUNT AND PERCENTAGE ------")
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// let originalPrice = 100;
// let discountPercent = 20;
// let appliedDiscount = applyDiscount(originalPrice, discountPercent);
// console.log( "We are about to apply " + discountPercent + "% discount to original price of " + originalPrice );
// function applyDiscount(price, discount){
//     let discountFormatted = discount/100;
//     let result= (1 - discountFormatted) * price ;
//     return result.toFixed(2);
// }





//template literals- simplification method for concantination

//* const sayHello = (name) => {
//let message = "Hello, " + name + + "!";
//let message =`Hello,
//${name}!`
//return message;



//

console.log("---- RETURN LAST TWO CHARACTERS EXERCISE ------")
// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.

function returnLastTwoChars(str){
    const last2 = str.slice(-2);
    console.log(last2);
}
returnLastTwoChars("cat") ;// returns ‘at’
returnLastTwoChars("hello") ;// returns ‘lo’
returnLastTwoChars("hi") ;// returns ‘hi’



//EXTRA CHALLENGE

console.log("------ RETURN LAST CHARS REVERSED EXERCISE ------")



/* Create a function, returnLastCharsReversed that takes in two arguments:
    1. a string of characters
2. an integer that represents how many characters should be returned
The function should return a string of characters, equal to the number specified
by the second argument, in reverse order. If 0 is passed as a second argument,
return an empty string. Assume only valid inputs and that the second argument
will NOT exceed the length of the input string.
    Examples:
returnLastCharsReversed(‘cat’, 0) // returns ‘’
returnLastCharsReversed(‘cat’, 1) // returns ‘t’
returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’
*/

function returnLastCharsReversed(str, noOfChars){
    return str.split('').reverse().slice(0, noOfChars).join('');
}

console.log(returnLastCharsReversed("cat", 0)) // returns ‘’
console.log(returnLastCharsReversed("cat", 1)) // returns ‘t’
console.log(returnLastCharsReversed("cat", 2)) // returns ‘ta’
console.log(returnLastCharsReversed("cat", 3)) // returns ‘tac’
console.log(returnLastCharsReversed("codeup", 1)) // returns ‘p’
console.log(returnLastCharsReversed("codeup", 3)) // returns ‘pue’
console.log(returnLastCharsReversed("codeup", 4)) // returns ‘pued’





console.log("------ iBeforeE Example --------")

/** Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
iBeforeE(‘ei’) // returns ‘ie’
iBeforeE(‘height’) // returns ‘hieght’
iBeforeE(‘heist’) // returns ‘hiest’
iBeforeE(‘their’) // returns ‘thier’
iBeforeE(‘theirtheir’) // returns ‘thierthier’ */


const iBeforeE = string => string.split("ei").join("ie");


console.log(iBeforeE("ei"));
console.log(iBeforeE("height"));
console.log(iBeforeE("heist"));
console.log(iBeforeE("their"));
console.log(iBeforeE("theirtheir"));