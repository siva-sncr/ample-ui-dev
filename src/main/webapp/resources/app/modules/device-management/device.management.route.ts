import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DeviceManagementComponent } from './device.management.component';

@NgModule ({
    imports : [RouterModule.forChild([
        {
            path : 'device-management',
            component : DeviceManagementComponent
        }
    ])],
    exports : [RouterModule]
})

export class DeviceManagementRouteModule {}