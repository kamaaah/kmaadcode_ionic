import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      /* to filter out the null value */
      filter(val => val !== null),
      map((isAuthenticated) => {
        console.log('GUARD: ', isAuthenticated);

        if (isAuthenticated) {
          return true;
        } else {
          /* test leave brackets if issue in runTime around /login */
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
