import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routed2Component } from './routed2.component';
import { Routed2RoutingModule } from './routed2-routing.module';



@NgModule({
  declarations: [Routed2Component],
  imports: [
    CommonModule,
    Routed2RoutingModule
  ]
})
export class Routed2Module { }
