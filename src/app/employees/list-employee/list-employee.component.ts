import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent {

  private _dataService = inject(EmployeeService);
  public employeeList = [];

  ngAfterViewInit() {
    this._dataService.getEmployee().pipe(take(1)).subscribe();
  }

  get allData() {
    return this._dataService.sharedData;
  }

  trackEmployees(index: number, item: any) {
    if (item != undefined) {
      return item.id;
    }
  }

  deleteEmployee(id: number | undefined) {
    if (!id) return;
    if (confirm('Are you sure want to delete this employee?')) {
      this._dataService.removeData(id).pipe(take(1)).subscribe();
    }
  }

}
