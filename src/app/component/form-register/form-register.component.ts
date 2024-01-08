import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public user: User

  constructor(private router: Router){
    this.user = new User()
  }

  register(form:NgForm){
    console.log(form.value);
    console.log(this.user);

    // this.router.navigate(['/login'])
   
    
  }
}
