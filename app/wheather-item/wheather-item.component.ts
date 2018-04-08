import { Component, OnInit, OnDestroy } from '@angular/core';

import { Http } from '@angular/http';
import { WheatherItem} from '../wheather/wheathers';
import { WheatherService} from '../wheather/wheather.services';
@Component({
  selector: 'wheather-item',
  templateUrl: './wheather-item.component.html' ,
  styleUrls: ['./wheather-item.component.css'],
  providers: [WheatherService],     // providers are the type of objects we want to inject
})



export class WheatherItemComponent implements OnInit, OnDestroy {
private req: any;
 public wheatherItem: [WheatherItem];

  constructor(private http: Http, private _wheather: WheatherService ) { }
  ngOnInit() {
    this.req = this._wheather.getWheatherItem().subscribe(data => {
      this.wheatherItem = data as [WheatherItem];
      console.log(this.wheatherItem);
    });

  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }

  }








