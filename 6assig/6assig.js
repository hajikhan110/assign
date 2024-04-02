// // Stripping Names: Store a person’s name, and 
// include some whitespace characters at the beginning 
// and end of the name. Make sure you use each character 
// combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the
//   name is displayed. Then print the name after
//    striping the white spaces.
// Windows: \r\n carriage return followed by a newline character.
// Linux: \n just a newline character.
// Older Macs: \r just a carriage return character.
//where g and m are for global and multiline flags.
///[\r\n]+/gm
var person = '\thaji khan\n sahito';
console.log("".concat(person));
person = person.replace(/(\r\n|\n|\r|\t)/gm, "");
//person = person.replace(/(\r\n)+/gm, "");
console.log("After");
console.log("".concat(person));
