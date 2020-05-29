let d = [1, 'a'];
d.map(_ => {
  if (typeof _ === 'number') {
    return _ * 3;
  }
  return _.toUpperCase();
});

function buildArray() {
  let a = [];  // any
  a.push(1);   // number[]
  a.push('x'); // (string | number)[]
  return a;
}

let myArray = buildArray(); // (string | number)[]
myArray.push(true); // Error

export {};
