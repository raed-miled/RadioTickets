import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterLink } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    JoinComponent,
    DealDetailsComponent,
    DealListComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
