import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeCutoff } from './college-cutoff.model';

@Injectable()
export class CollegeCutoffService {
  selectedCollegeCutoff: CollegeCutoff;
  CollegeCutoffs: CollegeCutoff[];
  readonly baseURL = 'http://localhost:3000/collegeCutoff';

  constructor(private http: HttpClient) { }

  postCollegeCutoff(cinfo: CollegeCutoff) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeCutoffList() {
    return this.http.get(this.baseURL);
  }

  getCollegeCutoffListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeCutoff(cinfo: CollegeCutoff) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeCutoff(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}