
// Function Types(parameter, return, anonymous/callback, function signature, optional parameter/default parameter)


// Normal function without return
// function add(num1: number, num2: number): void{ // Function theke jodi kono kisu return na kora hoy tahole ta "void" type asbe;

//     console.log(num1 + num2);
// };

// add(10,30);


// Function with return
// function add(num1: number, num2: number):number { // Abar alada vhabe return type bole o dewa jay ex. number;

//     return(num1 + num2);
// };


// const result = add(10,30);
// console.log(result);


// Function in a variable
// const  add = function(num1: number, num2: number):number {

//     return(num1 + num2);
// };

// console.log(add(10,30));


// Arrow function
// const  add = (num1: number, num2: number):number => {

//     return(num1 + num2);
// };


// Parameter type array or anything
// const  add = (num1: number[], num2: number):number => {

//     return(num1[0] + num2);
// };

// Three parameter
// const  add = (num1: number, num2: number, num3:number):number => {

//     return num1 + num2 + num3;
// };


// Optional chaining or default parameter
// const  add = (num1: number, num2: number, num3: number = 0):number => { // or num2? : number

//     return num1 + num2 + num3;
// };


// spread operator for multiple parameter
// const  add = (...numbers: number[]):number => { // or num2? : number

//     return numbers.reduce((pre,cur) => pre + cur, 0);
// };


// Function signature
// let  add: (num1: number, num2: number, num3?: number) => number;
// add = (num1, num2, num3 = 0) => {

//     return num1 + num2 + num3;
// };


// let  add: Function;
// add = (num1: number, num2: number, num3 = 0) => {

//     return num1 + num2 + num3;
// };

// console.log(add(10,30));