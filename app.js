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
console.log('maxOfTwoNumbers: ', maxOfTwoNumbers(2,2));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

*/
function isAdult(age){
    if (age > 0) {
        if (age >= 18 ) {
            return 'Adult';
        }
        return 'Minor';
    }
    return 'The age that you entered is not valid.'

}

console.log('isAdult: ', isAdult(17));
console.log('isAdult: ', isAdult(18));
console.log('isAdult: ', isAdult(21));
console.log('isAdult: ', isAdult(-1));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel (a, e, i, o, u).

Example: isCharAVowel('a') should return true.
*/

function isCharAVowel(char){
    let charToLowerCase = String(char).toLowerCase();
    if (charToLowerCase === 'a' || charToLowerCase === 'e' || charToLowerCase === 'i' || charToLowerCase === 'o' || charToLowerCase === 'u') {
        return true;
    }
    return false;
}

console.log('isCharAVowel: ', isCharAVowel('a'));
console.log('isCharAVowel: ', isCharAVowel('b'));
console.log('isCharAVowel: ', isCharAVowel('A'));