import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routing';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WheatherItemComponent } from './wheather-item/wheather-item.component';
import { WheatherListComponent } from './wheather-list/wheather-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WheatherItemComponent,
    WheatherListComponent,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
