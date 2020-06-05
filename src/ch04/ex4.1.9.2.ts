type CreateElement = {
  (tag: 'a'): HTMLAnchorElement,
  (tag: 'canvas'): HTMLCanvasElement,
  (tag: 'table'): HTMLTableElement,
  (tag: string): HTMLElement,
};
const createElement: CreateElement = (tag: string): any => {
  return 'a';
};

createElement('a');
createElement('canvas');
createElement('table');
createElement('div');

export {};