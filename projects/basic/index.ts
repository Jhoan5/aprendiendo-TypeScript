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

// Call signature with new
type SomeConstructor= {
  new (s?: string): void
}
class helloClass{
  constructor(name?:string){
    if(name){
      console.log("hello " + name);
    }else{
      console.log("hello my friend");
    }
  }
}
function doSomething2(fn: SomeConstructor){
  new fn("Carlos");
}
//doSomething2(helloClass)

// Generics and type parameters
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
const s = firstElement(["a", "b", "c"]);// "a"
const n = firstElement([1, 2, 3]);// 1
const u = firstElement([]);// undefined

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// En este caso el tipo es un objeto con una propiedad 'length'
// Entonces los valores que se le pasen a 'a' y 'b' deben tener esa propiedad
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("Alice", "bob");
// Error! Numbers don't have a 'length' property
//const notOK = longest(10, 100);

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // Error! 'minimum' and 'obj' have incompatible types
    //return { length: minimum };
    return {...obj, length: minimum}
  }
}
// ✅ usar siempre la menor cantidad de type parameter
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
// ❌
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// overloads
// Si es posible usar union types en los parámetros usarlos en vez de overloads
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
const e1 = len("hello");
const e2 = len([1, 2, 3]);

// Parameter Destructuring
// ❌
function whatever({a,b,c}:{a:number, b:number, c:number}):void{
  const d = a+b+c
}
// ✅
type ABC = {a:number, b:number, c:number}
function whatever2({a, b, c}:ABC):void{
  const d = a+b+c
}

type voidFunc = () => void
function fn77():void{
  // @ts-expect-error
  return 1
}

// Readonly
interface Person {
  name: string;
  age: number;
};
// gracias a readonly no es posible modificar las propiedades name y age
interface ReadPerson {
  readonly name: string,
  readonly age: number
};
let newPerson: Person = {
  name: "John",
  age: 30
}
let readNewPerson: ReadPerson = newPerson

//console.log(readNewPerson.name + " is " + readNewPerson.age + " years old.");

// Index signature
let diccionario: {
  readonly [clave: string]: any[];
};

diccionario = {
  "uno": [1],
  "dos": [2],
  "tres": [3]
};

//console.log(diccionario["dos"]); // Imprime 2

// Intersection &
interface A {
  a: number;
}
interface B {
  b: number;
}

type C = A & B;

function add77(a: C) {
  return a.a + a.b;
}