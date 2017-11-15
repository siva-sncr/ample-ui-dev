import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from "angular2-datatable";

import { DevicesComponent } from './devices.component';
import { DevicesRouteModule } from './devices.route';

@NgModule ({
    declarations: [
        DevicesComponent
    ],
    imports: [
        DataTableModule,
        DevicesRouteModule,
        SharedModule
    ],
})

export class DevicesModule { }