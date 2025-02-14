import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'app',
    children : [
  { path: 'product-list', loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule)},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
