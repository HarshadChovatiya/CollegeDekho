import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegePlacement } from './college-placement.model';

@Injectable()
export class CollegePlacementService {
  selectedCollegePlacement : CollegePlacement;
  CollegePlacements: CollegePlacement[];
  readonly baseURL = 'http://localhost:3000/collegePlacement';

  constructor(private http: HttpClient) { }

  postCollegePlacement(cinfo: CollegePlacement) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegePlacementList() {
    return this.http.get(this.baseURL);
  }

  getCollegePlacementListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegePlacement(cinfo: CollegePlacement) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegePlacement(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}