import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

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
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
