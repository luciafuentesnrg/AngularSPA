import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPurchasesComponent } from '../admin/top-purchases.component';
import { EditProfileComponent } from './edit-profile.component';
import { FavoritesComponent } from './favorites.component';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  { path: 'Edit-Profile', component: EditProfileComponent },
  { path: 'Favorites', component: FavoritesComponent },
  { path: 'Purchases', component: TopPurchasesComponent },
  { path: 'Reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
