import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeRankingService} from '../../shared/college-ranking.service';
import {CollegeRanking} from '../../shared/college-ranking.model';
declare var M : any;
@Component({
  selector: 'app-crud5',
  templateUrl: './crud5.component.html',
  styleUrls: ['./crud5.component.css'],
  providers :[CollegeRankingService]
})
export class Crud5Component implements OnInit {


  constructor(private collegeRankingService : CollegeRankingService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCollegeRankingList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.collegeRankingService.selectedCollegeRanking = {
      _id: null,
      college_code : "",
      year : null,
      nat_or_internat : "",
      ranked_by : "",
      rank : null
    }
  }

  onSubmit(form: NgForm) {
   console.log('over here');
    if(form.value._id == null){
      console.log('Insile sibknfv');
      this.collegeRankingService.postCollegeRanking(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeRankingList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      this.collegeRankingService.putCollegeRanking(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeRankingList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeRankingList() {
    this.collegeRankingService.getCollegeRankingList().subscribe((res) => {
      this.collegeRankingService.CollegeRankings = res as CollegeRanking[];
    });
  }

  onEdit(cinfo: CollegeRanking) {
    this.collegeRankingService.selectedCollegeRanking = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeRankingService.deleteCollegeRanking(_id).subscribe((res) => {
        this.refreshCollegeRankingList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
