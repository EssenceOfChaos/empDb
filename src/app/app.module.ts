import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import material design module
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './employees/employee.service';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from './companies/company.service';

@NgModule({
  declarations: [AppComponent, EmployeeFormComponent, CompaniesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService, CompanyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
