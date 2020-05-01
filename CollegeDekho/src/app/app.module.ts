import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CrudComponent } from './admin/colleges/crud/crud.component';
import { crud1Component } from './admin/cutoff/crud1/crud1.component';
import { Crud2Component } from './admin/branches/crud2/crud2.component';
import { Crud3Component } from './admin/feesstructure/crud3/crud3.component';
import { Crud4Component } from './admin/placement/crud4/crud4.component';
import { Crud5Component } from './admin/ranking/crud5/crud5.component';
import { Crud6Component } from './admin/seatmatrix/crud6/crud6.component';
import { HeaderComponent } from './admin/header/header/header.component';
import { ShowcollegesComponent } from './client/showcolleges/showcolleges.component';
import { CollegesinglepageComponent } from './client/collegesinglepage/collegesinglepage.component';
import { PredictorComponent } from './client/predictor/predictor.component';
import { ClientheaderComponent } from './client/clientheader/clientheader.component';
import { SubscribeuserComponent } from './client/subscribeuser/subscribeuser/subscribeuser.component';
import { ClientComponent } from './client/client/client.component';
import { ClientfooterComponent } from './client/clientfooter/clientfooter/clientfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CrudComponent,
    crud1Component,
    Crud2Component,
    Crud3Component,
    Crud4Component,
    Crud5Component,
    Crud6Component,
    HeaderComponent,
    ShowcollegesComponent,
    CollegesinglepageComponent,
    PredictorComponent,
    ClientheaderComponent,
    SubscribeuserComponent,
    ClientComponent,
    ClientfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
