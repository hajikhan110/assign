

/*
Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of 
 magicians by adding the phrase the Great to each magician’s name.
  Call 
show_magicians() to see that the list has actually been modified.


let magician: string[] = ["eric", "joe", "david"];
let i: number;
let i2: number;
let result: string;

for(let i=0; i<magician.length;i++){
result=show_magicians(magician[i],i)
console.log('magicia  : ' + result);
}


function show_magicians(magic: string, i: number): string {

return `${magician[i]}`;//
}

*/

let magician: string[] = ["eric", "joe", "david"];
let i: number;
let i2: number;
let result: string;

for(let i=0; i<magician.length;i++){
result=show_magicians(magician[i],i)
console.log('magicia  : ' + result);

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