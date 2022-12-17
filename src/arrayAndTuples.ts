
// Array and Tuples in typescript

let players: string[];

players = [ 'Messi', 'Ronaldo'];

players[0] = 'Neymar';

// players = 34343;
// players = false;

players.push('Neymar');

// players.push(2342)

const newPlayers = players.map((player, i) => i + 1 + ". " + player);

// console.log(players, newPlayers);



// Multiple types in an array
let students:(string | number)[];
students = ['f','s','z'];
students = ['fdf', 343, 'dfdf'];
students[0] = 4343;

students.push(34);
// console.log(students);

// any one types in an array
let peoples:string[] | number[] | boolean[];
peoples = ['dfdf', 'dfsdfgd'];
peoples = [true, false, true];

// index wise types by "Tuples"
let man: [string, string, number, boolean, string ];
man = ['fdfd', 'dfdfd', 3553, false, 'gfdg'];

man[0] = 'ldgjdsf';
man[2] = 353;

