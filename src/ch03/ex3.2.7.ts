let a = Symbol('a');         // symbol
let b: symbol = Symbol('b'); // symbol
var c = a === b;             // boolean
let d = a + 'x';             // Error

const e = Symbol('e');                // typeof e
const f: unique symbol = Symbol('f'); // typeof f
let g: unique symbol = Symbol('g');   // Error

let h = e === e; // boolean
let i = e === f; // Error

export {};
