
// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining(?.),
// Literal Types(value as a type),
// Literal Inference(as const),

interface User {
    name: string;
    email: string;
}
// let user: User | null | undefined = null;
// let user = {} as User;  
// "as User" means user k type hisabe dhore nao, first a empty object a dhore nao pore jokhn user asbe then normally kaj korbe.

// user = {
//     name: 'user',
//     email: 'user@gmail.com',
// };

// user?.email

interface Description {
    Arif: string;
    Johir: string;
};

let description: Description; // making an empty object using "Description" type;

const friends = ["Arif","Johir"] as const;

const user = {
    name: 'user',
    email: 'user@gmail.com',
}as const;

friends.forEach(item =>{
    description[item] = item + "on fire";
})