enum Color {
  Red = '#c10000',
  Blue = '#007ac1',
  Pink = 0xc10050,
  White = 255,
}

let red = Color.Red; // Color
let pink = Color.Pink; // Color

let a = Color.Red; // Color
let b = Color.Green; // Error

let c = Color[255]; // string
let d = Color[6]; // string!!!

export {};
