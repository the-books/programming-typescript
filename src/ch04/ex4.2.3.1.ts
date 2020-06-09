const promise0 = new Promise(
  resolve => resolve(45),
);
promise0.then(
  result => result * 4,   // Error: object
);

const promise1 = new Promise<number>(
  resolve => resolve(45),
);
promise1.then(
  result => result * 4,   // number
);

export {};
