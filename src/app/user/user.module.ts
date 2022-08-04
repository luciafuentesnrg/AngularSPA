import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavoritesComponent } from './favorites.component';
import { ReviewsComponent } from './reviews.component';
import { EditProfileComponent } from './edit-profile.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    ReviewsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
