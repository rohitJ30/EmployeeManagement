import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { take } from 'rxjs';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent {

  //1563
  private _service = inject(EmployeeService);
  private _activatedRoute = inject(ActivatedRoute);
  employeeId!: Number | null;
  employeeDetails!: Employee[];

  ngOnInit() {
    this.employeeId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.getEmployee().pipe(take(1)).subscribe();
  }

  get getDetails() {
    return this._service.sharedData().filter(item => item.id == this.employeeId);
  }

}
