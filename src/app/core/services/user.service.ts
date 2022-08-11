import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogIn } from 'src/app/shared/models/UserLogin';
import { UserRegister } from 'src/app/shared/models/UserRegister';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  UserLogin(): Observable<UserLogIn> {
    return this.http.get<UserLogIn>(
      'https://movieshopapi.azurewebsites.net/api/Account/login'
    );
  }

  UserRegister(): Observable<UserRegister> {
    return this.http.get<UserRegister>(
      'https://movieshopapi.azurewebsites.net/api/Account/register'
    );
  }
}
