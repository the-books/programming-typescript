let a: unknown = 30; // unknown
let b = a === 123; // boolean
let c = a + 10; // Error
if (typeof a === 'number') {
  let d = a + 10; // number
}

export {};
