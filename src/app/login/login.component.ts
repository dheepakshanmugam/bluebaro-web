import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  loginForm: FormGroup;
  passwordFieldType: string = 'password';
  isSaveButtonDisable:boolean = false;
  istested:any
  constructor(
    private _router: Router,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    debugger
    if (this.loginForm.valid) {
      this._router.navigateByUrl('app/product-list')
    }
}

}
