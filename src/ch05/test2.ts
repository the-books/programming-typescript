import * as _ from 'underscore';

const deck: string[] = ['Spade', 'Heart', 'Diamond', 'Club'];
const shuffledDeck = _.shuffle(deck);


console.log(deck);
console.log('=======');
console.log(shuffledDeck);
console.log('=======');

console.log('set: 2');
deck[0] = 'Spade 2';
deck[1] = 'Heart 2';
deck[2] = 'Diamond 2';
deck[3] = 'Club 2';

console.log('=======');
console.log(deck);
console.log('=======');
console.log(shuffledDeck);
