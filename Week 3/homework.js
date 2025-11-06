// write a variable that is a string and output to console (hint: it's console.log(variable name))

let favoriteFood = "sushi";

console.log(`My favorite food is ${favoriteFood}.`);

// write a variable that is a number and output to console (hint: it's console.log(variable name))

let myAge = 33;

console.log(`My age is ${myAge}.`);

// write a variable that takes any two numbers and adds them 

let number1 = 10;
let number2 = 23;
let sum = number1 + number2;

console.log(`The sum of ${number1} and ${number2} is ${number1 + number2}.`);

// write a variable that takes any two numbers and subtracts them and output to console

let difference = 50 -17;

console.log(`The difference is ${difference}.`);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 

let number3 = 33;
let number4 = 8;
let remainder = number3 % number4;

console.log(`The remainder of ${number3} divided by ${number4} is ${remainder}.`);

// write a variable that takes any two numbers and perform an exponential value and output to console 

let power = 33 ** 1;

console.log(`33 to the power of 1 is ${power}.`);

// write a statement that is false using a conditional statement and output to console 

let angle = 45;

if (angle > 90) {
    console.log("I'm obtuse.");
} else {
    console.log("I'm acute angle!");
}
// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}
console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let shadow = {
    breed : "German shepherd", 
    eyeColor: "ice blue", 
    coatColor: "black", 
    output: function() {

        return `Shadow is a ${this.breed} that is color ${this.coatColor} with ${this.eyeColor} eyes.`

    }
}
// console.log the values of that object one by one. 

console.log(`Shadow's breed is a ${shadow.breed}.`);
console.log(`Shadow's eye color is ${shadow.eyeColor}.`);
console.log(`Shadow's coat is color ${shadow.coatColor}.`);
console.log(shadow.output());

// create an array 

let colorArray = ["Navy", "Gold", "Black", "White"]

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

console.log(`The third position in the array is ${someArray[2]}.`);

// call all values in the array using a loop 

for (let i = 0; i < colorArray.length; i++) {
        console.log(`One color value is ${colorArray[i]}`);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log(`The value of ifStaement is ${ifStatement}.`)
