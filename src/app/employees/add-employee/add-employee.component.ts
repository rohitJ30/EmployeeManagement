import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  public submit = false;

  onSubmit(form: FormGroup) {
    this.submit = true;
    if (!form.valid) {
      return;
    }

    //saved in database or locally in browser
    sessionStorage.setItem('employee', JSON.stringify(form.value));
  }
}
