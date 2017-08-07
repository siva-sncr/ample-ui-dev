import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AmpleComponent } from './ample.component';
import { LoginComponent } from './modules/login/login.component'

const routes : Routes = [
    {
        path : '',
        component : AmpleComponent
    },
    {
        path : 'login',
        component : LoginComponent
    }
];

@NgModule ({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})

export class AmpleRouteModule {}