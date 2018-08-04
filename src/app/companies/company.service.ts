import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  // private companiesUrl = '/api/companies';
  private salaryDataUrl = '/api/companies/salaries';
  constructor(private http: HttpClient) {}

  // get("/api/companies")
  // getCompanies(): Observable<Company[]> {
  //   return this.http.get<Company[]>(this.companiesUrl).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  getSalaryData() {
    return this.http.get(this.salaryDataUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // General Error Handling Function
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
