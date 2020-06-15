// let set: Set = new Set;
// set.add(1).add(2).add(3)
// set.has(2)
// set.has(4)

class Set {
  has(value: number): boolean {
    return false;
  }
  add(value: number): this {
    return this;
  }
}

// tslint:disable-next-line: max-classes-per-file
class MutableSet extends Set {
  delete(value: number): boolean {
    return true;
  }
}


export {};
