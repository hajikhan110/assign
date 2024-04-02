function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    console.log(sentence);
    var sent1 = "Haji Khan Sahito";
    var i = 0;
    for (i = 0; i < sentence.length; i++) {
        //  console.log(sentence[i][0]);
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        console.log(sentence[i]);
    }
    console.log(sentence.join(" "));
    var sent2 = sent1.toUpperCase();
    var sent3 = sent1.toLowerCase();
    console.log(sent2);
    console.log(sent3);
    console.log("display title style , upper style text and lower style stored in variable");
    return sentence;
}
titleCase("haji khan sahito");
