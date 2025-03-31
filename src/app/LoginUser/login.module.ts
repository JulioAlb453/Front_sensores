import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterZNComponent } from './register-zn/register-zn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterZNComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
