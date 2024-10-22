export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
  },
  { id: 3, title: '1984', author: 'George Orwell', publicationYear: 1949 },
];
