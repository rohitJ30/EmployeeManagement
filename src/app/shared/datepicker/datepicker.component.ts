import { Component, Input, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { EmployeeFormComponent } from 'src/app/employees/employee-form/employee-form.component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  @Input() picker!: string;
  @Input() controlname!: string;
  @ViewChild('employeeForm') employeeForm!: EmployeeFormComponent;
  @ViewChild('picker', { static: false })
  pickers!: MatDatepicker<any>;

  ngOnInit() { }

  today(type: string) {
    if (type == 'start') {
      this.employeeForm.empForm.patchValue({ startDate: new Date() })
    } else {
      this.employeeForm.empForm.patchValue({ endDate: new Date() })
    }
    this.pickers.close();
  }

  nextMonday(type: string) {
    if (type == 'start') {
      var date = new Date();
      date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
      this.employeeForm.empForm.patchValue({ startDate: date });
    } else {
      var date = new Date();
      date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7);
      this.employeeForm.empForm.patchValue({ endDate: date });
    }
    this.pickers.close();
  }

}
