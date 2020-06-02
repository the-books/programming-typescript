type Greet = (name: string) => string;

type Log = (message: string, userId?: string) => void;

type SumVariadicSafe = (...numbers: number[]) => number;

const log: Log = (message, userId) => {
  const time = new Date().toISOString();
  console.log(time, message, userId);
};

export {};
