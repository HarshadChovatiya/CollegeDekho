import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import {CollegeCutoffService} from '../../admin/shared/college-cutoff.service';
import {CollegeCutoff} from '../../admin/shared/college-cutoff.model';
import {Router} from '@angular/router';



@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css'],
  providers : [CollegeCutoffService]
})
export class PredictorComponent implements OnInit {

  public selectedCollegeCutoff : CollegeCutoff;
  public Collegecutoffs : CollegeCutoff[];

  public exam = "";
  public rankvalue = "";
  public catagoryvalue = "";
  public branchvalue = "";

  
  

  constructor(private router : Router,private collegeCutoffService : CollegeCutoffService) { }

  ngOnInit() {
    this.refreshCollegeCutoffList();
    $(document).ready(function(){
      $("#main").click(function(){
          $("#rankform").slideDown("slow");
          $("p").show();
          window.scrollBy(0,500);
      });
      $("#advanced").click(function(){
        $("#rankform").slideDown("slow");
        $("p").show();
        window.scrollBy(0,500);
      });
    });
  }

  JeeMain()
  {
    this.exam = "MAIN";
  }
  JeeAdvanced()
  {
    this.exam = "ADVANCED";
  }

  onSubmit(form : NgForm)
  {
      console.log(form.value.rank);
      console.log(form.value.catagory);
  }

  refreshCollegeCutoffList() {
    this.collegeCutoffService.getCollegeCutoffList().subscribe((res) => {
      this.collegeCutoffService.CollegeCutoffs = res as CollegeCutoff[];
    });
  }

  onClick(college)
  {
    this.router.navigate(['/client/collegesinglepage/',college.college_code]);
  }
}
