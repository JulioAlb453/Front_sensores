import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterZNComponent } from './register-zn/register-zn.component';
import { LoginZNComponent } from './login-zn/login-zn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RegisterZNComponent,
    LoginZNComponent
  ],
  exports: [
    RegisterZNComponent,
    LoginZNComponent
  ]
})
export class LoginModule { }
