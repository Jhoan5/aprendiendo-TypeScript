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
//doSomething(greet)
