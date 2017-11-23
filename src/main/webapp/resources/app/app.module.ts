import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { TreeModule } from 'angular-tree-component';

import { AmpleComponent } from './ample.component';
import { AmpleRouteModule } from './ample.route';
import { LoginModule } from './modules/login/login.module';
import { DevicesModule } from './modules/devices/devices.module';
import { HeaderComponent } from './modules/header/header.component';
import { TreeviewComponent } from './modules/treeview/treeview.component';

import { Config } from './provider/config.provider';

@NgModule({
  declarations: [
    HeaderComponent,
    TreeviewComponent,
    AmpleComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    DataTableModule,
    AngularMultiSelectModule,
    TreeModule,
    AmpleRouteModule,
    LoginModule,
    DevicesModule
  ],
  providers: [Config],
  bootstrap: [AmpleComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})

export class AmpleModule { }