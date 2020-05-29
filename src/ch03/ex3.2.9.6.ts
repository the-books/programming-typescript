type Returns = string | null;

function trueOrNull(isTrue: boolean): Returns {
  if (isTrue) {
    return 'true';
  }
  return null;
}

function(a: string, b: number) {
  return a || b;
}

export {};
