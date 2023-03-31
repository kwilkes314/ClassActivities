// Create a variable "timeOfDay" and assign it a string
let timeOfDay="noon"

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting=`Hello, it is currently ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar
// Print the new variable and its type
console.log(typeof newVar);
// What type should we expect?

// Assign the variable a value that indicates the variable is purposely blank
newVar ="";
// What value should we assign?
newVar="peace";

// Print the variable and its type again
// What type should we expect?
console.log(newVar);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(nightTime); //that it is undefined
// Print "greeting" again
// Will this line run? //no it will not
console.log(greeting);
