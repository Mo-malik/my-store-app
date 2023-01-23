import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { Routes } from './routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes,{useHash:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
