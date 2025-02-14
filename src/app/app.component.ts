import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blueBaro';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = this.router.url !== '/login';
    });
  }
  addProduct(){
    this.router.navigateByUrl('app/product-list/add');
  }
  logOff(){
    this.router.navigateByUrl('/login');
  }
}
