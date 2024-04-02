var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//actual locations below
var ctry = ['USA', 'UK', 'Germany', 'Italy', 'Spain'];
//Array in Actual
console.log('original 1 ' + ctry);
//Array in alpha order asd
console.log('copy sorted 1 ' + __spreadArray([], ctry, true).sort());
//again original order 
console.log('original 2 ' + ctry);
//again reverse order 
console.log('copy sort reverded 2 ' + __spreadArray([], ctry, true).sort().reverse());
console.log('original 3 ' + ctry);
console.log('original reverse ' + ctry.reverse());
console.log('original sort ' + ctry.sort());
console.log('original sort reversed ' + ctry.sort().reverse());
