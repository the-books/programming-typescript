import * as _ from 'underscore';

type Card = {
  suit: string;
  character: string;
};

const deck: Card[] = [
  { suit: 'Spade', character: 'A' },
  { suit: 'Heart', character: 'A' },
  { suit: 'Diamond', character: 'A' },
  { suit: 'Club', character: 'A' },
];

const shuffledDeck = _.shuffle(deck);


console.log(deck);
console.log('=======');
console.log(shuffledDeck);
console.log('=======');

console.log('set: 2');
deck[0].character = '2';
deck[1].character = '2';
deck[2].character = '2';
deck[3].character = '2';

console.log('=======');
console.log(deck);
console.log('=======');
console.log(shuffledDeck);
