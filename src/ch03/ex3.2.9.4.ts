type Color = 'red';

let x = Math.random() < .5;

if (x) {
  type Color = 'blue'; // Shadowed
  let b: Color = 'blue';
} else {
  let c: Color = 'red';
}

export {};
