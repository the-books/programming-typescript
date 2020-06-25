class InvalidDateFormatError extends RangeError { }
// tslint:disable-next-line: max-classes-per-file
class DateIsInTheFutureError extends RangeError { }

function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
  const date = new Date(birthday);
  if (!isValid(date)) {
    return new InvalidDateFormatError('* Enter a date in the form YYYY/MM/DD *');
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError('* Are you a timelord? *');
  }
  return date;
}

function isValid(date: Date): boolean {
  return (Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime()));
}

export {
  parse,
};
