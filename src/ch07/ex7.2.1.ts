function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

function parse(birthday: string): Date {
  const date = new Date(birthday);
  if (!isValid(date)) {
    throw new RangeError('* Enter a date in the form YYYY/MM/DD *');
  }
  return date;
}

function isValid(date: Date): boolean {
  return (Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime()));
}

try {
  const myDate = parse(ask('====='));
  console.info('Date is', myDate.toISOString());
} catch(e) {
  if (e instanceof RangeError) {
    console.error(e.message);
  } else {
    throw e;
  }
}

export {};
