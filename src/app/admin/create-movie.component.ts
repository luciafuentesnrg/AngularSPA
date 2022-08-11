import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidatorService } from 'src/app/core/Custom Validators/passwordValidator.validator';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  createMovieForm!: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createMovieForm = this.fb.group({
      title: ['', Validators.required],
      posterUrl: ['', Validators.required],
      overview: ['', Validators.required],
      tagline: ['', Validators.required],
      budget: ['', Validators.required],
      revenue: ['', Validators.required],
      releaseDate: ['', Validators.required],
      runTime: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.createMovieForm.valid) {
      alert(
        'Form Submitted Successfully!! \n Check the values in browser console'
      );
      console.table(this.createMovieForm.value);
    }
  }
}
