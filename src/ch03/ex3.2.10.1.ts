let a = [1, 2, 3];       // number[]
var b = ['a', 'b'];      // string[]
let c: string[] = ['a']; // string[]
let d = [1, 'a'];        // (string | number)[]
const e = [2, 'b'];      // (string | number)[]

let f = ['red'];
f.push('blue');
f.push(true); // Error

let g = [];    // any[]
g.push(1);     // number[]
g.push('red'); // (string | number)[]

let h: number[] = []; // number[]
h.push(1);            // number[]
h.push('red');        // Error

export {};
