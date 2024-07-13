function getPosition1(position: number | string){
  if (typeof position === "string") {
    console.log(position.split(" "))
  } else {
    console.log(position.toFixed(2))
  }
}

getPosition1(22)
getPosition1('Top')

/*
1) Narrowing: The "typeof" guard
2) Narrowing: With "Equality" operator
3) Narrowing: With "in" operator
4) Narrowing: The "instanceof" guard
5) Narrowing: With "Type Predicate" Function
6) Narrowing: "Discriminated Unions"
*/ 

/*
The typeof operator in JavaScript and TypeScript is used to determine the type of a given variable or expression. It returns a string indicating the type. Here are the possible results of using typeof:

"undefined": If the variable is undefined.
"boolean": If the variable is a boolean value (true or false).
"number": If the variable is a number (both integers and floating-point numbers).
"bigint": If the variable is a bigint.
"string": If the variable is a string.
"symbol": If the variable is a symbol.
"function": If the variable is a function.
"object": If the variable is an object (including arrays, null, and instances of classes).
*/ 

// Example variables
let a;
let b = true;
let c = 42;
let d = 123n;
let e = "hello";
let f = Symbol("id");
let g = function() {};
let h = {};
let i: any = [];
let j = null;
let k = new GoldenChase('John Doe', 'johndoe');

// Using typeof
console.log(typeof a); // "undefined"
console.log(typeof b); // "boolean"
console.log(typeof c); // "number"
console.log(typeof d); // "bigint"
console.log(typeof e); // "string"
console.log(typeof f); // "symbol"
console.log(typeof g); // "function"
console.log(typeof h); // "object"
console.log(typeof i); // "object"
console.log(typeof j); // "object" (this is a known quirk in JavaScript)
console.log(typeof k); // "object"


function doSomething(value:string | number) {
  if (typeof value === 'string') {
    console.log(value.toLocaleLowerCase())
  } else {
    console.log(value.toPrecision(2))
  }
}

doSomething('Sajib');
doSomething(2.33333)

function checkAndPrint(value:string | string[] | null) {
  if (value && typeof value === 'object') {
    for (const key of value) {
      console.log(key)
    }
  } else if(typeof value === 'string'){
    console.log(value.toLocaleUpperCase())
  }
}

checkAndPrint(['eat', 'sleep', 'repeat'])
checkAndPrint('eat')
checkAndPrint(null)

function doNothing(a: string | number, b: string| string[]) {
  if (a === b) {
    a.split(',');
    b.toUpperCase();
  } else {
    console.log(a);
    console.log(b);
  }
}

type Student = { study: () => {}}

type Emp = { work: () => {} }

function activity(actor: Student | Emp){
  if ("study" in actor) {
    return actor.study()
  } else {
    return actor.work
  }
}

function doChecking(value: string | Date) {
  if (value instanceof Date) {
    console.log(value.getTime())
  } else {
    console.log(value.toUpperCase())
  }
}

class Students {
  private name: string;
  private age: number;
  private mark: number;

  constructor(name: string, age:number, mark: number){
    this.name = name,
    this.age = age,
    this.mark = mark
  }

  getMark (): number {
    return this.mark
  }
}

function checkMarks(value: Students | string) {
  if (value instanceof Students) {
    console.log(value.getMark())
  } else {
    console.log(`no mark available for student ${value}`)
  }
}

const akash = new Students('akash', 23, 34354)

checkMarks(akash);
checkMarks('Sajib')


function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function doEveryTing(value: any) {
  if (isNumber(value)) {
    return value.toFixed(2);
  }

  return null;
}

// Testing the function
console.log(doEveryTing(123));    // Output: "123.00"
console.log(doEveryTing("123"));  // Output: null
console.log(doEveryTing(null));   // Output: null

type Animal = 'cat' | 'dog';

interface IPet {
  animal: Animal;
}

class Dog implements IPet {
  animal: 'dog' = 'dog'; // Initialize the animal property

  public bark() {
    console.log('Vow Vow');
  }
}

const doger: Dog = new Dog();
doger.bark(); // Output: Vow Vow
