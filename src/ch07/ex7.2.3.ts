import {
  InvalidDateFormatError,
  DateIsInTheFutureError,
  parse,
} from './ex7.2.3.parse';

function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

try {
  const myDate = parse(ask('2021/09/09'));
  console.info('Date is', myDate.toISOString());
} catch(e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError) {
    console.error(e.message);
  } else {
    throw e;
  }
}

export {};
