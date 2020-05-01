import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeInformationService} from '../../shared/college-information.service';
import {CollegeInformation} from '../../shared/college-information.model';
import * as $ from 'jquery';
declare var M : any;
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers :[CollegeInformationService]
})
export class CrudComponent implements OnInit {

  public collegetypes = ['IIT','NIT','IIIT'];

  constructor(private collegeInformationService : CollegeInformationService) { }
  public flag = 0;
  ngOnInit() {
    
    this.resetForm();
    this.refreshCollegeInformationList();
   
    window.scrollBy(0,1);
     
     console.log(this.flag);
     
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.collegeInformationService.selectedCollegeInformation = {
      _id: null,
      college_code : "",
      near_airport : "",
      near_station : "",
      other_name : "",
      college_name: "",
      college_subtype: "",
      college_type: "",
      city: "",
      state : "",
      established_year : null,
      address : "",
      pincode :null,
      away_from_railway_station : null,
      away_from_airport : null,
      image_path : "",
      logo_path : "",
      website : "",

    }
  }

  onSubmit(form: NgForm) {
   console.log('over here');
   console.log(form.value.college_name);
    if(form.value._id == null){
      console.log('Insile sibknfv');
      this.collegeInformationService.postCollegeInformation(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeInformationList();
        M.toast({ html: 'Saved successfully', classes: 'rounded',color : 'blue'});
      });
     }
    else {
      this.collegeInformationService.putCollegeInformation(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeInformationList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeInformationList() {
    this.collegeInformationService.getCollegeInformationList().subscribe((res) => {
      this.collegeInformationService.CollegeInformations = res as CollegeInformation[];
    });
  }

  onEdit(cinfo: CollegeInformation) {
    this.collegeInformationService.selectedCollegeInformation = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeInformationService.deleteCollegeInformation(_id).subscribe((res) => {
        this.refreshCollegeInformationList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
