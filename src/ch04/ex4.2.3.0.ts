function map<T, U>(array: T[], f: (item: T) => U): U[] {
  const result = [];

  for (const item of array) {
    const u = f(item);
    result.push(u);
  }

  return result;
}

map(
  ['aaa', 'bb', 'cc', 'ddd'], // T 타입의 배열
  _ => _.length >2,           // U 타입을 반환하는 함수
);

map<string, boolean>(
  ['a', 'b', 'c'],
  _ => _ === 'a',
);

map<string>(        // Error
  ['a', 'b', 'c'],
  _ => _ === 'a',
);

map<string, boolean | string>(
  ['a', 'b', 'c'],
  _ => _ === 'a',
);

map<string, number>(
  ['a', 'b', 'c'],
  _ => _ === 'a',   // Error
);

export {};
