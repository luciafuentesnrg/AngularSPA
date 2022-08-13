import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserLogIn } from 'src/app/shared/models/UserLogin';
import { UserRegister } from 'src/app/shared/models/UserRegister';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  Login(login: UserLogIn): Observable<boolean> {
    return this.http
      .post('https://localhost:7079/api/Account/login', login)
      .pipe(
        map((response: any) => {
          if (response) {
            localStorage.setItem('token', response.token);
            this.populateUserInfoFromToken();
            return true;
          }
          return false;
        })
      );
  }

  Logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  Register(registration: UserRegister): Observable<boolean> {
    return this.http.post<boolean>(
      'https://localhost:7079/api/Account/register',
      registration
    );
  }

  populateUserInfoFromToken() {
    var tokenValue = localStorage.getItem('token');

    if (tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)) {
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    }
  }

  validateJWT() {
    //Code to validate token goes here
    var tokenValue = localStorage.getItem('token');
    if (tokenValue != null) {
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(decodedToken);
    }
  }
}
