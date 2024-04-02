//actual locations below
let ctry : string[] = ['USA','UK','Germany','Italy','Spain'];

//Array in Actual
console.log('original 1 ' + ctry);
//Array in alpha order asd
console.log('copy sorted 1 '+[...ctry].sort());



//again original order 
console.log('original 2 ' + ctry);


//again reverse order 
console.log('copy sort reverded 2 ' + [...ctry].sort().reverse());

console.log('original 3 ' + ctry);


console.log('original reverse ' + ctry.reverse());


console.log('original sort ' + ctry.sort());


console.log('original sort reversed ' + ctry.sort().reverse());

