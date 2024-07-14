import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent {
  private _dataService = inject(EmployeeService);
  public _router = inject(Router);

  addEmployee(input: any) {
    this._dataService.saveData(input.value).pipe(take(1)).subscribe();
    this._router.navigate(['/employee/list']);
  }

}
