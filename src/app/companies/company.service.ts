import { Injectable } from '@angular/core';
import { Company } from './company';
import { COMPANIES } from './companies';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  companies = COMPANIES;
  private employeesUrl = '/api/employees';
  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.companies;
  }

  getSalaryExpenses() {
    return this.http.get(this.employeesUrl).pipe();
  }
}
