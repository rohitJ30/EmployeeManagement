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
  alertMsg: string = '';

  ngOnInit() {
    this._dataService.getEmployee().pipe(take(1)).subscribe();
  }

  get allCurrentEmployees() {
    return this._dataService.sharedData().filter(item => item.endDate == '');
  }

  get allPreviousEmployees() {
    return this._dataService.sharedData().filter(item => item.endDate != '');
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
      this.alertMsg = 'Employee data has been deleted!';
    }
  }

}
