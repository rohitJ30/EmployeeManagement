import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EmployeesModule { }
