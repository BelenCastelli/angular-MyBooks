import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(public booksService:BooksService,public router: Router){

  }

    anadirLibro(titulo:string, autor:string, precio:number,ref:number, foto: string):Book[]{
    if (titulo && autor && precio && ref && foto){
    let book = new Book(titulo, autor, precio, foto, ref)
    this.booksService.add(book)
    console.log(this.booksService.getAll());
    this.router.navigate(['/books'])
    }

   
    return this.booksService.getAll()
  }


}
