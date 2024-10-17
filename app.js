/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.
*/

function maxOfTwoNumbers(number1, number2){
    let max = number1;
    if (number2 > number1) {
        max = number2;
    }

    return max;   
}

console.log('maxOfTwoNumbers: ', maxOfTwoNumbers(2,3));
