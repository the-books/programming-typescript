function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

function parse(birthday: string): Date {
  return new Date(birthday);
}

const myDate = parse(ask('1998-03-04'));
console.info('Date is', myDate.toISOString());

export {};
