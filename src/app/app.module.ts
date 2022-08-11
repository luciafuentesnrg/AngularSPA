import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './public/movie/movie.component';
import { MovieDetailsComponent } from './public/movie/movie-details.component';
import { CastDetailsComponent } from './public/cast/cast-details.component';
import { GenreComponent } from './public/genre/genre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CastComponent } from './public/cast/cast.component';
import { AddGenreComponent } from './public/genre/add-genre.component';
import { JwtAdderInterceptor } from './core/Interceptors/jwt-adder.interceptor';
import { AuthGuard } from './core/Guards/auth.guard';
import { AdminGuard } from './core/Guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    GenreComponent,
    CastComponent,
    AddGenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAdderInterceptor, multi: true },
    AuthGuard,
    AdminGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
