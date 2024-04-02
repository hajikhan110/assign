/*
Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.


*/
function make_shirt(value1, value2) {
    console.log("\nI'm going to make a " + value1 + " t-shirt.");
    console.log("'It will say  , '" + value2 + " t-shirt.");
}
var v1 = "Large";
var v2 = "I love TypeScript.";
console.log(make_shirt(v1, v2));
v1 = "Medium";
console.log(make_shirt(v1, v2));
v1 = "Short";
v2 = "I love Android";
console.log(make_shirt(v1, v2));
