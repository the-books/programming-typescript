// 단축형 호출 시그니처
// type Log = (message: string, userId?: string) => void;

// 전체 호출 시그니처
// type Log = {
//   (message: string, userId?: string): void,
// };


type Reservation = {
  price: number;
};

type Reserve = {
  (from: Date, to: Date, destinations: string): Reservation,
  (from: Date, destinations: string): Reservation,
};

const reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string,
) => {
  let price = 0;
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 편도 여행 예약
    price = 15_000;
  } else if (typeof toOrDestination === 'string') {
    // 왕복 여행 예약
    price = 25_000;
  }
  return {
    price,
  };
};

reserve(new Date('2020-06-01'), new Date('2020-06-06'), '제주도');

export {};
