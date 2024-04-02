
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original 
 array will be unchanged, return the new array and store it in a separate array. 
 Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.
*/
let magician: string[] = ["eric", "joe", "david"];
let i: number;
let i2: number;
let result: string;

for(let i=0; i<magician.length;i++){
result=show_magicians(magician[i],i)
console.log(`magicia  ${result}`);

magician.pop;
result=make_great(magician[i],i)
magician.pop;
console.log('magicia  : ' + result);

}
 magician.pop;
//magician.pop;
function show_magicians(magic: string, i: number): string {
return `${magician[i]}`;//
}

//function
function make_great(magic: string, i: number): string {
//magician[i].pop();
return `${magician[i]} great`;
}

//[ 'eric great', 'joe great', 'david great' ]
let b: string[] = [];
b = magician.map(test);
console.log(b);

function test(x){
   // return 'sssss';
   return `${x} great`;
}




