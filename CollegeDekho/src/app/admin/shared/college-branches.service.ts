import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeBranches } from './college-branches.model';

@Injectable()
export class CollegeBranchesService {
  selectedCollegeBranches: CollegeBranches;
  CollegeBranchess: CollegeBranches[];
  readonly baseURL = 'http://localhost:3000/collegeBranches';

  constructor(private http: HttpClient) { }

  postCollegeBranches(cinfo: CollegeBranches) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeBranchesList() {
    return this.http.get(this.baseURL);
  }

  getCollegeBranchesListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeBranches(cinfo: CollegeBranches) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeBranches(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}