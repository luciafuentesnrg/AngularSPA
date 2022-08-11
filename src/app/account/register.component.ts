import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidatorService } from '../core/Custom Validators/passwordValidator.validator';
import { AccountService } from '../core/services/account.service';
import { UserRegister } from '../shared/models/UserRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  flag: boolean = false;
  constructor(
    private fb: FormBuilder,
    private customValidator: passwordValidatorService,
    private registerService: AccountService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            this.customValidator.patternValidator(),
          ]),
        ],
        confirmPassword: ['', Validators.required],
        DateOfBirth: ['', Validators.required],
      },
      {
        Validator: this.customValidator.MatchPassword(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
      const registration: UserRegister = {
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        lastName: this.registerForm.controls['lastName'].value,
        firstName: this.registerForm.controls['firstName'].value,
        dateOfBirth: this.registerForm.controls['DateOfBirth'].value,
      };
      this.registerService.Register(registration).subscribe((r) => {
        if (r) {
          this.flag = true;
          setTimeout(() => {
            this._router.navigateByUrl('/Account/Login');
          }, 10000);
        } else {
          this.flag = false;
        }
      });
    }
  }

  //simulate log in, nothing actually happens
  // this.submitted = true;
  // if (this.registerForm.valid) {
  //   alert(
  //     'Form Submitted Successfully!! \n Check the values in browser console'
  //   );
  //   console.table(this.registerForm.value);
  // }
}
