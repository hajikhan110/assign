var magicianNames = ["abc", "cde"];
function showmagicians(magicianName) {
    // 
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName_1 = magicianNames_1[_i];
        console.log(magicianName_1);
    }
}
function makegreat(magicianNames) {
    var greatmag = magicianNames.map(function (magicianNames) { return "the great ".concat(magicianNames); });
    return greatmag;
}
var grearnm = makegreat(magicianNames);
console.log("orig mag");
showmagicians(magicianNames);
console.log("great mag");
showmagicians(grearnm);
/*
for(let i=0; i<mag.length;i++){

console.log('magicia  : ' + mag[i]);

console.log(mag);
}



*/
