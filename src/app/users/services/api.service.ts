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
  private userUrl = "https://api.github.com"; 
  constructor(private http: HttpClient) { }

  public getUsers(params:any): Observable<List> {
    let name = ''
    if (params == '') {
      name = '/search/users?q=YOUR_NAME'
    }else{
      name = '/search/users?q='+params
    }
    return this.http.get<List>(this.userUrl+name);
  }
  public getFindUsers(login:any): Observable<Find> {
    return this.http.get<Find>(this.userUrl+'/users/'+login);
  }
}
