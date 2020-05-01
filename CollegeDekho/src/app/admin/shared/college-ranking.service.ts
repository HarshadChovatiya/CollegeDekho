import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeRanking } from './college-ranking.model';

@Injectable()
export class CollegeRankingService {
  selectedCollegeRanking : CollegeRanking;
  CollegeRankings: CollegeRanking[];
  readonly baseURL = 'http://localhost:3000/collegeRanking';

  constructor(private http: HttpClient) { }

  postCollegeRanking(cinfo: CollegeRanking) {
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeRankingList() {
    return this.http.get(this.baseURL);
  }

  getCollegeRankingListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeRanking(cinfo: CollegeRanking) {
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeRanking(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}