import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routed1Module } from './routed1/routed1.module';
import { Routed2Module } from './routed2/routed2.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    Routed1Module,
    Routed2Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
