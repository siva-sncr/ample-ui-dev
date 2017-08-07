import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';

@NgModule ({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        LoginRouteModule
    ],
})

export class LoginModule { }