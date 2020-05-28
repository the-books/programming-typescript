let a: { b: number } = {
  b: 12,
};

let c: {
  firstName: string;
  lastName: string;
} = {
  firstName: 'john',
  lastName: 'barrowman',
};

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) { }
}
c = new Person('matt', 'smith');

console.log(a.b);
console.log(c.firstName);

export {};
