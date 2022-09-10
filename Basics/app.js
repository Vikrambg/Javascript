console.log(typeof "Mark is older than john")


/**
 * Operator Precedence
 * 
 */

/**
 * if/else statement
 */

var firstName = "John";
var civilStatus = 'Single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {

}

/**
 * Boolean logic
 */

/**
 * Ternary operator and switch statements
 * 
 */

var firstName = 'Johne';
var age = 28;
age >= 18 ? console.log(firstName + 'Drink beer!') : console.log(firstName + 'Drink Juice');

var drink = age >= 18 ? 'Beer!' : 'Juice!';

var job = 'teacher';

switch (job)  {
    case 'teacher':
        console.log(firstName + ' teaches how to code');
        break;
    case 'driver':
        console.log(firstName + 'drive cab on uber');
        break;
    case 'designer':
        console.log(firstName + 'design software!');
        break;
    default:
        console.log(firstName + 'doing something else.')
}


/**
 * function declartion and function statement and function expressions
 * 
 */

var massMark = 78; //kgs
var heightMark = 1.4; //meters

var massJhon = 60;
var heightJhon = 1.1;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJhon = massJhon / (heightJhon * heightJhon);

var markHigherBMI = BMIMark > BMIJhon;

console.log('Is Mark\'s BMI is higher than Jhon\'s?' + markHigherBMI);

