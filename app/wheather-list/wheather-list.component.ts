import { Component, OnInit, OnDestroy  } from '@angular/core';
import { WheatherItemComponent } from '../wheather-item/wheather-item.component';
import { ActivatedRoute } from '@angular/router'; // for dynamic routing
import { Http } from '@angular/http';
import { WheatherItem } from '../wheather/wheathers';
import { WheatherService } from '../wheather/wheather.services';
@Component({
  selector: 'wheather-list',
  templateUrl: './wheather-list.component.html',
  styleUrls: ['./wheather-list.component.css'],
  providers: [WheatherService],

})
export class WheatherListComponent implements OnInit, OnDestroy {
private routeSub: any;
private req: any;
wheatherItem: [WheatherItem];
disc: string;
  constructor(private route: ActivatedRoute, private http: Http, private _wheather: WheatherService) { }
  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
   // console.log(params);
  this.disc = params['disc'];
    this.req = this._wheather.setWheatherItem(this.disc).subscribe(data => {
      this.wheatherItem = data as [WheatherItem];
});
    });
   }
ngOnDestroy() {
  this.routeSub.unsubscribe();
  this.req.unsubscribe();
}
 }
