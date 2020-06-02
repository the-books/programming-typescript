function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum([1, 2, 3])); // 6


function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

// sumVariadic(1, 2, 3); // Error


function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadicSafe(1, 2, 3)); // 6

export {};
