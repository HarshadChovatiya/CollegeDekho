import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeFeesstructures } from './college-feesstructures.model';

@Injectable()
export class CollegeFeesstructuresService {
  selectedCollegeFeesstructure : CollegeFeesstructures;
  CollegeFeesstructuress : CollegeFeesstructures[];
  readonly baseURL = 'http://localhost:3000/collegeFeesstructures';

  constructor(private http: HttpClient) { }

  postCollegeFeesstructures(cinfo: CollegeFeesstructures) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeFeesstructuresList() {
    return this.http.get(this.baseURL);
  }
  getCollegeFeesStructuresListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeFeesstructures(cinfo: CollegeFeesstructures) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeFeesstructures(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}