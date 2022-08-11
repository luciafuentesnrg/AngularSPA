import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavoritesComponent } from './favorites.component';
import { ReviewsComponent } from './reviews.component';
import { EditProfileComponent } from './edit-profile.component';
import { AuthGuard } from '../core/Guards/auth.guard';

@NgModule({
  declarations: [FavoritesComponent, ReviewsComponent, EditProfileComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [AuthGuard],
})
export class UserModule {}
