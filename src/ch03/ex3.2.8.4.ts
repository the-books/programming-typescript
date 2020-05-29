let a: { b: number };
a = {}; // Error

a = {
  b: 1,
  c: 2, // Error
};

export {};
