
// Explore Type Aliases (Type aliases ar moddhe amra different custom type rakhte parbo);


type MyName = "Sajid" | "Sorker"; // declare custom type
let MyName: MyName = "Sajid"



type arr = MyName[]; // using myName as a type
const arr:arr = ["Sajid"];


// using index wise array as a type 
type Man = [string, string, number, boolean, string ] 
let man: Man =  ['dfdfre', 'dfsdf', 533, true, 'dfdfd'];


// Make function signature using custom type
type Add = (num1: number, num2: number, num3?: number) => number; 
const add: Add = (num1, num2, num3 = 0) => {

    return num1 + num2 + num3;
};

// Make custom object type

type Address = {
    presentAddress: 'example',
    permanentAddress: 'example',
};
type Favorite = {
    type: "food" | "player" | "singer" | "actor";
    value: string;
};

type Person = {
    name: string;
    email: string;
    age: number;
    phone: string | string[];
    address: Address;
    favorites: Favorite[];
};



const person: Person = {
name: 'Sajid',
email: 'sajid@gmail.com',
age: 22,
phone: ["2145645"],
address: {
    presentAddress: 'example',
    permanentAddress: 'example',
},
favorites: [
    {
        type: 'food',
        value:'Meat',
    },
    {
        type: 'player',
        value:'Messi',
    },
]

}

