type Filter0 = {
  // tslint:disable-next-line: callable-types
  <T>(array: T[], fn: (item: T) => boolean): T[];
};
const filter0: Filter0 = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

type Filter1<T> = {
  // tslint:disable-next-line: callable-types
  (array: T[], fn: (item: T) => boolean): T[];
};
const filter1: Filter1<number> = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

type Filter2 = <T>(array: T[], fn: (item: T) => boolean) => T[];
const filter2: Filter2 = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

type Filter3<T> = (array: T[], fn: (item: T) => boolean) => T[];
const filter3: Filter3<string> = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

function filter5<T>(array: T[], fn: (item: T) => boolean): T[] {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}

type Person = {
  name: string;
  height: number;
};
const persons = [
  { name: 'Tom', height: 181 },
  { name: 'Sarah', height: 174 },
];

filter5<Person>(persons, _ => _.height < 180);

export {};