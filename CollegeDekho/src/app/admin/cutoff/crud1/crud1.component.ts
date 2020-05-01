import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollegeCutoffService} from '../../shared/college-cutoff.service';
import {CollegeCutoff} from '../../shared/college-cutoff.model';

import {SubscribeUsersService} from '../../shared/subscribe-users.service';
import {SubscribeUsers} from '../../shared/subscribe-users.model';

declare var M : any;
@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css'],
  providers :[CollegeCutoffService,SubscribeUsersService]
})
export class crud1Component implements OnInit {

  selectedSubscribeUser : SubscribeUsers;
  SubscribeUserss : SubscribeUsers[];

  constructor(private collegeCutoffService : CollegeCutoffService,private subscribeUsersService : SubscribeUsersService) { }

  ngOnInit() {
    console.log('NDjednfkjfkrjf');
    this.resetForm();
    this.refreshCollegeCutoffList();
    this.refreshSubscribeUserList();
  }

  resetForm(form?: NgForm) {
    console.log('Cutoffer');
    if (form)
      form.reset();
    this.collegeCutoffService.selectedCollegeCutoff = {
      _id: "",
      college_code : "",
      year : null,
      branch : "",
      quota : "",
      g_open : null,
      g_close : null,
      obc_open : null,
      obc_close : null,
      sc_open : null,
      sc_close : null,
      st_open : null,
      st_close : null,
      round : null,
      college_name : null

    }
  }

  onSubmit(form: NgForm) {
   
    if(form.value._id == ""){
     
      this.collegeCutoffService.postCollegeCutoff(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeCutoffList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
     }
    else {
      console.log('Dipesh here for cutoff put');
      this.collegeCutoffService.putCollegeCutoff(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCollegeCutoffList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCollegeCutoffList() {
    this.collegeCutoffService.getCollegeCutoffList().subscribe((res) => {
      this.collegeCutoffService.CollegeCutoffs = res as CollegeCutoff[];
    });
  }

  refreshSubscribeUserList() {
    this.subscribeUsersService.getSubscribeUsers().subscribe((res) => {
      this.subscribeUsersService.SubscribeUserss = res as SubscribeUsers[];
      console.log(this.subscribeUsersService.SubscribeUserss);
    });
    
  }

  onEdit(cinfo: CollegeCutoff) {
    this.collegeCutoffService.selectedCollegeCutoff = cinfo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.collegeCutoffService.deleteCollegeCutoff(_id).subscribe((res) => {
        this.refreshCollegeCutoffList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
