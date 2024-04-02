//Tests for equality and inequality with strings
console.log('Equality test');
console.log('Equality ', "Apple" === "Apple");
console.log('Equality test');
console.log("Equality ","Apple" as string != "Orange");
//Tests using the lower case function

console.log("lower case function test ", "WHITE".toLowerCase() == "white")
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Numerical tests involving equality and inequality
console.log("Equality test with numbers: ", 32 === 32);

console.log("Equality test with numbers: ", (65 as number)  != 76);

//greater than and less than

console.log("number test: greater than ", 10 > 5);

console.log("number test:less than ", 5 < 10);

//greater than or equal to, and less than

console.log("number test: greater than or equal to", 10 >= 10);

console.log("number test:and less than ", 5 <= 10);

console.log("&& operator test :", 5===5 && 10>5);

console.log("OR operator test :", 5===5 || 10<5);
//Test whether an item is in a array


const fruits : string[] = ['Apple','Grapes'];
console.log('Test "Apple',fruits.includes("Apple"));
//Test whether an item is not in a array
console.log('testing "pineapple" is not in array',fruits.includes("PineApple"));









