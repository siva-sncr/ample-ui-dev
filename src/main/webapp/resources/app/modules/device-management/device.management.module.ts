import { NgModule }  from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DeviceManagementComponent } from './device.management.component';
import { DeviceManagementRouteModule } from './device.management.route';

@NgModule ({
    declarations: [
        DeviceManagementComponent
    ],
    imports: [
        DeviceManagementRouteModule,
        SharedModule
    ],
})

export class DeviceManagementModule { }