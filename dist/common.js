"use strict";
// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining(?.),
// Literal Types(value as a type),
// Literal Inference(as const),
;
var description = {}; // making an empty object using "Description" type;
var friends = ["Arif", "Johir"];
var user = {
    name: 'user',
    email: 'user@gmail.com',
};
friends.forEach(function (item) {
    description[item] = item + "on fire";
});
