/*
Cars: Write a function that stores information about a car in a Object. The function
should always receive a manufacturer and a model name. It should then accept an 
arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.
*/

function createCar(manuf: string, model: string, ... details: [string, any][]): any {
const car: any = {
    manuf,
    model,
    
};

for(const [key,value] of details){
    car[key] = value;
}
return car;
}

const myCar: string = createCar("toy","2015", ["color","red"],["optional","sunroof"],["speed","28 kbs"]);
console.log(myCar);
