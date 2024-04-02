/*
Cities: Write a function called describe_city()
 that accepts the name of a city and its country.
  The function should print a simple sentence, 
  such as Karachi is in Pakistan. Give the parameter 
  for the country a default value. Call your function
   for three different cities, at least one of which is not in the default country.




*/

function describe_city(city: String,country: string = "Pakistan") {
console.log(`Sir, ${city} is in ${country}  `);
}

describe_city("Karachi"); // 
describe_city("Bahawalpur"); // 
describe_city("Badin"); // 
describe_city("Dubai","UAE"); // 