import { Component, OnInit } from '@angular/core';
import {CollegeInformationService} from '../../admin/shared/college-information.service';
import {CollegeInformation} from '../../admin/shared/college-information.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showcolleges',
  templateUrl: './showcolleges.component.html',
  styleUrls: ['./showcolleges.component.css'],
  providers :[CollegeInformationService]
})
export class ShowcollegesComponent implements OnInit {


  public code = "";
  public path = "../../../assets/Photos/colleges/" + this.code + ".jpg";

  selectedInformation : CollegeInformation;
  CollegeInformations : CollegeInformation[];
  constructor(private collegeInformationService : CollegeInformationService,private router : Router) { }

  ngOnInit() {
    this.refreshCollegeInformationList();
  }

  refreshCollegeInformationList() {
    this.collegeInformationService.getCollegeInformationList().subscribe((res) => {
      this.collegeInformationService.CollegeInformations = res as CollegeInformation[];
    });
    console.log(this.collegeInformationService.CollegeInformations);
  }

  onSubmit(college)
  {
    console.log('Over herr we are');
    this.router.navigate(['/client/collegesinglepage/',college.college_code]);
  }
}
