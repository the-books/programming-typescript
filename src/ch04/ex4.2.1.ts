type Filter<T> = {
  // tslint:disable-next-line: callable-types
  (array: T[], fn: (item: T) => boolean): T[];
};

// Error!!!
// const filter: Filter = (arrary, fn) => {
//   const result = [];
//   for (const item of arrary) {
//     if (fn(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// Error!!!
// let otherFilter: Filter;

const filter: Filter<number> = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

filter([1, 2, 3, 4, 5], _ => _ % 2 === 0);

type StringFilter = Filter<string>;
const stringFilter: StringFilter = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

stringFilter(['a', 'b', 'c', 'd'], _ => _ === 'd');

export {};