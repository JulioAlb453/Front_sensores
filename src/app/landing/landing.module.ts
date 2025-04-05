import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLandingComponent } from './view-landing/view-landing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LandingModule { }
