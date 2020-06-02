const x = {
  a() {
    return this;
  },
};

x.a(); // 객체 x

const a = x.a;

a(); // undefined

function fancyDate() {
  return `${ this.getDate() }/${ this.getMonth() }/${ this.getFullYear() }`;
}

fancyDate.call(new Date()); // '2/5/2020'
fancyDate(); // Error


function fancyDate2(this: Date) {
  return `${ this.getDate() }/${ this.getMonth() }/${ this.getFullYear() }`;
}

fancyDate2.call(new Date()); // '2/5/2020'
fancyDate2(); // Error

export {};
