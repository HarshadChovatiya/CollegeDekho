import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegePlacementService} from '../../shared/college-placement.service';
import {CollegePlacement} from '../../shared/college-placement.model';
declare var M : any;
@Component({
  selector: 'app-crud4',
  templateUrl: './crud4.component.html',
  styleUrls: ['./crud4.component.css'],
  providers :[CollegePlacementService]
})
export class Crud4Component implements OnInit {


  constructor(private collegePlacementService : CollegePlacementService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCollegePlacementList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.collegePlacementService.selectedCollegePlacement = {
      _id: null,
      college_code : "",
      year : null,
      branch : null,
      no_participated_students : null,
      no_placed_students : null,
      placed_percentage : null,
      degree_type : ""
    }
  }

  onSubmit(form: NgForm) {
   console.log('over here');
    if(form.value._id == null){
      console.log('Insile sibknfv');
      this.collegePlacementService.postCollegePlacement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegePlacementList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      this.collegePlacementService.putCollegePlacement(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegePlacementList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegePlacementList() {
    this.collegePlacementService.getCollegePlacementList().subscribe((res) => {
      this.collegePlacementService.CollegePlacements = res as CollegePlacement[];
    });
    console.log(this.collegePlacementService.CollegePlacements);
  }

  onEdit(cinfo: CollegePlacement) {
    this.collegePlacementService.selectedCollegePlacement = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegePlacementService.deleteCollegePlacement(_id).subscribe((res) => {
        this.refreshCollegePlacementList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
