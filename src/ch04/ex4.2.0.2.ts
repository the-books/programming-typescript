function myFunc(array: number[], func: (item: number) => boolean): number[];
function myFunc(array: string[], func: (item: string) => boolean): string[];
function myFunc(array: any[], func: (item: any) => boolean): any[] {
  const reuslt = [];
  for (const item of array) {
    if (func(item)) {
      reuslt.push(item);
    }
  }
  return reuslt;
}

const numbers = [1, 2, 3, 4, 5];
const result0 = myFunc(numbers, _ => _ < 3);
console.log(result0);

const strings = ['a', 'b', 'c', 'd', 'e'];
const result1 = myFunc(strings, _ => _ !== 'c');
console.log(result1);


function myFunc2(array: number[], func: (item: number) => boolean): number[];
function myFunc2(array: string[], func: (item: string) => boolean): string[];
function myFunc2(array: number[] | string[], func: (item: any) => boolean): number[] | string[] {

  const reuslt = [];
  for (const item of array) {
    if (func(item)) {
      reuslt.push(item);
    }
  }
  return reuslt;
}

myFunc2([1,2,3,4,5], _ => _ > 2);
myFunc2(['1','2','3','4','5'], _ => _ === '2');

export {};