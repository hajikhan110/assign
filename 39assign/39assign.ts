/*

City Names: Write a function called city_country()
 that takes in the name of a city and its country. 
 The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country
 pairs, and print the value that’s returned.

function describe_city(city: String,country: string = "Pakistan") {
console.log(`Sir, ${city} is in ${country}  `);
}

describe_city("Karachi"); // 




*/
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

// city_country("Mehrabpure","Pakistan"); // 
// city_country("Lahore","Karachi"); // 