import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  sigupform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sigupform = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      mobileNumber: [''],
    });
  }
  signupSubmit(e) {
    console.log('submit Data', e);
    this._http.post<any>('http://localhost:3000/users', e).subscribe((res) => {
      console.log(res);
      alert('Your Account is created Please login With Email and Password');
      this.route.navigate(['auth/login']);
    });
  }
  nevigateRoute() {
    this.route.navigate(['auth/login']);
    console.log('click on login Achar Tag');
  }
}
