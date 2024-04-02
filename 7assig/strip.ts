let namehk : string
namehk="    \t hhjfhjgfhjghg   \n\t ghfghfghfghf";
console.log(namehk);
console.log('\n ---Above Actual string witk tab and line break----- \n');
let namehk2 : string 
let withoutLineBreaks = namehk.replace(/[\r\n\t]/gm, '');
console.log(withoutLineBreaks);
console.log('\n above step 1 remove new line white space char -------- \n');
namehk2=withoutLineBreaks.trim();
console.log('\n -- step2 remove tab white char so final sentence below ------ \n');
console.log(namehk2);