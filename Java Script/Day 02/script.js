// document.write("Hello world")
// document.write("Saylani" + (5 + 5));


// var num = 5
// num = num + 1
// console.log(num)

// Post--Decrement
// Pre--Decrement

var num = 8;
document.write(num--);
document.write('<br>');
document.write(num);
document.write('<br>');
document.write(--num);
document.write('<br>');
document.write(num);

// var num = 5;
// console.log(num);
// num /= 5;
// console.log(num);

// var random = 10 + Number('10.5') + 30;
// console.log(random);

// var dahiAvailable = true;
// var tomatoAvailable = false;

// if (dahiAvailable) {
//     console.log("1 Pao dahi dedo!");
// }
// if (dahiAvailable || tomatoAvailable) {
//     console.log("Free mien dahi dedo");
// } else if (tomatoAvailable) {
//     console.log("1 Pao timatar dedo!");
// } else {
//     console.log("1 Pao doodh dedo!");
// }

var random = Math.random();
random = Math.round(random * 10);
var askedNum = prompt('Write a number');
askedNum = Number(askedNum);
if (random != 1) {
    var a = random
    random = 1
}
if (askedNum === random) {
    console.log("You Win!");
} else {
    console.log("You Lose!");
}
console.log(a);
console.log(askedNum);
console.log(3 ** 3);


//Naming Conventions
//camelcase (prefered) use 0f underscore and dollar 
//first letter small then rest words start with a capital letter