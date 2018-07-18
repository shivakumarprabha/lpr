import { NgModule ,Component } from  '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LprComponent } from './lpr/lpr.component';
import { FaqComponent } from './faq/faq.component';



const appRoutes : Routes =[
    {path:'',component:LprComponent},
    {path:'lpr',component:LprComponent},
    {path:'faq',component:FaqComponent},
    // {path:'bit',loadChildren:'./bit/bit.module#BitModule'},
    // {path:'pmo',loadChildren:'./pmo/pmo.module#PmoModule'},
    // {path:'ft',loadChildren:'./ft/ft.module#FtModule'},
    // {path:'implimantation',loadChildren:'./implimantation/implimantation.module#ImplimantationModule'},
    // {path:'operationteam',loadChildren:'./operationteam/operationteam.module#OperationteamModule'},
    // {path:'itmanager',loadChildren:'./itmanager/itmanager.module#ItmanagerModule'},
    
    
    

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }