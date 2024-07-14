"use strict";
// Función que muestre la posición, el valor y el indice de un string o array.
// ❌
function printArray(arr) {
    if (arr.length === 0) {
        console.log("Array vacío");
    }
    if (typeof arr === "string") {
        console.log("Estas imprimiendo un string o cadena");
    }
    for (let i in arr) {
        console.log(`Position: ${i + 1}, index: ${i}, value: ${arr[i]}, type: ${typeof arr[i]}`);
    }
}
// ✅
function printArray2(arr) {
    if (arr.length === 0) {
        console.log("Array vacío");
    }
    for (let i in arr) {
        console.log(`Position: ${i + 1}, index: ${i}, value: ${arr[i]}, type: ${typeof arr[i]}`);
    }
}
// Función que busca una letra en una palabra, dados un parámetro palabra y letra a buscar.
function searchLetter(word, letter) {
    return word.includes(letter);
}
// Función que recibe dos array y devuelve uno solo con los elementos de ambos, pero invertido.
function reverseArray(arr1, arr2) {
    let result = [];
    for (let i in arr1) {
        result[i] = arr1[arr1.length - 1 - parseInt(i)];
    }
    for (let i in arr2) {
        result[parseInt(i) + arr1.length] = arr2[arr2.length - 1 - parseInt(i)];
    }
    return result;
}
//Una función que recibe un array y que retorna los elementos de ese array cuyo indice sea par.
// ❌
function evenIndex(arr) {
    return arr.filter((x, i) => i % 2 == 0);
}
// ✅
function evenIndex2(arr) {
    return arr.filter((x, i) => i % 2 == 0);
}
// Crea una función que tome un objeto y un array dónde el array filtra las propiedades del objetos y retorna los key encontrados en el objeto del array filtro.
// A la función anterior añade un parámetro de inclusión dónde se le diga si debe retornar las keys que hay en el objeto o las que no hay.
// ❌
function filterObject(obj, arr) {
    let result = [];
    let keys = Object.keys(obj);
    if (keys.length > 0) {
        result = arr.filter((x) => keys.includes(x));
    }
    return result;
}
// ✅
function filterObject2(obj, arr) {
    let result = [];
    let keys = Object.keys(obj);
    if (keys.length > 0) {
        result = arr.filter((x) => keys.includes(x));
    }
    return result;
}
// Crea una función que compare si, dos objetos son iguales y tienen las mismas propiedades, entonces retorna true, o de lo contrario retorna false.
// ✅
function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    else {
        return keys1.every((x) => keys2.includes(x));
    }
}
