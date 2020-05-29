const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function filp(f: Flippable) {
  return 'filpped it';
}

filp(Flippable.Chair); // 'filpped it'
filp(Flippable.Cup); // 'filpped it'
filp(12); // 'filpped it' !!!

export {};
