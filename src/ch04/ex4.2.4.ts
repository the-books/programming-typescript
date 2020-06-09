type MyEvent<T> = {
  target: T;
  type: string;
};

type ButtonEvent = MyEvent<HTMLButtonElement>;

const myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click',
};

type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

function triggerEvent<T>(event: MyEvent<T>): void {
  console.log('triggerEvent');
}

triggerEvent({   // T는 Element | null
  target: document.querySelector('#myButton'),
  type: 'mouseover',
});

export {};
