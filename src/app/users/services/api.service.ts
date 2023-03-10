import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { List } from '../modules/list';
import { Find } from '../modules/find';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private list: List = {
    "total_count":0,
    "incomplete_results": false,
    "items":[]
  }

  private find: Find = {
    "login": "",
    "id": "",
    "avatar_url": "",
}
  private userUrl = "https://api.github.com/search/users?q=YOUR_NAME"; 
  private userUrlParams = "https://api.github.com/users/"; 
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<List> {
    return this.http.get<List>(this.userUrl);
  }
  public getFindUsers(login:any): Observable<Find> {
    return this.http.get<Find>(this.userUrlParams+login);
  }
}
