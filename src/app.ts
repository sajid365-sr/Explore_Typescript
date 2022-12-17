

// Project setup

const message = 'Hello Typescript';
const message2 = 'Bye JavaScript';
// console.log(message, message2, language);

// Primitive Types(string, number and boolean),
// unionTypes and how inferred types in typescript.

 // infer means TS auto dhore nibe konta kon type (ex: string, boolean, number). Jodi auto infer korte na pare tahole amader manually bole dite hobe konta kon types.

//  let myName:string;
//  myName = 'sajid';

// myName = 'sorker';

// myName=34;
// myName=false;

// let age:number;
// age = 34;
// age = '45';


// unionTypes means aker odhik type use kora jabe ak variable a. ar jonno age theke e bole dite hobe kon kon type rakha hobe.

let age:string | number = 22; // akhane bole dewa hocche j string & number 2 tai rakha jabe
age = '45'


// const myName:'sajid' = 'sajid';
let myName:'sajid' | 'sorker' = 'sajid';
myName = "sorker"