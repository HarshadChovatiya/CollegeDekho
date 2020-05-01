import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeSeatmatrixService} from '../../shared/college-seatmatrix.service';
import {CollegeSeatmatrix} from '../../shared/college-seatmatrix.model';
declare var M : any;
@Component({
  selector: 'app-crud6',
  templateUrl: './crud6.component.html',
  styleUrls: ['./crud6.component.css'],
  providers :[CollegeSeatmatrixService]
})
export class Crud6Component implements OnInit {


  constructor(private collegeSeatmatrixService : CollegeSeatmatrixService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCollegeSeatmatrixList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.collegeSeatmatrixService.selectedCollegeSeatmatrix = {
      _id: null,
      college_code : "",
      branch : "",
      no_of_seats : null,
      catagory : "",
      quota : "",
    }
  }

  onSubmit(form: NgForm) {
   console.log('over here');
   console.log(form.value._id);
    if(form.value._id == null){
      console.log('Insile sibknfv');
      this.collegeSeatmatrixService.postCollegeSeatmatrix(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeSeatmatrixList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      this.collegeSeatmatrixService.putCollegeSeatmatrix(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeSeatmatrixList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeSeatmatrixList() {
    this.collegeSeatmatrixService.getCollegeSeatmatrixList().subscribe((res) => {
      this.collegeSeatmatrixService.CollegeSeatmatrixs = res as CollegeSeatmatrix[];
    });
  }

  onEdit(cinfo: CollegeSeatmatrix) {
    this.collegeSeatmatrixService.selectedCollegeSeatmatrix = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeSeatmatrixService.deleteCollegeSeatmatrix(_id).subscribe((res) => {
        this.refreshCollegeSeatmatrixList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
