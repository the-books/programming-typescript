let user: {
  readonly firstName: string,
} = {
  firstName: 'abby',
};

user.firstName;                     // string
user.firstName = 'abbey with an e'; // Error

export {};
