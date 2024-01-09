import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login2',
  templateUrl: './form-login2.component.html',
  styleUrls: ['./form-login2.component.css']
})
export class FormLogin2Component {
  public loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.buildForm()
}

private buildForm(){

  let minPassLength: number = 8
  
  this.loginForm = this.formBuilder.group({
  
  email:[,[Validators.email, Validators.required]],
  contraseña: [,[Validators.required, Validators.minLength(minPassLength)]],
  
  });
}


public login(){
const user = this.loginForm.value
this.loginForm.reset();
console.log(user);
}
}

