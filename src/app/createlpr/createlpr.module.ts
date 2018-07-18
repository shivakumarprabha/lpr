import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatelprRoutingModule } from './createlpr-routing.module';
import { CreatelprComponent } from './createlpr.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { CreateBehalfComponent } from './create-behalf/create-behalf.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    CreatelprRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule
  ],
  declarations: [CreatelprComponent, 
    CreateHomeComponent, 
    CreateBehalfComponent]
})
export class CreatelprModule { }
