import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';


import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';

import { DepartmentRoute } from './department.router';

import { DepartmentServer } from './department.server';


@NgModule({
    imports: [
        ShareModule,
        DepartmentRoute
    ],
    declarations: [
        DepartmentComponent,
        DepartmentDetailComponent
    ],
    providers: [
        DepartmentServer
    ]
})

export class DepartmentModule { }