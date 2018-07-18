import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatelprComponent } from './createlpr.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { CreateBehalfComponent } from './create-behalf/create-behalf.component';

const routes: Routes = [
  {
    path:'', component:CreatelprComponent,
    children:[
      {path:'createlpr/home',component:CreateHomeComponent},
      {path:'createlpr/behalf',component:CreateBehalfComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatelprRoutingModule { }
