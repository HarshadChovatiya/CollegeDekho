import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { CollegeInformation } from './college-information.model';

@Injectable()
export class CollegeInformationService {
  selectedCollegeInformation: CollegeInformation;
  CollegeInformations: CollegeInformation[];
  readonly baseURL = 'http://localhost:3000/collegeInfo';

  constructor(private http: HttpClient) { }

  postCollegeInformation(cinfo: CollegeInformation) {
    cinfo.image_path = "../../../assets/Photos/colleges/" + cinfo.college_code + ".jpg";
    cinfo.logo_path = "../../../assets/Photos/logo/" + cinfo.college_code + "logo.png";
    console.log(cinfo.image_path);
    return this.http.post(this.baseURL, cinfo);
  }

  getCollegeInformationList() {
    return this.http.get(this.baseURL);
  }

  getCollegeInformationListByCode(collegecode)
  {
    console.log(this.baseURL + '/code/' +`${collegecode}`);
    console.log(this.http.get(this.baseURL +`/code/${collegecode}`));
    return this.http.get(this.baseURL +`/code/${collegecode}`);
  }

  putCollegeInformation(cinfo: CollegeInformation) {
    cinfo.image_path = "../../../assets/Photos/colleges/" + cinfo.college_code + ".jpg";
    cinfo.logo_path = "../../../assets/Photos/logo/" + cinfo.college_code + "logo.png";
    console.log(cinfo.image_path);
    return this.http.put(this.baseURL + `/${cinfo._id}`,cinfo);
  }

  deleteCollegeInformation(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}