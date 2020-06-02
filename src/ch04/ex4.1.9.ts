
// 단축형 호출 시그니처
// type Log = (message: string, userId?: string) => void;

// 전체 호출 시그니처
type Log = {
  (message: string, userId?: string): void,
};


type Reservation {

}


type Reserve = {
  (from: Date, to: Date, destinations: string): Reservation,
  (from: Date, destinations: string): Reservation,
};

let reserve: Reserve = (from, to, destination) => {

};
export {};
