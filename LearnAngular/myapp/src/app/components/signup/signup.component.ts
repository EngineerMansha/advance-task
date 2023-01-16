import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
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
    this._http.post<any>('http://localhost:3000/signup', e).subscribe((res) => {
      console.log(res);
      alert('Your Account is created Please login With Email and Password');
      this.route.navigate(['/login']);
    });
  }
}
