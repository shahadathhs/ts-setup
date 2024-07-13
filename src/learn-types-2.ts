type magicNumber = number;

const tShirts: magicNumber = 20;

type Employee = {
  id: number;
  name: string;
  email: string;
  salary: number;
  address?: string;
};

const adam: Employee = {
  id: 123,
  name: "adam",
  email: "adam@gmail.com",
  salary: 1234,
  address: "adam state",
};

const adam2: Employee = {
  id: 123,
  name: "adam",
  email: "adam@gmail.com",
  salary: 1234,
};
console.log(adam);

type Department = {
  name: string;
  employees: Employee[];
};

const sales: Department = {
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

type ISBN = number | string;

const book: ISBN = 123;
const book1: ISBN = '123';

// &
type User = {
  id: number,
  name: string,
  user: string,
  password: number
}

type Admin = User & {
  role: 'admin'
}

type Customer = User & {
  role: 'customer'
}

const admin: Admin = {
  id: 1,
  name: 'sajib',
  user: 'ss',
  password: 123456,
  role: 'admin'
}
// console.log(admin)

const cust: Customer = {
  id: 1,
  name: 'sajib',
  user: 'ss',
  password: 123456,
  role: 'customer'
}
// console.log(cust)

type startsWithSajib = `sajib${string}`

const saj: startsWithSajib = 'sajib aaaa'

type cal = ( a: number, b: number) => number

const sum: cal = (p, q) => p + q
const mul: cal = (p, q) => p * q

console.log(sum(2, 3))
console.log(mul(2, 3))

interface ICustomer {
  name: string,
  user: string
}

const milo: ICustomer = {
  name: 'a',
  user: 'df'
}

class GoldenChase implements ICustomer {
  name: string;
  user: string;

  constructor(name: string, user: string){
    this.name = name,
    this.user = user
  }
}

const cb = new GoldenChase('a', 'b')
const cd = new GoldenChase('c', 'd')

console.log(b, d)

type Customers = {
  name: string,
  user: string
}

class GoldenType implements Customers {
  name: string;
  user: string;

  constructor(name: string, user: string){
    this.name = name,
    this.user = user
  }
}

const bb = new GoldenChase('a', 'b')
const dd = new GoldenChase('c', 'd')

console.log(bb, dd)
