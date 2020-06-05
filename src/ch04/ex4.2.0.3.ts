// type Filter = {
//   (array: string[], func: (item: string) => boolean): string[];
//   (array: number[], func: (item: number) => boolean): number[];
//   (array: object[], func: (item: object) => boolean): object[];
// };

type Filter = {
  // tslint:disable-next-line: callable-types
  <T>(array: T[], func: (item: T) => boolean): T[];
};

const filter: Filter = (array, func)=> {
  const result = [];
  for (const item of array) {
    if (func(item)) {
      result.push(item);
    }
  }
  return result;
};


const stringList = ['aaa', 'bb', 'ccc', 'dd', 'eee'];
console.log(filter(stringList, item => item.length > 2));

const numberList = [10, 30, 100, 200, 500];
console.log(filter(numberList, item => item > 50));

const objectList = [
  { firstName: 'Sarah' },
  { firstName: 'Robert' },
  { firstName: 'Julia' },
  { firstName: 'Anna' },
];
type Person = {
  firstName: string;
};
console.log(filter<Person>(objectList, item => item.firstName.length > 4));

export {};