type ReservationDay = {
  price: number;
  day: number;
};

type Reservation = {
  target: string;
};

const re: ReservationDay | Reservation = {
  price: 112,
  // day: 3,
  target: '제주도',
};

type Reserve = {
  (destination: string, from: Date, to: Date): ReservationDay,
  (destination: string, from: Date): Reservation,
};

const reserve: Reserve = (
  destination: string,
  from: Date,
  to?: Date,
) => {
  let flight = 0;
  if (destination === '해외') {
    flight = 30;
  } else if (destination === '국내') {
    flight = 20;
  } else {
    flight = 10;
  }


  let hotel = 0;
  let day: number = 0;
  if (to) {
    day = to.getDate() - from.getDate();
    hotel = day * 10;
  }

  return {
    price: flight + hotel,
    day,
    target: destination,
  };

};

const resercion0 = reserve('국내', new Date('2020-05-04'));
console.log(resercion0.target);

const resercion1 = reserve('해외', new Date('2020-06-01'), new Date('2020-06-04'));
console.log(resercion1.price);

export {};