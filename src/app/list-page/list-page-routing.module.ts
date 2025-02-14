import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistPageComponent } from './productlist-page.component';
import { AddEditListpageComponent } from './add-edit-listpage/add-edit-listpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';


const routes: Routes = [
  {

    path: '',
    component: ProductlistPageComponent
  },
  {
    path: 'add',
    component: AddEditListpageComponent
  },
  {
    path: 'edit/:data',
    component: AddEditListpageComponent
  },
  {
    path: 'list/:data',
    component: ProductListComponent
  },
  {
    path: 'view/:data',
    component: ViewCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPageRoutingModule { }
