var Guest = ['Kareem', 'Raheem'];
for (var i = 0; i < Guest.length; i++) {
    //console.log('I welcome you Sir!' + Guest[i]);
    console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!' + '\n\n');
}
console.log('\n \n');
var absent = 'Kareem';
//et absent : string = 'Raheem';
var newarrival = 'sultan';
Guest[0] = newarrival;
for (var i = 0; i < Guest.length; i++) {
    //console.log('I welcome you Sir!' + Guest[i]);
    console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!' + '\n\n');
}
console.log("Mr. ".concat(absent, " is not coming so we have invited ").concat(newarrival));
//console.log('hjghjgh  ${absent} ');
//const name1 : string = 'John Doe';
//const age1 : number = 20;
// Using template literals for string interpolation
//console.log(`My name is ${name1} and I'm ${age1} years old.`);
