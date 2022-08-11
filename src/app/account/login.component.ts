import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { UserLogIn } from '../shared/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  flag: boolean = false;
  failed: boolean = false;
  email: string;
  password: string;
  user: UserLogIn = {
    email: '',
    password: '',
  };

  constructor(private loginService: AccountService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser(loginForm: NgForm) {
    this.user.email = loginForm.value.email;
    this.user.password = loginForm.value.password;
    this.loginService.Login(this.user).subscribe((data) => {
      if (data) {
        this.flag = true;
        setTimeout(() => {
          this._router.navigateByUrl('/');
        }, 10000);
      } else {
        this.failed = true;
      }
    });
  }
}
