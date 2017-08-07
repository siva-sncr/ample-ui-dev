import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AmpleComponent } from './ample.component';
import { AmpleRouteModule } from './ample.route';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AmpleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    AmpleRouteModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AmpleComponent]
})

export class AmpleModule { }