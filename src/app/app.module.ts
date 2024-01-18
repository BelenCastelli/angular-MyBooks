import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { RefPipe } from './pipes/ref.pipe';
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLogin2Component } from './component/form-login2/form-login2.component';
import { FormRegister2Component } from './component/form-register2/form-register2.component';
import { ToastrModule } from 'ngx-toastr';
import  { BrowserAnimationsModule }  from  '@angular/platform-browser/animations' ;
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    RefPipe,
    CardComponent,
    AddBookComponent,
    UpdateBookComponent,
    LoginComponent,
    FormLoginComponent,
    FormLogin2Component,
    FormRegister2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
