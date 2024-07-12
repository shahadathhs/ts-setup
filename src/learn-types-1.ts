const count: number = 10;
const myName: string = "Sajib";
const isStudent: boolean = true;

let students: string[] = ['a','b', 'c']

let numbers: Array<number>= [1,2,3,4,5]

let position: (string | number) [] = ['top', 2, 'bottom', 5]

let multiDim: string[][] = [['abcd'], ['abcd']]

// tuples
let array: [string, number] = ['a', 1]

// any
let obj: any = {me: 0};
obj.name= 'sajib'

function greetMe(name:string): string {
  return `Hello ${name}`
}

greetMe('Sajib')

const fruits: string[] = ['apple', 'orange', 'banana','guava']

fruits.forEach(function (c) {
  console.log(c.toUpperCase())
})

function printColor(color: {name: string, code?: string, index:number}) {
  console.log(`This is ${color.name} with ${color.index}`)
}

printColor({name: 'aa', code: '#fff', index: 1})

// optional properties - ?
printColor({name: 'aa',  index: 1})


// union

function getPosition(position: number | string){
  if (typeof position === "string") {
    console.log(position.split(" "))
  } else {
    console.log(position)
  }
}

getPosition(22)
getPosition('Top')

// type assertion

const nickName: any = 'brad';
const uppercaseNN = (nickName as string).toUpperCase()

const uppercaseNN1 = ( <string> nickName).toUpperCase()

// null and undefined
const testStr: string = "hello";

const greetings = [
  {name: 'oye'},
  {name: 'Hello'},
  {name: 'holo'}
]

const found = greetings.find(greeting => greeting.name === testStr)

console.log(found && found.name)

// non-null assertion operator - !
console.log(found!.name)
