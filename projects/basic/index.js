"use strict";
// Data types
// No es necesario declarar el tipo de dato para variables
const a = 10;
const b = "hello";
const c = true;
const d = null;
const e = undefined;
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// Tuples
const tuple = [1, "hello"];
const id1 = 1;
const id2 = "1";
const obj = {
    id: 1,
    name: "hello"
};
// Functions
// No es necesario declarar el tipo de dato para las funciones
// Opcional para el tipo de dato de retorno
function print(str) {
    console.log(str);
}
// Parámetros opcionales
function add(a, b) {
    if (b) {
        return a + b;
    }
    ;
    return a;
}
const user = {
    name: "John",
    age: 30
};
const user2 = {
    name: "John",
    age: 30,
    isAdmin: true
};
// Generics
function identity(arg) {
    return arg;
}
function doSomething(arg) {
    arg("hello");
}
function greet(name) {
    console.log("Hello, " + name);
}
greet.property = "hello";
class helloClass {
    constructor(name) {
        if (name) {
            console.log("hello " + name);
        }
        else {
            console.log("hello my friend");
        }
    }
}
function doSomething2(fn) {
    new fn("Carlos");
}
//doSomething2(helloClass)
// Generics and type parameters
function firstElement(arr) {
    return arr[0];
}
const s = firstElement(["a", "b", "c"]); // "a"
const n = firstElement([1, 2, 3]); // 1
const u = firstElement([]); // undefined
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// En este caso el tipo es un objeto con una propiedad 'length'
// Entonces los valores que se le pasen a 'a' y 'b' deben tener esa propiedad
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("Alice", "bob");
// Error! Numbers don't have a 'length' property
//const notOK = longest(10, 100);
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        // Error! 'minimum' and 'obj' have incompatible types
        //return { length: minimum };
        return Object.assign(Object.assign({}, obj), { length: minimum });
    }
}
// ✅ usar siempre la menor cantidad de type parameter
function filter1(arr, func) {
    return arr.filter(func);
}
// ❌
function filter2(arr, func) {
    return arr.filter(func);
}
function len(x) {
    return x.length;
}
const e1 = len("hello");
const e2 = len([1, 2, 3]);
// Parameter Destructuring
// ❌
function whatever({ a, b, c }) {
    const d = a + b + c;
}
function whatever2({ a, b, c }) {
    const d = a + b + c;
}
function fn77() {
    // @ts-expect-error
    return 1;
}
;
;
let newPerson = {
    name: "John",
    age: 30
};
let readNewPerson = newPerson;
//console.log(readNewPerson.name + " is " + readNewPerson.age + " years old.");
// Index signature
let diccionario;
diccionario = {
    "uno": [1],
    "dos": [2],
    "tres": [3]
};
function add77(a) {
    return a.a + a.b;
}
