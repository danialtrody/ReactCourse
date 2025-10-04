//Map -Create a new array by doing something with each item in an array.
var numbers = [3, 56, 2, 48, 5];
function double(x){
    return x*2;
}
const newNumbers1 = numbers.map(double);
console.log(newNumbers1)



//Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];
const newNumbers2 = numbers.filter(function(num){
    return num < 10;
})
console.log(newNumbers2)



//Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];
const newNumbers3 = numbers.reduce(function(acc,curr){
    return acc+curr
});
console.log(newNumbers3)



//Find - find the first item that matches from an array.
var numbers = [3, 56, 2, 48, 5];
const newNumber1 = numbers.find(function(num){
    return num > 10;
})
console.log(newNumber1)


//FindIndex - find the index of the first item that matches.
var numbers = [3, 56, 2, 48, 5];
const newNumber2 = numbers.findIndex(function(num){
    return num > 10;
})
console.log(newNumber2)




import emojipedia from "./emojipedia"
const newEmojipedia = emojipedia.map(function (emojiEntry){
   return emojiEntry.meaning.substring(0,100);
});
console.log(newEmojipedia)



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
