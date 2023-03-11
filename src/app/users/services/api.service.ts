import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { List } from '../modules/list';
import { Find } from '../modules/find';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listSErvice:any
//  header:object={headers: new HttpHeaders({"Authorization": "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"})}
  header:object={}
  private list: List = {
    "login":"",
    "id":0,
    "node_id":"",
    "avatar_url":"",
    "gravatar_id":"",
    "url":"",
    "html_url":"",
    "followers_url":"",
    "following_url":"",
    "gists_url":"",
    "starred_url":"",
    "subscriptions_url":"",
    "organizations_url":"",
    "repos_url":"",
    "events_url":"",
    "received_events_url":"",
    "type":"",
    "site_admin":"",
    "score":0,
    "total_count":0,
    "incomplete_results": false,
    "items":{}
  }

  private find: Find = {
    "login": "",
    "id": "",
    "avatar_url": "",
    "followers": 0,
}
  private userUrl = "https://api.github.com"; 
  constructor(private http: HttpClient) { }


  
  public getUsers(params:any): Observable<List> {//observable
    let name = ''
    if (params == '') {
      name = '/search/users?q=""'
    }else{
      name = '/search/users?q='+params
    }
    return this.http.get<List>(this.userUrl+name);
  }

  getFindUsers(login:any): Promise<any> { //promise
    return this.http.get(this.userUrl+'/users/'+login,this.header).toPromise();
  }
}
