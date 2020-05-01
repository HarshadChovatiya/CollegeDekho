import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SubscribeUsers} from '../../../admin/shared/subscribe-users.model';
import {SubscribeUsersService} from '../../../admin/shared/subscribe-users.service';

declare var M : any;


@Component({
  selector: 'app-subscribeuser',
  templateUrl: './subscribeuser.component.html',
  styleUrls: ['./subscribeuser.component.css'],
  providers :[SubscribeUsersService]
})
export class SubscribeuserComponent implements OnInit {
  constructor(private subscribeUsersService : SubscribeUsersService) { }

  ngOnInit() {
    this.resetForm();
   // this.refreshSubscribeUserList();
    
  }

  resetForm(form?: NgForm) {
    console.log('Cutoffer');
    if (form)
      form.reset();
    this.subscribeUsersService.selectedSubscribeUser = {
      _id: "",
      user_name : "",
      user_email : ""
    }
  }

  onSubmit(form: NgForm) {
       this.subscribeUsersService.postSubscribeUsers(form.value).subscribe((res) => {
         this.resetForm(form);
         this.refreshSubscribeUserList();
         M.toast({ html: 'Saved successfully', classes: 'rounded' });
       });
      
     }

     refreshSubscribeUserList() {
      this.subscribeUsersService.getSubscribeUsers().subscribe((res) => {
        console.log(res);
        this.subscribeUsersService.SubscribeUserss = res as SubscribeUsers[];
        this.subscribeUsersService.selectedSubscribeUser = this.subscribeUsersService.SubscribeUserss[0];
        console.log(this.subscribeUsersService.SubscribeUserss);

      });
    }
 
}
