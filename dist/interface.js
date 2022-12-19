"use strict";
// Explore Interfaces and 
// Difference between Type Alias and Interface
// Declare interface (just like Type Alias)
// interface Person {
//     name: string;
//     email: string;
// }
// let person: Person = {
//     name: 'Sajid',
//     email: 'sajid@gmail.com',
// };
// Function signature by interface
// interface Add {
//     (num1: number, num2: number, num3?: number): number
// }
// const add: Add = (num1, num2, num3 = 0) => {
//     return num1 + num2 + num3;
// };
// // 
// interface Address {
//     presentAddress: 'example',
//     permanentAddress: 'example',
// };
// interface Favorite {
//     type: "food" | "player" | "singer" | "actor";
//     value: string;
// };
// interface Auth{
//     isLoggedIn: boolean;
// }
// interface Person extends Auth {
//     name: string;
//     email: string;
//     age?: number;
//     phone: string | string[];
//     address: Address;
//     favorites?: Favorite[];
// };
// const person: Person = {
// name: 'Sajid',
// email: 'sajid@gmail.com',
// age: 22,
// phone: ["2145645"],
// address: {
//     presentAddress: 'example',
//     permanentAddress: 'example',
// },
// favorites: [
//     {
//         type: 'food',
//         value:'Meat',
//     },
//     {
//         type: 'player',
//         value:'Messi',
//     },
// ],
// isLoggedIn: false,
// }
