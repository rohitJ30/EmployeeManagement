import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/list',
    pathMatch: 'full'
  }, {
    path: 'employee',
    loadChildren: () => import('./employees/employees.module').then(emp => emp.EmployeesModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }