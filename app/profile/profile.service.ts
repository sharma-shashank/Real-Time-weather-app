import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProfileService {
    private profiles: Profile[] = [
            new Profile('Default Profile', ['New York', 'London', 'Berlin'])
        ];

        saveNewProfile(cities: string[]): Observable < any > {
        const profileName = 'Profile ' + (this.profiles.length);
        const profile = new Profile(profileName, cities);
        this.profiles.push(profile);
        return null;
    }
}