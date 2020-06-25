import { parse } from './ex7.3.1.parse';

function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

const result = parse(ask('2021/09/09'));

if (result instanceof Error) {
  console.error(result.message);
} else {
  console.info('Date is', result.toISOString());
}

export {};
