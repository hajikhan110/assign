/*
Sandwiches: Write a function that accepts a
 array of items a person wants on a sandwich.
  The function should have one parameter that
  collects as many items as the function call
  provides, and it should print a summary
  of the sandwich that is being ordered.
  Call the function three times, using a different number of arguments each time.

*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich su");
    if (items.length === 0) {
        console.log(" - u order emty");
    }
    else {
        items.forEach(function (item, index) {
            console.log(" ".concat(index + 1, ". ").concat(item));
        });
    }
    console.log("\n");
}
makeSandwich();
makeSandwich("hjgh", "jbhmh", "hjghjg");
makeSandwich("hjgh", "ffff", "hjghjg");
makeSandwich("hjgh", "hhhh", "hjghjg");
