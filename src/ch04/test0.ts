function ttt(one: { name: string }): void {
  console.log(one.name);
}

ttt({ name: 'Sarah' });
// ttt({ name: 'Tom', age: 33 }); Error

type Person = {
  name: string;
};

type Member = {
  id: string;
};

function ddd(one: Member | Person): void {
  console.log(one.name);
}

ddd({ name: 'Julia' });
ddd({ name: 'Robert', id: '12048' });

export {};
