import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register2',
  templateUrl: './form-register2.component.html',
  styleUrls: ['./form-register2.component.css']
})
export class FormRegister2Component {
 public registerForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private router: Router){
   this.buildForm()
  }

  private buildForm(){

    let minPassLength: number = 8

    this.registerForm = this.formBuilder.group({
      nombre: [,Validators.required],
      apellido: [, Validators.required],
      email:[,[Validators.email, Validators.required]],
      contraseña: [,[Validators.required, Validators.minLength(minPassLength)]],
      contraseña2: [,[Validators.required, this.check]]
    });
  }

  private check(control:AbstractControl){
    let resultado = {
      noMatch: true
    }

    // console.log(control)
    // console.log(control.parent)
    // console.log(control.parent?.value);
    // console.log(control.value);
    
  if(control.parent?.value.contraseña == control.value){
    resultado = null
  }
  return resultado

  }
  public register(){
    const user = this.registerForm.value
    this.registerForm.reset();
    console.log(user);
  }
}
