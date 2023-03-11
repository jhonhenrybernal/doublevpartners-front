import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { List } from '../modules/list';


@Injectable({
  providedIn: 'root'
})
export class ListGuard implements CanActivate {
  find: any;
  private userUrl = "https://api.github.com"; 
  constructor(private apiservice: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot):any {
    const login = route.data['login'];
    this.apiservice.getUsers(login).subscribe((list: any) => {

      if (list && list.score >= 30.0) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
  
}
