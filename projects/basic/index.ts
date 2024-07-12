// Data types
// No es necesario declarar el tipo de dato para variables
const a: number = 10;
const b: string = "hello";
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;

// Arrays
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// Tuples
const tuple: [number, string] = [1, "hello"];

// Union types
type Id = number | string;
const id1: Id = 1;
const id2: Id = "1";
type Obj = {
  id:Id
  name: string
}
const obj: Obj = {
  id: 1,
  name: "hello"
}

// Functions
// No es necesario declarar el tipo de dato para las funciones
// Opcional para el tipo de dato de retorno
function print(str: string): void{
  console.log(str);

}
// Parámetros opcionales
function add(a: number, b?: number): number {
  if(b) {return a + b};
  return a;
}
// interface
interface User {
  name: string;
  age: number;
}
interface FullUser extends User {
  isAdmin: boolean
}
const user: User = {
  name: "John",
  age: 30
};
const user2: FullUser = {
  name: "John",
  age: 30,
  isAdmin: true
};

// Generics
function identity<T>(arg: T): T {
  return arg;
}
// Call signature
interface someFunction{
  property: string
  // Function signature
  (arg: string): void
}
function doSomething(arg: someFunction){
  arg("hello");
}
function greet(name: string) {
  console.log("Hello, " + name);
}
greet.property = "hello";
//doSomething(greet)
