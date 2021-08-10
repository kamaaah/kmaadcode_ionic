import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial behaviour subject value
    /*   take(1), */ // Otherwise the Obsevable doesn't complete
      map((isAuthenticated) => {
        if (isAuthenticated) {
          // Directly open inside area
          this.router.navigateByUrl('/tabs', {replaceUrl: true});
        } else {
          // simply allow access to the login
          return true;
        }
      })
    );
  }
}
