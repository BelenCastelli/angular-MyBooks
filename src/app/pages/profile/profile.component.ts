import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 public nombre:string;
 public apellido:string
 public correo:string;
 public foto: string;


  constructor(){
    this.nombre = "Belén"
    this.apellido = "Castelli Gubiotti";
    this.correo = "belencastelli@gmail.com"
    this.foto = "../../../assets/img-profile/avatar2.png"
 
  }
}
