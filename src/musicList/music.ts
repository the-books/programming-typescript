type Track = {
  title: string;
  writter?: string;
  composer?: string;
  length: [number, number]; // minute, second
};

type Album = {
  title: string;
  artist: string[];
  producer?: string;
  genre: string;
  label: string;
  released: Date;
  trackList: Track[];
};
