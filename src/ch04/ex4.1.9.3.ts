function createElement(tag: 'a'): HTMLAnchorElement;
function createElement(tag: 'canvas'): HTMLCanvasElement;
function createElement(tag: 'table'): HTMLTableElement;
function createElement(tag: string): HTMLElement {
  return document.createElement('div');
}

createElement('a');
createElement('canvas');
createElement('table');
createElement('div');

export {};