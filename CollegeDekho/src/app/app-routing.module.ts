import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CrudComponent } from './admin/colleges/crud/crud.component';
import { crud1Component} from './admin/cutoff/crud1/crud1.component';
import { Crud2Component } from './admin/branches/crud2/crud2.component';
import {Crud3Component} from './admin/feesstructure/crud3/crud3.component';
import {Crud4Component} from './admin/placement/crud4/crud4.component';
import {Crud5Component} from  './admin/ranking/crud5/crud5.component'; 
import {Crud6Component} from './admin/seatmatrix/crud6/crud6.component';
import {ShowcollegesComponent} from './client/showcolleges/showcolleges.component';
import {CollegesinglepageComponent} from './client/collegesinglepage/collegesinglepage.component';
import {PredictorComponent} from './client/predictor/predictor.component';
import {ClientheaderComponent} from './client/clientheader/clientheader.component';
import {SubscribeuserComponent} from './client/subscribeuser/subscribeuser/subscribeuser.component';
import {ClientComponent} from './client/client/client.component';
import { ClientfooterComponent} from './client/clientfooter/clientfooter/clientfooter.component';

const routes: Routes = [
  {path : "admin/placement/crud4",component : Crud4Component},
  {path : "admin/colleges/crud", component : CrudComponent},
  {path : "admin", component : AdminComponent},
   {path : "admin/cutoff/crud1", component : crud1Component},
   {path : "admin/branches/crud2", component : Crud2Component},
   {path : "admin/feesstructures/crud3",component : Crud3Component},
   {path : "admin/ranking/crud5",component : Crud5Component},
   {path : "admin/seatmatrix/crud6", component : Crud6Component},
   {path:"client/showcolleges",component:ShowcollegesComponent},
   {path:"client/collegesinglepage/:code",component : CollegesinglepageComponent},
   {path : "client/predictor",component : PredictorComponent},
  {path : "clientheader", component : ClientheaderComponent},
  {path : "subscribeusers",component : SubscribeuserComponent},
  {path : "client",component:ClientComponent},
  {path : "clientfooter",component : ClientfooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
