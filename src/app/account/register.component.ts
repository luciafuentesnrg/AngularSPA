import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidatorService } from '../core/Custom Validators/passwordValidator.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private customValidator: passwordValidatorService
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
      alert(
        'Form Submitted Successfully!! \n Check the values in browser console'
      );
      console.table(this.registerForm.value);
    }
  }
}
