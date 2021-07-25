// Create a programme to make a marksheet and percentage using prompt,
// ifelse, math calculations 
// Step 1: Create 5 variables of different subject marksheet
// Step 2: Take the value of variables from user by prompt method
// Step 3: Calculate the percentage of all subject
// Step 4: Show the percentage and result in console.log methods

var chem = Number(prompt("Enter Marks for Chemistry (out of 60)"));
var phy = Number(prompt("Enter Marks for Physics (out of 70)"));
var bio = Number(prompt("Enter Marks for Biology (out of 60)"));
var math = Number(prompt("Enter Marks for Mathematics (out of 40)"));
var eng = Number(prompt("Enter Marks for English (out of 50)"));


var Percentage = ((eng + chem + phy + math + bio) / (60 + 70 + 60 + 40 + 50)) * 100;


if (Percentage >= 90) {
    console.log(Percentage, "Grade: A+")

} else if (Percentage >= 80) {
    console.log(Percentage, "Grade: A")
} else if (Percentage >= 70) {
    console.log(Percentage, "Grade B")
} else if (Percentage >= 60) {
    console.log(Percentage, "Grade  C")
} else if (Percentag >= 50) {
    console.log(Percentage, "Grade: D")
} else {
    console.log(Percentage, "Fail")
}