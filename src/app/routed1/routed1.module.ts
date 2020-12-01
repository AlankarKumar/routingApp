import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routed1Component } from './routed1.component';
import { Routed1RoutingModule } from './routed1-routing.module';



@NgModule({
  declarations: [Routed1Component],
  imports: [
    CommonModule,
    Routed1RoutingModule
  ]
})
export class Routed1Module { }
