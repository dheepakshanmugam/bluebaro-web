import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatFormFieldModule, // Add MatFormFieldModule to imports array
    FormsModule,
    MatDatepickerModule,
    MatExpansionModule,
    LoginRoutingModule,
   
  ]
})
export class LoginModule { }
