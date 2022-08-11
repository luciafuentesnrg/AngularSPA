import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateCastComponent } from './create-cast.component';
import { TopPurchasesComponent } from './top-purchases.component';
import { CreateMovieComponent } from './create-movie.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from '../core/Guards/admin.guard';

@NgModule({
  declarations: [
    CreateCastComponent,
    TopPurchasesComponent,
    CreateMovieComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AdminGuard],
})
export class AdminModule {}
