/*Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original
 array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.
*/
var magician = ["eric", "joe", "david"];
var i;
var i2;
var result;
for (var i_1 = 0; i_1 < magician.length; i_1++) {
    result = show_magicians(magician[i_1], i_1);
    console.log("magicia  ".concat(result));
    magician.pop;
    result = make_great(magician[i_1], i_1);
    magician.pop;
    console.log('magicia  : ' + result);
}
magician.pop;
//magician.pop;
function show_magicians(magic, i) {
    return "".concat(magician[i]); //
}
//function
function make_great(magic, i) {
    //magician[i].pop();
    return "".concat(magician[i], " great");
}
var b = [];
b = magician.map(test);
console.log(b);
function test(x) {
    // return 'sssss';
    return "".concat(x, " great");
}
