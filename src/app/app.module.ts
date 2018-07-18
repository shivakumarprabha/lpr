import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FileUploadModule} from 'ng2-file-upload';
import {AccordionModule} from "ng2-accordion";
//import { SlimScrollModule } from 'ng2-slimscroll';
import { AppComponent } from './app.component';
import { Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { APP_BASE_HREF } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { LeftmenuAdminComponent } from './leftmenu-admin/leftmenu-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { CommonService } from './common.service';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { LprModule } from './lpr/lpr.module';
import { BitModule } from './bit/bit.module';
import { PmoModule } from './pmo/pmo.module';
import { ImplimantationModule } from './implimantation/implimantation.module';
import { ItmanagerModule } from './itmanager/itmanager.module';
import { OperationteamModule } from './operationteam/operationteam.module';
import { FtModule } from './ft/ft.module';
import { CreatelprModule } from './createlpr/createlpr.module';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [
    AppComponent,
     HeaderComponent,
     LeftmenuComponent,
    FaqComponent,
    LeftmenuAdminComponent




  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    FileUploadModule,
    AccordionModule,
    BrowserAnimationsModule,
    //SlimScrollModule,
    MaterialModule,
    AppRoutingModule,
    BootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    LprModule,
    BitModule,
    PmoModule,
    ImplimantationModule,
    ItmanagerModule,
    OperationteamModule,
    FtModule,
    CreatelprModule





  ],
   providers: [CommonService,HttpClient,{provide: APP_BASE_HREF, useValue: '/myRequest'}],
   /*providers: [],*/

  bootstrap: [AppComponent]
})
export class AppModule {  }
