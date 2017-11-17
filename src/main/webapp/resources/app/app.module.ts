import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import {DataTableModule} from "angular2-datatable";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AmpleComponent } from './ample.component';
import { AmpleRouteModule } from './ample.route';
import { LoginModule } from './modules/login/login.module';
import { DevicesModule } from './modules/devices/devices.module';

import { Config } from './provider/config.provider';

@NgModule({
  declarations: [
    AmpleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    DataTableModule,
    AngularMultiSelectModule,
    AmpleRouteModule,
    LoginModule,
    DevicesModule
  ],
  providers: [Config],
  bootstrap: [AmpleComponent]
})

export class AmpleModule { }