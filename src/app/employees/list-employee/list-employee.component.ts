import { Component } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent {

  employeeList = [{
    name: 'Samantha',
    role: 'FulStack Developer',
    start_date: '2024-10-22',
    end_date: '2024-08-21'
  }, {
    name: 'David',
    role: 'Product Manager',
    start_date: '2024-10-22',
    end_date: '2024-08-21'
  }, {
    name: 'Sarah',
    role: 'QA Tester',
    start_date: '2024-10-22',
    end_date: '2024-08-21'
  }]

}
