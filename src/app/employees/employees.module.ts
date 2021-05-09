import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from './state/employee.effects';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("employees", employeeReducer),
    EffectsModule.forFeature([EmployeeEffect])
  ]
})
export class EmployeesModule { }
