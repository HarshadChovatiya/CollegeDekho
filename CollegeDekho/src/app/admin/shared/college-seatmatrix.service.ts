import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeSeatmatrix } from './college-seatmatrix.model';

@Injectable()
export class CollegeSeatmatrixService {
  selectedCollegeSeatmatrix : CollegeSeatmatrix;
  CollegeSeatmatrixs: CollegeSeatmatrix[];
  readonly baseURL = 'http://localhost:3000/collegeSeatmatrix';

  constructor(private http: HttpClient) { }

  postCollegeSeatmatrix(cinfo: CollegeSeatmatrix) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeSeatmatrixList() {
    return this.http.get(this.baseURL);
  }

  getCollegeSeatMatrixListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeSeatmatrix(cinfo: CollegeSeatmatrix) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeSeatmatrix(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}