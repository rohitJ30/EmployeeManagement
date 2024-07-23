import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  @Input() submit: any;
  @Output() formsubmit = new EventEmitter();
  @ViewChild('startdatepicker', { static: false })
  startdatepicker!: MatDatepicker<any>;
  @ViewChild('enddatepicker', { static: false })
  enddatepicker!: MatDatepicker<any>;
  private _fb = inject(FormBuilder);
  public empForm!: FormGroup;
  employeeRoles = ['Product Designer', 'Flutter Developer', 'QA Tester', 'Product Owner'];

  ngOnInit() {
    this.empForm = this._fb.group({
      empName: ['', [Validators.required]],
      empRole: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['']
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      this.submit = true;
      return;
    }

    form.value['startDate'] = new Date(form.value['startDate']).toISOString();
    form.value['endDate'] = (form.value['endDate'] != '') ? new Date(form.value['endDate']).toISOString() : ''
    this.formsubmit.emit(form);
  }
}
