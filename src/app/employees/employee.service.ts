import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  private employeesUrl = environment.apiUrl;

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
      company: this.fetchCompanyId(newEmployee.company),
      salary: newEmployee.salary,
    };
    console.log(`Inside employee service newEmployee.firstName looks like ${newEmployee.firstName}`);
    return this.http.post<Employee>(this.employeesUrl, employee).pipe(catchError(this.handleError));
  }

  fetchCompanyId(name) {
    switch (name) {
      case 'Apple': {
        return '5b62a3d5e7179a0733447881';
        break;
      }
      case 'Tesla': {
        return '5b62a42de7179a073344789f';
        break;
      }
      case 'IBM': {
        return '5b62a456e7179a07334478a5';
        break;
      }
      case 'Facebook': {
        return '5b62a46fe7179a07334478b4';
        break;
      }
      case 'General Electric': {
        return '5b62a483e7179a07334478c2';
        break;
      }
      case 'Twitter': {
        return '5b62a497e7179a07334478ce';
        break;
      }
      default: {
        // statements;
        break;
      }
    }
  }

  getLastEmployee(): Observable<any> {
    return this.http.get(this.employeesUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  // testing in development with hard coded json
  // getLastEmployee(): Observable<any> {
  //   return this.http.get('/assets/test-data.json').pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
