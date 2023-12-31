import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() libroPadre: Book;
@Input() buscarLibro: Book;
@Input() odd:boolean; 
// @Input() indice:number
@Input() idLibro:number

@Output() eventoElimina = new EventEmitter<number>();

  constructor(){

  }

    eliminarLibro() {
      // console.log(this.indice);
      this.eventoElimina.emit(this.idLibro)
      // this.eventoElimina.emit(this.indice)
  
    }

}
