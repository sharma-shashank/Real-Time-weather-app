import { Component, OnInit} from '@angular/core';
import { FormsModule,  FormGroupName, FormControl } from '@angular/forms';
import { WheatherService } from '../wheather/wheather.services';
import { WheatherItem } from '../wheather/wheathers';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'wheather-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WheatherService],
})
export class SearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};
  constructor(private _wheatherService: WheatherService ) {}
  wheatherItem: [WheatherItem];
  onSubmit(form: any) {
       this._wheatherService.searchWeatherItem(form.value.location).subscribe(data => {
       this.wheatherItem = data as [WheatherItem];
       console.log(this.wheatherItem);

    });
  }
  onSearchLocation(cityName: string) {
   this.searchStream
   .next(cityName);                                         // On each key stroke it will emits the value
  }
  ngOnInit() {
    this.searchStream .debounceTime(700)
                      .distinctUntilChanged()


        .switchMap((input: string) => this._wheatherService.searchWeatherItem(input))
    .subscribe(data => this.data = data);                // this is the listner for this emitted value

  }
}
/*.switchMap mapping of two Obsrevable, now it is matching (Mapping) the key strokes on the weather site and returning the
    matched data, if data is not matched then it is giving error  // switch to next value//*/


