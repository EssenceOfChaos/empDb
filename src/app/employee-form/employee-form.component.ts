import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employees/employee.service';

// Company Interface
export interface Company {
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  employees = [];
  submitted = false;
  constructor(private employeeService: EmployeeService) {}

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    company: new FormControl('', [Validators.required]),
    salary: new FormControl(''),
  });
  companies: Company[] = [
    { name: 'Tesla', symbol: 'TSLA' },
    { name: 'IBM', symbol: 'IBM' },
    { name: 'Apple', symbol: 'AAPL' },
    { name: 'Facebook', symbol: 'FB' },
    { name: 'General Electric', symbol: 'GE' },
    { name: 'Twitter', symbol: 'TWTR' },
  ];
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  onSubmit() {
    this.employeeService
      .createEmployee(this.employeeForm.value)
      .subscribe(res => console.log(`Employee Form Component - Employee created with result: ${res}`));
    console.log(this.employeeForm.value);
    this.employeeForm.reset();
  }
}
