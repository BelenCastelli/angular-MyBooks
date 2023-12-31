import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  buscarLibro: Book | undefined
  constructor(public booksService:BooksService){
  }

  buscar(idBook:number){
    this.buscarLibro = this.booksService.getOne(idBook)


  }
  eliminaLibro(id_book:number){
    console.log(id_book);
    this.booksService.delete(id_book)
  }

  // MEDIANTE COMUNICACION HIJO-PADRE
  // eliminaLibro(indice:number){
  //   this.books.splice(indice, 1);
  // }

  // anadirLibro(titulo:string, autor:string, precio:number,ref:number, foto: string):Book[]{
  //   if (titulo && autor && precio && ref && foto){
  //   let book = new Book(titulo, autor, precio, foto, ref)
  //   this.books.push(book)
  //   console.log(this.books);
  //   }
    
  //   return this.books
  // }
}
