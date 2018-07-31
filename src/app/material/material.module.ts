import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import @angular/material components to be used //
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  declarations: [],
})
export class MaterialModule {}
