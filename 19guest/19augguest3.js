//let Guest : string[] = ['Kareem','Raheem','rouf','raheem','salam','momin'];
var Guest = ['Kareem', 'Raheem'];
console.log(Guest);
var absent = 'Raheem';
//et absent : string = 'Raheem';
var newarrival = 'sultan';
//mr raheem will be change because at index 1 with sultan 
Guest[1] = newarrival;
// for(let i=0; i<Guest.length;i++){
//console.log('I welcome you Sir!' + Guest[i]);
//     console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
// }
//okconsole.log(`Mr. ${absent} is not coming`);
//console.log('Good news! we find big table so we are inviting 3 more guests.');
//added three guest 
console.log(Guest);
Guest.unshift('farhan');
console.log(Guest);
Guest.splice(2, 0, 'rehman');
console.log(Guest);
Guest.push('saleem');
console.log(Guest);
// so new guest list will be 
console.log("new list after addition");
console.log(Guest);
//for(let i=0; i<Guest.length;i++){
//   //console.log('I welcome you Sir!' + Guest[i]);
//  console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
//}
console.log('\n Sorry due to congested arragment kindly only informed Guests can join us');
//while(Guest.length > 2){
//   let deletedguest=Guest.pop();
//   console.log(`Sorry Mr. ${deletedguest}, we apologies your inivitation is pending sorry for inconvience \n\n thank u \n\n`);
// console.log(`Sorry Mr. ${deletedguest}, we apologies your inivitation is pending sorry for inconvience \n\n thank u \n\n`);
//}
//remaining guest
//console.log(Guest);
//for(let i=0; i<Guest.length;i++){
// let deletedguest=Guest.pop();
// console.log(`Sorry Mr. ${Guest[i]}, we confirm u inivitation despite congested arragment \n\n thank u \n\n  `);
//}
Guest.splice(0, 2);
console.log(Guest);
//display guest message
console.log("All Guest Fig is here :".concat(Guest.length, " "));
//for(let i=0; i<Guest.length;i++){
// let deletedguest=Guest.pop();
// console.log(`Sorry Mr. ${Guest[i]}, we confirm u inivitation despite congested arragment \n\n thank u \n\n  `);
//}
