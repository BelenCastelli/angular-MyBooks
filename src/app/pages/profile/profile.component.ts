import { Component } from '@angular/core';
import {User} from "src/app/models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
//  public nombre:string;
//  public apellido:string
//  public correo:string;
//  public foto: string;

 public user:User
 public isHidden:boolean
 public isHidden2: boolean
 public color: string
 


  constructor(){
    // this.nombre = "Belén"
    // this.apellido = "Castelli Gubiotti";
    // this.correo = "belencastelli@gmail.com"
    // this.foto = "../../../assets/img-profile/avatar2.png"

    this.user = new User("Belén", "Castelli Gubiotti", "belencastelli@gmail.com", "../../../assets/img-profile/avatar2.png")
    this.isHidden = true;
    this.isHidden2 = true
    this.color;
  }
  // ¿Por qué no ponerlo en la clase user?
  modificarDatos(newName:string, newLastaName:string, newEmail:string,newPhoto:string){
    console.log(this.user.name);
    // ¿Se puede simplificar?

    this.user.name = newName === "" ?  this.user.name : newName;

    this.user.last_name = newLastaName == "" ? this.user.last_name : newLastaName;
 
    this.user.email = newEmail == "" ? this.user.email : newEmail;
  
    this.user.photo = newPhoto == "" ? this.user.photo : newPhoto;

    if(newName == "" && newLastaName == "" && newEmail == "" && newPhoto ==""){
      this.isHidden2 = false;
      this.isHidden = true;
      this.color = "rojo"
    } else
    {
      this.isHidden = false;
      this.isHidden2 = true
      this.color = "verde"
    }
    // Simplificado
    
    // modificarDatos(newName: string, newLastaName: string, newEmail: string, newPhoto: string) {
    //   this.user.name = newName || this.user.name;
    //   this.user.last_name = newLastaName || this.user.last_name;
    //   this.user.email = newEmail || this.user.email;
    //   this.user.photo = newPhoto || this.user.photo;
    
    //   if (!newName && !newLastaName && !newEmail && !newPhoto) {
    //     this.isHidden2 = false;
    //     this.isHidden = true;
    //     this.color = "rojo";
    //   } else {
    //     this.isHidden = false;
    //     this.isHidden2 = true;
    //     this.color = "verde";
    //   }
    // }

  }


}
