function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

class InvalidDateFormatError extends RangeError { }
// tslint:disable-next-line: max-classes-per-file
class DateIsInTheFutureError extends RangeError { }

function parse(birthday: string): Date {
  const date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError('* Enter a date in the form YYYY/MM/DD *');
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('* Are you a timelord? *');
  }
  return date;
}

function isValid(date: Date): boolean {
  return (Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime()));
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
