import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { SubscribeUsers } from './subscribe-users.model';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable()
export class SubscribeUsersService {
  selectedSubscribeUser : SubscribeUsers;
  SubscribeUserss: SubscribeUsers[];
  readonly baseURL = 'http://localhost:3000/subscribeUsers';

  constructor(private http: HttpClient) { }

  postSubscribeUsers(cinfo: SubscribeUsers) {
    return this.http.post(this.baseURL, cinfo);
  }

  getSubscribeUsers() {
    console.log('x2');
    return this.http.get(this.baseURL);
  }

}