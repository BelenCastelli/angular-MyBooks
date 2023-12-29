import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[]

  constructor(){
    this.books = [
      new Book ("1984", "George Orwell", 8.50, "https://imagessl4.casadellibro.com/a/l/s7/44/9788499890944.webp",100),
      new Book("Un mundo feliz", "Aldous Huxley", 10.40, "https://imagessl7.casadellibro.com/a/l/s7/57/9788497594257.webp",101),
      new Book ("Fahrenheit 451", "Ray Bradbury", 10.40, "https://imagessl8.casadellibro.com/a/l/s7/08/9788466345408.webp",102),
      new Book ("Orgullo y prejuicio", "Jane Austen", 11.95, "https://imagessl2.casadellibro.com/a/l/s7/42/9788467045642.webp",103),

    ]

    // this.books = []
  }
  
  eliminaLibro(indice:number){
    this.books.splice(indice, 1);
  }
  // anadirLibro(titulo:string, autor:string, precio:number,ref:number, foto: string):Book[]{
  //   if (titulo && autor && precio && ref && foto){
  //   let book = new Book(titulo, autor, precio, foto, ref)
  //   this.books.push(book)
  //   console.log(this.books);
  //   }
    
  //   return this.books
  // }
}
