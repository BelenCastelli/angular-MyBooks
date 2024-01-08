import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private books: Book[] = [
    new Book ("1984", "George Orwell", 8.50, "https://imagessl4.casadellibro.com/a/l/s7/44/9788499890944.webp",100),
      new Book("Un mundo feliz", "Aldous Huxley", 10.40, "https://imagessl7.casadellibro.com/a/l/s7/57/9788497594257.webp",101),
      new Book ("Fahrenheit 451", "Ray Bradbury", 10.40, "https://imagessl8.casadellibro.com/a/l/s7/08/9788466345408.webp",102),
      new Book ("Orgullo y prejuicio", "Jane Austen", 11.95, "https://imagessl2.casadellibro.com/a/l/s7/42/9788467045642.webp",103),

  ]

  constructor() { 
    // this.books = [
    //   new Book ("1984", "George Orwell", 8.50, "https://imagessl4.casadellibro.com/a/l/s7/44/9788499890944.webp",100),
    //   new Book("Un mundo feliz", "Aldous Huxley", 10.40, "https://imagessl7.casadellibro.com/a/l/s7/57/9788497594257.webp",101),
    //   new Book ("Fahrenheit 451", "Ray Bradbury", 10.40, "https://imagessl8.casadellibro.com/a/l/s7/08/9788466345408.webp",102),
    //   new Book ("Orgullo y prejuicio", "Jane Austen", 11.95, "https://imagessl2.casadellibro.com/a/l/s7/42/9788467045642.webp",103),
    
    // ]
  }

  public getAll():Book[]{
    return this.books
  }

  public getOne(idBook:number): Book | null{

    // con .find -> buscar primera coincidencia en el array del valor dado
    
    let libroFiltrado: Book;
    let result: Book | undefined
    libroFiltrado = this.books.find((libro) => libro.id_book == idBook); 
      if (libroFiltrado) {
        console.log(libroFiltrado);
        result = libroFiltrado;
    } else {
        console.log(`No se encontró un libro con el ID ${idBook}`);
        result = undefined; // Puedes devolver un valor predeterminado o null en lugar de undefined
    }

    return result
  }
  

  // Con bucle for: 

  // let result: Book; 
  //   for(let book of this.books){
  //     if(book.id_book == idBook){
  //       result = book
  //       break;
  //     } 
  //   }
  //   return result
  // }

  public add(book:Book): void{
    this.books.push(book)

  }

  public edit(book: Book): boolean{
    let result = false;
    
    for(let i = 0; i<this.books.length; i++){
      if(this.books[i].id_book == book.id_book){
        this.books.splice(i,1,book)
        result = true;
        break;
      } else {
        console.log("No se ha encontrado el libro con esa referencia");
        }
    }

    return result

  }

  public delete(id_book:number): boolean{
    let result: boolean = false; 
    

    // for(let i = 0; i<this.books.length; i++){
    //   if(this.books[i].id_book == id_book){
    //     this.books.splice(i,1) 
    //     result = true
    //     break;
    //   }
    // }
    // return result

    let indice: number;

    // El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la 
    // función de prueba proporcionada. En caso contrario devuelve -1.

    // obtengo el el primer indice que coincide con idbook del parametro

    indice = this.books.findIndex((book) => book.id_book == id_book)
    console.log(indice);
    
    if(indice != -1){
      this.books.splice(indice, 1)
      result = true
    }
    return result
  }


}
