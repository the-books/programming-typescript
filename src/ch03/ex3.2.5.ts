let a = 1234n;        // bigint
const b = 5678n;      // 5678n
var c = a + b;        // biting
let d = a < 1235;     // boolean
let e = 88.5n;        // Error
let f: bigint = 100n; // bigint
let g: 100n = 100n;   // 100n
let h: bigint = 100;  // Error

export {};
