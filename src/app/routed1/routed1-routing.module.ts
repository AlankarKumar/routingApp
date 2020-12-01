import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Routed1Component } from './routed1.component';

const routes: Routes = [
    {
        path:'routed1',
        component: Routed1Component
    },
    {
        path:'routed1/:id',
        component:Routed1Component
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class Routed1RoutingModule{

}