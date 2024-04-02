"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
T-Shirt: Write a function called make_shirt() that accepts a
size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message
printed on it. Call the function.




*/
/*
function make_shirt(a: String, b: string) {

 console.log("\nI'm going to make a " + size + " t-shirt.")
    console.log('It will say, "' + message + '"')

 // return a * b;
}

console.log(make_shirt("small","do execrsises"))
*/
var inquirer_1 = require("inquirer");
// Whole-script strict mode syntax
"use strict";
var answer = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name'
    },
    {
        type: 'input',
        name: 'age'
    }
]);
console.log(answer.age);
