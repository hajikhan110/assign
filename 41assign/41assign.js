/*
let city1: string;
function city_country(city: String,country: string) : string {
//console.log(`${city}, ${country}  `);
return `${city}, ${country}  `
//console.log(`${city}, ${country}  `);
}

city1 = city_country("Karachi","Pakistan",); //
console.log(city1);

city1 = city_country("Mehrabpure","Pakistan"); //
console.log(city1);

city1 = city_country("Lahore","Pakistan"); //
console.log(city1);


*/
var magician = ["eric", "joe", "david"];
var i;
var i2;
var result;
for (var i_1 = 0; i_1 < magician.length; i_1++) {
    //ok console.log('magicia  : ' + magician[i]);
    //     console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
    result = show_magicians(magician[i_1], i_1);
    console.log('magicia  : ' + result);
}
function show_magicians(magic, i) {
    // console.log(` ${magician[i]} `)
    //return `${magician[i]}`;
    return "".concat(magician[i]); //
}
//Add a line at the end of your program stating
//what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// for(let i=0; i<animals.length;i++){
//    // console.log('my sweet animal  : ' + animals[i]);
//       console.log(`A ${animals[i]} has a long tail.`)
//  }
//  console.log(("\nAll of these animals have long tails."));
