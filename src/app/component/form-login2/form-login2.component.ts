import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login2',
  templateUrl: './form-login2.component.html',
  styleUrls: ['./form-login2.component.css']
})
export class FormLogin2Component {
  public loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService)
    {
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
  
  if(!this.loginForm.invalid){
    const user = this.loginForm.value
    this.loginForm.reset();
    this.toastr.success('Ha iniciado sesión correctamente', 
                        'Exito', 
                        {timeOut: 2000,
                        closeButton: true,}
    );
    console.log(user);
    this.router.navigate(['/books'])
  } else  {
    this.toastr.error('No se ha podido iniciar sesión', 
                      'Fallo',
                      {timeOut: 2000,
                        closeButton: true,}
    );
  }
}


}

