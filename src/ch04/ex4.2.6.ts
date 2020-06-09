type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};

const myElement = document.createElement("div");

const myEvent: MyEvent = {
  target: myElement,
  type: 'Click Event',
};

// Good
type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target;
  type: Type;
};

// Bad
type MyEvent3<Target extends HTMLElement = HTMLElement, Type extends string> = {
  target: Target;
  type: Type;
};

export {};
