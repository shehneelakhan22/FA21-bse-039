let myString = "Hello there!! My name is Shehneela. I am studying Software Engineering at COMSATS Attock. As university offered us the course Mobile Application Development (MAD), so we are learning the basics of JavaScript in order to build an application using React Native.";
let FirstName = "Shehneela";
let LastName = "Khan";
let mytext = "      Hello there!!      ";
let text = "Hello Guys!! What's going on?";

// Length 
console.log(myString.length);

// Extract string Method 
console.log(myString.charAt(1));
console.log(FirstName.at(2));

// Lowercase Method
console.log(FirstName.toLowerCase());

// Lowercase Method
console.log(FirstName.toUpperCase());

// Slice Method
console.log(myString.slice(7,17));

// Trim Method
console.log(mytext);
console.log(mytext.trim());

// Concat Method
let concatText = FirstName.concat(" ", LastName);
console.log(concatText);

// Trim Start Method
console.log(mytext.trimStart());

// Trim End Method
console.log(mytext.trimEnd());

// Repeat Method
console.log(FirstName.repeat(3));

// Replace Method
console.log(mytext.replace("there", "Shehneela"));

// Split Method
console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split("|"));

// padStart Method
value = "5";
console.log(value.padStart(2, "x"));

// padEnd Method
console.log(value.padEnd(4, "0"));