import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        console.log('login_User', user);
        alert('Email and Password Match');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Email and passsword Not match');
        this.router.navigate(['auth/login']);
      }
    });
    console.log(this.loginForm.value);
  }
  nevigateRoute(e: string) {
    if (e === 'signup') {
      this.router.navigate(['auth/signup']);
    }
    if (e === 'forget') {
      this.router.navigate(['auth/forget']);
    }
  }
}
