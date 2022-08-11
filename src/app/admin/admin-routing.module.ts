import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCastComponent } from './create-cast.component';
import { CreateMovieComponent } from './create-movie.component';
import { TopPurchasesComponent } from './top-purchases.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'Create-Movie', component: CreateMovieComponent },
  { path: 'Create-Cast', component: CreateCastComponent },
  { path: 'Top-Purchases', component: TopPurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
