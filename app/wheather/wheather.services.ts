import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import { WheatherItem } from './wheathers';
import { WEATHER_ITEMS} from './mock';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const endpoint = 'assets/wheatherItem.json';
@Injectable()
export class WheatherService {
    private req: any;
    constructor(private http: Http) { }
    getWheatherItem() {
        return this.http.get(endpoint)
            .map(response => response.json());                      // this.http.get(endpoint)
    }
setWheatherItem(disc) {
    return this.http.get(endpoint)
    .map(response => {
        const data = response.json().filter(item => {
            if (item.disc === disc) {
                return item.disc;
            }
        });
        if (data.length === 1) {
            return data[0];
        }
        return {};
    });

}
    searchWeatherItem(cityName: string): Observable<any> {

        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
    '&APPID=d9c05681b9c98fd7185573a204400f74&units=metric')
    .map(response => response.json())
    .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
    });
}



}
