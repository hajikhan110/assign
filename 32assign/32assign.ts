

// Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two 
// of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been 
// used. If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
// should not be accepted.
//POOR APROACH

let c_username : string[] = ['KAREEM','raheem','saleem','muheemun','jabar'];

let new_users : string[] = ['admin','raheem','kareem'];
//const username : string[] =['kareem','raheem','saleem','salam','muheemun','admin'];

for(let i1=0; i1<new_users.length; i1++){

for(let i2=0; i2<c_username.length; i2++){

   // if(c_username[i1]=== new_users[i2]){
           if(c_username[i1]=== new_users[i2] || c_username[i1].toUpperCase()=== new_users[i2] ) {
 console.log(`need to enter a new username ${c_username[i1]}`);

 }else {
 console.log(`username ${c_username[i1]} is available.`);
   
//     console.log(`thanking u for loged in here ${username[i]}`).toUpperCase()
 }


}



}

// current_users.forEach(usr=> {
// //if(usr === 'admin'){
//     if(usr === new_users[0]){
//     console.log("hello admin wld u like to c a status report?")
// }else
// {
//     console.log(`thanking u for loged in here ${usr}`)
// }
// })


// 






// let current_users_lower : string[] = [user.lower() for user in current_users]

// for new_user in new_users:
//     if new_user.lower() in current_users_lower:
//         print("Sorry " + new_user + ", that name is taken.")
//     else:
//         print("Great, " + new_user + " is still available.")




// if(username[i] === 'admin'){
// console.log('hello Admin would u like to see status report');

// }else {
//    // console.log('thanking u for loged in here');
   
//     console.log(`thanking u for loged in here ${username[i]}`)
// }