const magicianNames: string[] = ["abc","cde"];

function showmagicians(magicianName: string[]): void{

    // 
   for(const magicianName of magicianNames){
       console.log(magicianName)
   }


}
function makegreat(magicianNames: string[]): string[] {
const greatmag: string[] = magicianNames.map(magicianName => `the great ${magicianName}`);
return greatmag;
}

const grearnm: string[] = makegreat(magicianNames);
console.log("orig mag");


showmagicians(magicianNames);

console.log("22great mag");

showmagicians(grearnm);
/*
for(let i=0; i<mag.length;i++){

console.log('magicia  : ' + mag[i]);

console.log(mag);
} 



*/
