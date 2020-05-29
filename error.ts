type issue = {
  page: number,
  line?: number,
  before: string,
  after: string,
};

const found: issue[] = [
  {
    page: 23,
    line: 6,
    before: '1.3.1절의',
    after: '2.3.1절의',
  },
  {
    page: 53,
    line: 7,
    before: '에러 TSTS2322',
    after: '에러 TS2322',
  },
];
