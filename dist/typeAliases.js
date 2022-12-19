"use strict";
// Explore Type Aliases (Type aliases is just like var. we can store different types here);
var MyName = "Sajid";
var arr = ["Sajid"];
var man = ['dfdfre', 'dfsdf', 533, true, 'dfdfd'];
var person = {
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
            value: 'Meat',
        },
        {
            type: 'player',
            value: 'Messi',
        },
    ],
    isLoggedIn: true,
};
// try to find person.phone is "string" or "array";
typeof person.phone === 'string' || person.phone.map(function (val) { return val.toLowerCase(); });
!(typeof person.phone === 'string') && person.phone.map(function (val) { return val.toLowerCase(); });
Array.isArray(person.phone) && person.phone.map(function (val) { return val.toLowerCase(); });
