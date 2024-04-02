
/*
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.




*/

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
