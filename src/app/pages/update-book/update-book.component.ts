import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  constructor(public booksService: BooksService,
              public router: Router){
  }

  modificarLibro(titulo:string, autor:string, precio:number,ref:number, foto: string):Book[]{
    let book: Book;
    if (titulo && autor && precio && ref && foto){
    book = new Book(titulo, autor, precio, foto, ref)
    this.booksService.edit(book);

    console.log(book);
    this.router.navigate(['/books'])
    } 
    return this.booksService.getAll()
  }
}
