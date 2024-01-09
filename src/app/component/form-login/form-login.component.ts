import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User

  constructor(private router: Router){
    this.user = new User()
  }

  login(form:NgForm){
    console.log(form.value);
    console.log(this.user);

    this.router.navigate(['/books'])
    // limpiar el formulario "a mano". con .reset() desde angular

    // this.user.email =''
    // this.user.password =''
    
    
  }
}
