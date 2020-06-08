// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   return [];
// }


type Map = {
  // tslint:disable-next-line: callable-types
  <T, U>(array: T[], f: (item: T) => U): U[];
};

const map: Map = (array, f) => {
  const result = [];
  for (const item of array) {
    result.push(f(item));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, _ => _ * 2));

const strings = ['aaa', 'bbb', 'ccc'];
console.log(map(strings, _ => _.toUpperCase()));

type Person = {
  name: string;
  height: number;
  sex: 'Male' | 'Female';
};
const objects: Person[] = [
  { name: 'Tom', height: 181, sex: 'Male' },
  { name: 'Sarah', height: 174, sex: 'Female' },
];
console.log(map(objects, _ => _.sex === 'Male'));

export {};