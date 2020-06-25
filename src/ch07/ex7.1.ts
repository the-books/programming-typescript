function ask(birthday: string): string {
  console.log('When is your birthday?');
  console.log(`My birthday is ${birthday}`);
  return birthday;
}

function parse(birthday: string): Date | null {
  const date = new Date(birthday);
  if (!isValid(date)) {
    return null;
  }
  return date;
}

function isValid(date: Date): boolean {
  return (Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime()));
}

const myDate = parse(ask('1998-03-04'));
if (myDate) {
  console.info('Date is', myDate.toISOString());
} else {
  console.error('Error parsing date for some reason.');
}

export {};
