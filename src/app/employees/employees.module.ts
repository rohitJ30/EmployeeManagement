import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';

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
  },{
    path: 'view/:id',
    component: DetailsEmployeeComponent
  }]
}]


@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    EmployeeFormComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EmployeesModule { }
