import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  companies;
  constructor(private companiesService: CompanyService) {}
  ngOnInit() {
    this.companies = this.companiesService.getCompanies();
  }
}
