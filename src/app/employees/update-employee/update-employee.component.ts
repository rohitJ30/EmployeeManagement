import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { take } from 'rxjs';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})

export class UpdateEmployeeComponent {
  @ViewChild('employeeForm') employeeForm!: EmployeeFormComponent;
  private _dataService = inject(EmployeeService);
  private _activatedRoute = inject(ActivatedRoute);
  public _router = inject(Router);
  employeeId: string | undefined | null | any;
  editData: any;

  ngOnInit() {
    this.employeeId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getDataFromId(this.employeeId);
  }

  getDataFromId(id: number) {
    this._dataService.getEmployeeById(id).subscribe((item: any) => {
      this.editData = item;
      this.setEmployeeData(item);
    });
  }

  setEmployeeData(input: any) {
    if (input != null) {
      this.employeeForm.empForm.patchValue({
        empName: input.empName,
        empRole: input.empRole,
        startDate: new Date(input.startDate).toISOString(),
        endDate: new Date(input.endDate).toISOString()
      });
    }
  }

  updateEmployee(form: FormGroup) {
    if (!this.employeeId) return;

    let input = Object.assign(form.value, { id: +this.employeeId });
    this._dataService.updateData(input, this.employeeId).pipe(take(1)).subscribe();
    this._router.navigate(['/employee/list']);
  }
}

