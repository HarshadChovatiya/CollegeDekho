import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CollegeInformationService} from '../../admin/shared/college-information.service';
import {CollegeInformation} from '../../admin/shared/college-information.model';
import {CollegeRankingService} from '../../admin/shared/college-ranking.service';
import {CollegeRanking} from '../../admin/shared/college-ranking.model';
import {CollegeBranchesService} from '../../admin/shared/college-branches.service';
import {CollegeBranches} from '../../admin/shared/college-branches.model';
import {CollegeSeatmatrixService} from '../../admin/shared/college-seatmatrix.service';
import {CollegeSeatmatrix} from '../../admin/shared/college-seatmatrix.model';
import {CollegeCutoffService} from '../../admin/shared/college-cutoff.service';
import {CollegeCutoff} from '../../admin/shared/college-cutoff.model';
import {CollegeFeesstructuresService} from '../../admin/shared/college-feesstructures.service';
import {CollegeFeesstructures} from '../../admin/shared/college-feesstructures.model';
import {CollegePlacementService} from '../../admin/shared/college-placement.service';
import {CollegePlacement} from '../../admin/shared/college-placement.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-collegesinglepage',
  templateUrl: './collegesinglepage.component.html',
  styleUrls: ['./collegesinglepage.component.css'],
  providers : [CollegeInformationService,CollegeRankingService,CollegeBranchesService,CollegeSeatmatrixService,CollegeCutoffService,CollegeFeesstructuresService,CollegePlacementService]
})
export class CollegesinglepageComponent implements OnInit {

  public selectedCollegeInformation : CollegeInformation;
  public CollegeInformations : CollegeInformation[];
  public selectedCollegeRanking : CollegeRanking;
  public CollegeRankings : CollegeRanking[];
  public selectedCollegeBranchs : CollegeBranches;
  public CollegeBranchess : CollegeBranches[];
  public selectedCollegeSeatmatrix : CollegeSeatmatrix;
  public CollegeSeatmatrixs : CollegeSeatmatrix[];
  public selectedCollegeCutoff : CollegeCutoff;
  public Collegecutoffs : CollegeCutoff[];
  public selectedCollegeFeesstructure : CollegeFeesstructures;
  public CollegeFeesstructuress : CollegeFeesstructures[];
  public selectedCollegePlacement = CollegePlacement;
  public CollegePlacements : CollegePlacement[];

  

  public General = false;
  //selectedCollegeInformation.

  public collegecode ;
  constructor(private routs : ActivatedRoute,private collegeInformationService : CollegeInformationService,private collegeRankingService :CollegeRankingService,private collegeBranchesService : CollegeBranchesService,private collegeSeatmatrixService : CollegeSeatmatrixService ,private collegeCutoffService : CollegeCutoffService,private collegeFeesstructuresService : CollegeFeesstructuresService,private collegePlacementService : CollegePlacementService) { }

  ngOnInit() {
    this.collegecode = this.routs.snapshot.paramMap.get('code');
      this.refreshCollegeInformationList();
      this.refreshCollegeRankingList();
      this.refreshCollegeBranchesList();
      this.refreshCollegeSeatMatrixList();   
      this.refreshCollegeCutoffList(); 
      this.refreshCollegeFeesStructuresList();
      this.refreshCollegePlacementList();
      $(document).ready(function(){
          $("#flip1").click(function(){
              $("#panel1").slideToggle("slow");
          });
          $("#flip2").click(function(){
            $("#panel2").slideToggle("slow");
          });
          $("#flip3").click(function(){
            $("#panel3").slideToggle("slow");
          });
          $("#flip4").click(function(){
            $("#panel4").slideToggle("slow");
          });
          $("#cutoff2017").click(function(){
            $("#cutoff2017table").slideToggle("slow");
          });
          $("#cutoff2018").click(function(){
            $("#cutoff2018table").slideToggle("slow");
          });
          $("#cutoff2019").click(function(){
            $("#cutoff2019table").slideToggle("slow");
          });
          $("#placement2018").click(function(){
            $("#placement2018table").slideToggle("slow");
          });
          $("#placement2019").click(function(){
            $("#placement2019table").slideToggle("slow");
          });
      });
  }

  refreshCollegeInformationList() {
    this.collegeInformationService.getCollegeInformationListByCode(this.collegecode).subscribe((res) => {
      this.collegeInformationService.CollegeInformations = res as CollegeInformation[];
      this.collegeInformationService.selectedCollegeInformation = this.collegeInformationService.CollegeInformations[0];
      
    });
  }

  refreshCollegeRankingList() {
    this.collegeRankingService.getCollegeRankingListByCode(this.collegecode).subscribe((res) => {
      this.collegeRankingService.CollegeRankings = res as CollegeRanking[];
      this.collegeRankingService.selectedCollegeRanking = this.collegeRankingService.CollegeRankings[0];
      console.log(this.collegeRankingService.selectedCollegeRanking);
    });
  }

  refreshCollegeBranchesList() {
    this.collegeBranchesService.getCollegeBranchesListByCode(this.collegecode).subscribe((res) => {
      this.collegeBranchesService.CollegeBranchess = res as CollegeBranches[];
      this.collegeBranchesService.selectedCollegeBranches = this.collegeBranchesService.CollegeBranchess[0];
      console.log(this.collegeBranchesService.selectedCollegeBranches);
    });
  }

  refreshCollegeSeatMatrixList() {
    this.collegeSeatmatrixService.getCollegeSeatMatrixListByCode(this.collegecode).subscribe((res) => {
      this.collegeSeatmatrixService.CollegeSeatmatrixs = res as CollegeSeatmatrix[];
      this.collegeSeatmatrixService.selectedCollegeSeatmatrix = this.collegeSeatmatrixService.CollegeSeatmatrixs[0];
      console.log(this.collegeBranchesService.selectedCollegeBranches);
    });
  }

  refreshCollegeCutoffList() {
    this.collegeCutoffService.getCollegeCutoffListByCode(this.collegecode).subscribe((res) => {
      this.collegeCutoffService.CollegeCutoffs = res as CollegeCutoff[];
      this.collegeCutoffService.selectedCollegeCutoff =this.collegeCutoffService.CollegeCutoffs[0];
      console.log(this.collegeCutoffService.CollegeCutoffs);
    });
  }

  refreshCollegeFeesStructuresList() {
    this.collegeFeesstructuresService.getCollegeFeesStructuresListByCode(this.collegecode).subscribe((res) => {
      this.collegeFeesstructuresService.CollegeFeesstructuress = res as CollegeFeesstructures[];
      this.collegeFeesstructuresService.selectedCollegeFeesstructure =this.collegeFeesstructuresService.CollegeFeesstructuress[0];
      console.log(this.collegeCutoffService.CollegeCutoffs);
    });
  }

  refreshCollegePlacementList() {

    console.log('here we call to you');
    this.collegePlacementService.getCollegePlacementListByCode(this.collegecode).subscribe((res) => {
      console.log('Here we are');
      this.collegePlacementService.CollegePlacements = res as CollegePlacement[];
      this.collegePlacementService.selectedCollegePlacement =this.collegePlacementService.CollegePlacements[0];
      console.log(this.collegePlacementService.CollegePlacements);
  });

}

}
