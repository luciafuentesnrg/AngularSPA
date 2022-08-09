import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/models/Movie';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>("https://movieshopapi.azurewebsites.net/api/Movies/top-grossing");
  }

  getMovieDetails(id:number):Observable<MovieDetails>{
    return this.http.get<MovieDetails>("https://movieshopapi.azurewebsites.net/api/Movies/" + id);
  }

  getMoviesByGenre(genreId:number):Observable<Movie[]>{
    return this.http.get<Movie[]>("https://movieshopapi.azurewebsites.net/api/Movies/genre/" + genreId + "?pageSize=30&pageIndex=1");
  }
}