import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router"
import { Routed2Component } from './routed2.component';

const routes: Routes = [
    {
        path: 'routed2',
        component: Routed2Component
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class Routed2RoutingModule {

}