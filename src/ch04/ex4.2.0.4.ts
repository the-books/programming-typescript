type SaN = string | number;

let a: SaN = 'string';
a = 123;

const b: SaN[] = [];
b.push('200');
b.push(300);
b.push('400');

let c: string[] | number[] = [1,1,2,3];
c.push(1000);
// c.push('1'); // Error

c = ['a', 'b', 'c'];
c.push('d');
// c.push(1); // Error

let d: string[] | number[];
d = [1,2,3];
d.push(1);

d = ['d']
d.push('aaa');


let e: string[] | number[] = [];
console.log(e.length);
// e.push('1'); // Error
// e.push(1); // Error

e = [1];
e.push(1);

e = ['d'];
e.push('1');

console.log(e.length);


const f: string[] | number[] = [];
f.push(1);
f.push('1');

export {};