import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WheatherItem } from '../wheather/wheathers';
import { WheatherService } from '../wheather/wheather.services';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [WheatherService],
})

export class SidebarComponent {
  private req: any;
  private wheatherItem: [WheatherItem];
  constructor( private _wheather: WheatherService) { }

onSaveNew() {
    this.req = this._wheather.getWheatherItem().subscribe(data => {
      this.wheatherItem = data as [WheatherItem];
      // console.log(this.wheatherItem);
     // return this.wheatherItem;
    });
      }
      
        }
