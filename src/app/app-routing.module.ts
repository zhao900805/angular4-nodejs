import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";
import {ListComponent} from "./list/list.component";
import {InvalidComponent} from "./invalid/invalid.component";
import {EditListComponent} from "./edit-list/edit-list.component";
import {UsersComponent} from "./users/users.component";
import {RepositoriesComponent} from "./repositories/repositories.component";
import {IssuesComponent} from "./issues/issues.component";
import {UserByIdComponent} from "./user-by-id/user-by-id.component";
import {UserByCategoryComponent} from "./user-by-category/user-by-category.component";
import {TagsManagerComponent} from"./tags-manager/tags-manager.component";
import {WeatherDetailByCityComponent} from "./weather-detail-by-city/weather-detail-by-city.component";

const appRoutes:Routes = [
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomeComponent,children:[
        {path:"users",component:UsersComponent,children:[
            {path:":id",component:UserByIdComponent},
            {path:"tag/:tag",component:UserByCategoryComponent}
        ]},
        {path:"repositories",component:RepositoriesComponent},
        {path:"issues",component:IssuesComponent},
    ]},
    {path:"tagsManager",component:TagsManagerComponent},
    {path:"history",component:HistoryComponent,children:[
        {path:":id",component:EditListComponent},
    ]},
    {path:"weather/:position",component:WeatherDetailByCityComponent},
    {path:"**",component:InvalidComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}