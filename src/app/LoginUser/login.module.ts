import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterZNComponent } from './register-zn/register-zn.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginZNComponent } from './login-zn/login-zn.component';

@NgModule({
  declarations: [
    RegisterZNComponent,
    LoginZNComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class LoginModule { }
