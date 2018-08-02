import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { last } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  private employeesUrl = '/api/employees';

  constructor(private http: HttpClient) {}
  // get("/api/employees")
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  // post("/api/employees")
  createEmployee(newEmployee: Employee): Observable<Employee> {
    const employee = {
      firstName: newEmployee.firstName,
      lastName: newEmployee.lastName,
      streetAddress: newEmployee.streetAddress,
      city: newEmployee.city,
      postalCode: newEmployee.postalCode,
      company: newEmployee.company,
      salary: newEmployee.salary,
    };
    console.log(`Inside employee service newEmployee.firstName looks like ${newEmployee.firstName}`);
    return this.http.post<Employee>(this.employeesUrl, employee).pipe(catchError(this.handleError));
  }

  getLastEmployee() {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
