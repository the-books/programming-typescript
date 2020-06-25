class InvalidDateFormatError extends RangeError { }
// tslint:disable-next-line: max-classes-per-file
class DateIsInTheFutureError extends RangeError { }

/**
 * @param birthday 생일
 * @throws {InvalidDateFormatError} 상용자가 생일을 잘못 입력함
 * @throws {DateIsInTheFutureError} 상용자가 생일을 미래 날짜로 입력함
 */
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

export {
  InvalidDateFormatError,
  DateIsInTheFutureError,
  parse,
};
