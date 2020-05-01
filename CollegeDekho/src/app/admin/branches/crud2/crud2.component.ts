import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeBranchesService} from '../../shared/college-branches.service';
import {CollegeBranches} from '../../shared/college-branches.model';
declare var M : any;
@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css'],
  providers :[CollegeBranchesService]
})
export class Crud2Component implements OnInit {

  constructor(private CollegeBranchesService : CollegeBranchesService) { }

  ngOnInit() {
    console.log('NDjednfkjfkrjf');
    this.resetForm();
    this.refreshCollegeBranchesList();
  }

  resetForm(form?: NgForm) {
    //console.log('Brancheser');
    if (form)
      form.reset();
    this.CollegeBranchesService.selectedCollegeBranches = {
      _id: "",
      college_code : "",
      branch_code : "",
      branch_name : ""
    }
  }

  onSubmit(form: NgForm) {
   console.log('hghg');
    if(form.value._id == ""){
      
      this.CollegeBranchesService.postCollegeBranches(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeBranchesList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      this.CollegeBranchesService.putCollegeBranches(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeBranchesList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeBranchesList() {
    this.CollegeBranchesService.getCollegeBranchesList().subscribe((res) => {
      this.CollegeBranchesService.CollegeBranchess = res as CollegeBranches[];
    });
  }

  onEdit(cinfo: CollegeBranches) {
    this.CollegeBranchesService.selectedCollegeBranches = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.CollegeBranchesService.deleteCollegeBranches(_id).subscribe((res) => {
        this.refreshCollegeBranchesList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
