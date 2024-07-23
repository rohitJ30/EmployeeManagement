import { Component, inject, Input, ViewChild } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { EmployeeFormComponent } from 'src/app/employees/employee-form/employee-form.component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DatepickerComponent {

  @Input() controlType!: string;
  @ViewChild('picker', { static: false }) pickers!: MatDatepicker<any>;
  private _employeeForm = inject(EmployeeFormComponent);


  today(field: string) {
    this._employeeForm.empForm.patchValue({ [field]: new Date() });
    this.pickers.close();
  }

  nextMonday(field: string) {
    var date = new Date();
    date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
    this._employeeForm.empForm.patchValue({ [field]: date });
    this.pickers.close();
  }

}
