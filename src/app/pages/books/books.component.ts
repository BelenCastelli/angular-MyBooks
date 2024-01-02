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
    // this.booksService.add( new Book ("1984", "George Orwell", 8.50, "https://imagessl4.casadellibro.com/a/l/s7/44/9788499890944.webp",100))
    // this.booksService.add(new Book("Un mundo feliz", "Aldous Huxley", 10.40, "https://imagessl7.casadellibro.com/a/l/s7/57/9788497594257.webp",101))
    // this.booksService.add(new Book ("Fahrenheit 451", "Ray Bradbury", 10.40, "https://imagessl8.casadellibro.com/a/l/s7/08/9788466345408.webp",102))
    // this.booksService.add(new Book ("Orgullo y prejuicio", "Jane Austen", 11.95, "https://imagessl2.casadellibro.com/a/l/s7/42/9788467045642.webp",103))
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
