import {
  InvalidDateFormatError,
  DateIsInTheFutureError,
  parse,
} from './ex7.3.0.parse';

function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

const result = parse(ask('0909u09u02021/09/09'));

if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
  console.error(result.message);
} else {
  console.info('Date is', result.toISOString());
}

export {};
