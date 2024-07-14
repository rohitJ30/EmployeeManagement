import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'add',
    component: AddEmployeeComponent
  }, {
    path: 'list',
    component: ListEmployeeComponent
  }]
}]


@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
