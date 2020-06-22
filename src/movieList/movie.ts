type Movie = {
  id: string;
  title: string;
  year: string;
  runtime: string;
  directors: string[];
  stars: string[];
};

type MovieList = {
  id: string;
  todo: string;
  movies: Movie[];
};

const myList1: MovieList = {
  id: 'm00001',
  todo: 'SF Collection',
  movies: [
    {
      id: '1',
      title: 'Inception',
      year: '2010',
      runtime: '2h 28min',
      directors: ['Christopher Nolan'],
      stars: [
        'Leonardo DiCaprio',
        'Joseph Gordon-Levitt',
        'Ellen Page',
        'Tom Hardy',
      ],
    },
  ],
};
