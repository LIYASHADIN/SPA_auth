import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

import{HttpClientModule} from '@angular/common/http';

import { RouterModule,Routes } from '@angular/router';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'

const appRoute:Routes=
[
  { path:'register', component:RegisterComponent },
  { path:'',component:SignInComponent},
  

]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
