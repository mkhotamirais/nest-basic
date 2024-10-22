import { Injectable } from '@nestjs/common';
import { Book, books } from './BooksDb';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBooks(): Book[] {
    return books;
  }

  getBookById(id: number): Book {
    return books.find((book) => book.id === id);
  }

  createBook(book: Book): { message: string; data: Book } {
    const newID = books[books.length - 1].id + 1;
    book.id = newID;
    if (!book.author || !book.title || !book.publicationYear) {
      return { message: 'All fields are required', data: null };
    }
    books.push(book);
    return { message: 'Book created', data: book };
  }
}
