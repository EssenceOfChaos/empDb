import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  salaryData;

  constructor(private companiesService: CompanyService) {}

  ngOnInit() {
    this.getSalaryData();
  }

  getSalaryData() {
    this.salaryData = this.companiesService.getSalaryData().subscribe(res => {
      if (res) {
        console.log(res);
        this.salaryData = res;
      }
    });
  }
}
