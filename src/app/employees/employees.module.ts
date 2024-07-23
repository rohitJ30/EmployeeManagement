import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'add',
    component: AddEmployeeComponent
  }, {
    path: 'list',
    component: ListEmployeeComponent
  }, {
    path: 'add/:id',
    component: UpdateEmployeeComponent
  }]
}]


@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    EmployeeFormComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EmployeesModule { }
