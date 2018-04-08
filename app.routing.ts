import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheatherItemComponent } from './app/wheather-item/wheather-item.component';
import { WheatherListComponent} from './app/wheather-list/wheather-list.component';
import { WheatherService } from './app/wheather/wheather.services';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { SearchComponent } from './app/search/search.component';
const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
    },
    {
        path: 'wheather',
        component: WheatherItemComponent,
    },
    {
        path: 'wheather/:disc',
        component: WheatherListComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }


