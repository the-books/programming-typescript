type Filter = {
  (array: string[], func: (item: string) => boolean): string[];
  (array: number[], func: (item: number) => boolean): number[];
};

const filter: Filter = (
  array: string[] | number[],
  func: (item: any) => boolean,
) => {

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

export {};