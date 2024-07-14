import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    this.formsubmit.emit(form);
  }

}
