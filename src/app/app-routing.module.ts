import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {SecondComponent} from './second/second.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'firstComponent',
    pathMatch:'full'
  },
  {path:'firstComponent',component:FirstComponent},
  {path:'firstComponent/:id',component:FirstComponent},
  {path:'secondComponent',component:SecondComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
