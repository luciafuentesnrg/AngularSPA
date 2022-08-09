import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private httpClient: HttpClient) {}

  getAllGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(
      'https://movieshopapi.azurewebsites.net/api/Genres'
    );
  }

  // AddGenre(genre:Genre):Observable<Genre>{
  //   return this.httpClient.post<Genre>("https://movieshopapi.azurewebsites.net/api/Genres", genre);
  // }
}
