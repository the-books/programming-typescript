const enum Language {
  English,
  Spanish,
  Russian,
}

let a = Language.English; // Language

let b = Language.Tagalog; // Error

let c = Language[0]; // Error

let d = Language[6]; // Error

export {};
