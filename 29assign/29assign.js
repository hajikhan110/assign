// //Favorite Fruit: Make a array of your favorite fruits, and then write a 
// series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of
//  fruit is in your array. If the fruit is in your array, the if block should 
// print a statement, such as You really like bananas!
var fav_fruit = ['mango', 'orange', 'banana'];
if (fav_fruit.includes('mango')) {
    console.log('What a great friut mango!');
}
if (fav_fruit.includes('orange')) {
    console.log('What a great friut orange!');
}
if (fav_fruit.includes('banana')) {
    console.log('What a great friut banana!');
}
if (fav_fruit.includes('kiwi')) {
    console.log('What a great friut kiwi!');
}
else {
    console.log('kiwi not in fav fruit');
}
if (fav_fruit.includes('grapes')) {
    console.log('What a great friut grapes!');
}
else {
    console.log('grapes not in fav fruit');
}
