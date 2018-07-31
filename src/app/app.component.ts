import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

export interface Company {
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  submitted = false;

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    state: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    companyControl: new FormControl('', [Validators.required]),
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
    // TODO: Use EventEmitter with form value
    console.log(this.employeeForm.value);
  }
}
