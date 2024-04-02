var personName = "";
//personName=prompt("what is your name please?") || "";
//personName=prompt("what is your name please?");
//let greetings = `Hello ${personName}`;
//alert(greetings);
personName = "haji khan sahito";
if (personName !== null && personName !== "") {
    var greetings = "Hello ".concat(personName, " would u like to learn some Python today?");
    // console.log(`hello ${personName},would u like to learn some Python today?');
    console.log(greetings);
    //alert(greetings);
    //console.log(personName);
}
else {
    console.log(personName);
    //alert("you have to submit your name")
}
