import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private accountService: AccountService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.accountService.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    });
    this.accountService.currentUser.subscribe((data) => {
      this.isAdmin = data.isAdmin;
    });

    if (
      localStorage.getItem('token') != null &&
      this.isLoggedIn &&
      this.isAdmin
    ) {
      return true;
    } else {
      return false;
    }
  }
}
