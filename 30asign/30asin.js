// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code
// that will print a greeting to each user after they log in 
// to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such 
// as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, 
// thank you for logging in again.
var username = ['kareem', 'raheem', 'saleem', 'salam', 'muheemun', 'admin'];
for (var i = 0; i < username.length; i++) {
    if (username[i] === 'admin') {
        console.log('hello Admin would u like to see status report');
    }
    else {
        // console.log('thanking u for loged in here');
        console.log("thanking u for loged in here ".concat(username[i]));
    }
}
//other version 
console.log("other version");
username.forEach(function (usr) {
    if (usr === 'admin') {
        console.log("hello admin wld u like to c a status report?");
    }
    else {
        console.log("thanking u for loged in here ".concat(usr));
    }
});
