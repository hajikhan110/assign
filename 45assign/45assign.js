/*
Cars: Write a function that stores information about a car in a Object. The function
should always receive a manufacturer and a model name. It should then accept an
arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.
*/
function createCar(manuf, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manuf: manuf,
        model: model,
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var _b = details_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("toy", "2015", ["color", "red"], ["optional", "sunroof"], ["speed", "28 kbs"]);
console.log(myCar);
