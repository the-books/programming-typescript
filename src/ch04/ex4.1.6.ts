const numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};


for (let a of numbers) {
  //
}

const allNumbers = [...numbers]; // number[]


const [one, two, ...rest] = numbers; // [number, number, number[]]

export {};
