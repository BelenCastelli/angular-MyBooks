import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private books: Book[];

  constructor() { }

  public getAll():Book[]{
    return this.books
  }

  public getOne(id_book:number): Book {
    return this.books[0]
  }

  public add(book:Book): void{

  }

  public edit(book: Book): boolean{
    let result = true
    return result
  }

  public delete(id_book:number): boolean{
    let result = true
    return result
  }
}
