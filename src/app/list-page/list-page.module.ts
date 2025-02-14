import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ProductlistPageComponent } from './productlist-page.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditListpageComponent } from './add-edit-listpage/add-edit-listpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    ProductlistPageComponent,
    AddEditListpageComponent,
    ProductListComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
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
  ]
})
export class ListPageModule { }
