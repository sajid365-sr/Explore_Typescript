"use strict";
// Array and Tuples in typescript
var players;
players = ['Messi', 'Ronaldo'];
players[0] = 'Neymar';
// players = 34343;
// players = false;
players.push('Neymar');
// players.push(2342)
var newPlayers = players.map(function (player, i) { return i + 1 + ". " + player; });
// console.log(players, newPlayers);
// Multiple types in an array
var students;
students = ['f', 's', 'z'];
students = ['fdf', 343, 'dfdf'];
students[0] = 4343;
students.push(34);
// console.log(students);
// any one types in an array
var peoples;
peoples = ['dfdf', 'dfsdfgd'];
peoples = [true, false, true];
// index wise types by "Tuples"
var man;
man = ['fdfd', 'dfdfd', 3553, false, 'gfdg'];
man[0] = 'ldgjdsf';
man[2] = 353;
