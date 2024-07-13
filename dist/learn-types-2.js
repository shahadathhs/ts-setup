"use strict";
const tShirts = 20;
const adam = {
    id: 123,
    name: "adam",
    email: "adam@gmail.com",
    salary: 1234,
    address: "adam state",
};
const adam2 = {
    id: 123,
    name: "adam",
    email: "adam@gmail.com",
    salary: 1234,
};
console.log(adam);
const sales = {
    name: "sales",
    employees: [
        {
            id: 123,
            name: "adam",
            email: "adam@gmail.com",
            salary: 1234,
        },
        {
            id: 123,
            name: "adam",
            email: "adam@gmail.com",
            salary: 1234,
            address: "austria",
        },
        adam
    ],
};
const book = 123;
const book1 = '123';
const admin = {
    id: 1,
    name: 'sajib',
    user: 'ss',
    password: 123456,
    role: 'admin'
};
// console.log(admin)
const cust = {
    id: 1,
    name: 'sajib',
    user: 'ss',
    password: 123456,
    role: 'customer'
};
const saj = 'sajib aaaa';
const sum = (p, q) => p + q;
const mul = (p, q) => p * q;
console.log(sum(2, 3));
console.log(mul(2, 3));
const milo = {
    name: 'a',
    user: 'df'
};
class GoldenChase {
    constructor(name, user) {
        this.name = name,
            this.user = user;
    }
}
const cb = new GoldenChase('a', 'b');
const cd = new GoldenChase('c', 'd');
console.log(b, d);
class GoldenType {
    constructor(name, user) {
        this.name = name,
            this.user = user;
    }
}
const bb = new GoldenChase('a', 'b');
const dd = new GoldenChase('c', 'd');
console.log(bb, dd);
