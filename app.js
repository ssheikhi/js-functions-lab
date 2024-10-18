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

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (name, domain) => `${name}@${domain}`

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser =(name, time) => `Good ${time} ${name}!`

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Result:', greetUser("Sam", "afternoon"));
console.log('Exercise 5 Result:', greetUser("Sam", "evening"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(number1, number2, number3){
    let max = number1;
    if (number2 > max ) {
        max = number2;    
    }
    if (number3 > max) {
        max = number3
    } 
    return max;
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => billAmount * tipPercentage * 0.01;

console.log('Exercise 7 Result:', calculateTip(80, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
function convertTemperature(temperature, scale){
    let scaleToLowerCase = scale.toLowerCase();
    if ( scaleToLowerCase === 'c') {
        return (temperature * 9/5) + 32;       
    }

    return (temperature - 32) * 5/9;
}

console.log('Exercise 8 Result:', convertTemperature(25, "C"));
console.log('Exercise 8 Result:', convertTemperature(77, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(number1, number2, operation){
    let operationToLowerCase = String(operation).toLowerCase();

    if (operationToLowerCase === 'add') {
         return number1 + number2;
    }
    else if (operationToLowerCase === 'subtract') {
        return number1 - number2;
    }
    else if (operationToLowerCase === 'multiply') {
        return number1 * number2;
    }
    else if (operationToLowerCase === 'divide'){
        return number1 / number2;
    }
    else {
        return `The operation - ${operationToLowerCase} - is not valid!`
    }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "blabla"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(gradeOfTypeScore) {
    let gradeOfTypeLetter;
    
    if (gradeOfTypeScore >= 90 && gradeOfTypeScore <= 100) {
        gradeOfTypeLetter = "A";
    } else if (gradeOfTypeScore >= 80 && gradeOfTypeScore <= 89) {
        gradeOfTypeLetter = "B";
    } else if (gradeOfTypeScore >= 70 && gradeOfTypeScore <= 79) {
        gradeOfTypeLetter = "C";
    } else if (gradeOfTypeScore >= 60 && gradeOfTypeScore <= 69) {
        gradeOfTypeLetter = "D";
    } else {
        gradeOfTypeLetter = 'F';
    }

    return gradeOfTypeLetter;
}

console.log('Exercise 10 Result:', calculateGrade(75));


