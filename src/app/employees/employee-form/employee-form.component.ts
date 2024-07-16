import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  @Input() submit: any;
  @Output() formsubmit = new EventEmitter();
  private _fb = inject(FormBuilder);
  public empForm!: FormGroup;
  employeeRoles = ['Product Designer', 'Flutter Developer', 'QA Tester', 'Product Owner'];
  customInitDate!: Date;


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

    //form.value['startDate'] = new Date(form.value['startDate']).toISOString();
    //form.value['endDate'] = (form.value['endDate'] != '') ? new Date(form.value['endDate']).toISOString() : ''
    this.formsubmit.emit(form);
  }

}
