// type Filter = (array: (string | number)[], func: (item: string | number) => boolean ) => (string | number)[];
type Filter = (array: string[] | number[], func: (item: string | number) => boolean) => string[] | number[];

const filter: Filter = (array, func) => {
  const result= [];
  for (const el of array) {
    if (func(el)) {
      result.push(el);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
const result0 = filter(numbers, _ => _ < 3);
console.log(result0);

const strings = ['a', 'b', 'c', 'd', 'e'];
const result1 = filter(strings, _ => _ !== 'c');
console.log(result1);

export {};
