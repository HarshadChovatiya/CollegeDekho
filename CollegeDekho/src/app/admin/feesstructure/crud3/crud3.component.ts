import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeFeesstructuresService} from '../../shared/college-feesstructures.service';
import {CollegeFeesstructures} from '../../shared/college-feesstructures.model';
declare var M : any;
@Component({
  selector: 'app-crud3',
  templateUrl: './crud3.component.html',
  styleUrls: ['./crud3.component.css'],
  providers :[CollegeFeesstructuresService]
})
export class Crud3Component implements OnInit {

  public collegetypes = ['IIT','NIT','IIIT'];

  constructor(private collegeFeesstructuresService : CollegeFeesstructuresService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCollegeFeesstructuresList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.collegeFeesstructuresService.selectedCollegeFeesstructure = {
      _id: null,
      college_code : "",
      caution_fee : null,
      tution_fee: null,
      one_time_fee : null,
      other_fee : null,
      mess_advance : null,
      mess_fee : null,
      hostel_fee : null,
      electricity_water_fee : null
    }
  }

  onSubmit(form: NgForm) {
   console.log('over here');
    if(form.value._id == null){
      console.log('Insile sibknfv');
      this.collegeFeesstructuresService.postCollegeFeesstructures(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeFeesstructuresList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      this.collegeFeesstructuresService.putCollegeFeesstructures(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeFeesstructuresList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeFeesstructuresList() {
    this.collegeFeesstructuresService.getCollegeFeesstructuresList().subscribe((res) => {
      this.collegeFeesstructuresService.CollegeFeesstructuress = res as CollegeFeesstructures[];
    });
  }

  onEdit(cinfo: CollegeFeesstructures) {
    this.collegeFeesstructuresService.selectedCollegeFeesstructure = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeFeesstructuresService.deleteCollegeFeesstructures(_id).subscribe((res) => {
        this.refreshCollegeFeesstructuresList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
