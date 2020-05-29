let i: 3 = 3;
i = 4; // Error

let j = [1, 2, 3];
j.push(4);
j.push('5'); // Error

let k: never = 4; // Error

let l: unknown = 4;
let m = l * 2;

export {};
