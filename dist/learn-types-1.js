"use strict";
const count = 10;
const myName = "Sajib";
const isStudent = true;
let students = ['a', 'b', 'c'];
let numbers = [1, 2, 3, 4, 5];
let position = ['top', 2, 'bottom', 5];
let multiDim = [['abcd'], ['abcd']];
// tuples
let array = ['a', 1];
// any
let obj = { me: 0 };
obj.name = 'sajib';
function greetMe(name) {
    return `Hello ${name}`;
}
greetMe('Sajib');
const fruits = ['apple', 'orange', 'banana', 'guava'];
fruits.forEach(function (c) {
    console.log(c.toUpperCase());
});
function printColor(color) {
    console.log(`This is ${color.name} with ${color.index}`);
}
printColor({ name: 'aa', code: '#fff', index: 1 });
// optional properties - ?
printColor({ name: 'aa', index: 1 });
// union
function getPosition(position) {
    if (typeof position === "string") {
        console.log(position.split(" "));
    }
    else {
        console.log(position);
    }
}
getPosition(22);
getPosition('Top');
// type assertion
const nickName = 'brad';
const uppercaseNN = nickName.toUpperCase();
const uppercaseNN1 = nickName.toUpperCase();
// null and undefined
const testStr = "hello";
const greetings = [
    { name: 'oye' },
    { name: 'Hello' },
    { name: 'holo' }
];
const found = greetings.find(greeting => greeting.name === testStr);
console.log(found && found.name);
// non-null assertion operator - !
console.log(found.name);
