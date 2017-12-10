import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {HttpModule,JsonpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';
import { InvalidComponent } from './invalid/invalid.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { IssuesComponent } from './issues/issues.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2CompleterModule } from "ng2-completer";

import {MatButtonModule, 
  MatCheckboxModule ,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';

//import from angular io the element from '@angular/material' manually.
import {FilterPipe} from "./pipes/filter.pipe";
import { HistoryPipe } from './pipes/history.pipe';
import { UserByCategoryComponent } from './user-by-category/user-by-category.component';
import { TagsManagerComponent } from './tags-manager/tags-manager.component';
import { WeatherDetailByCityComponent } from './weather-detail-by-city/weather-detail-by-city.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ListComponent,
    InvalidComponent,
    EditListComponent,
    UsersComponent,
    RepositoriesComponent,
    IssuesComponent,
    UserByIdComponent,
    FilterPipe,
    HistoryPipe,
    UserByCategoryComponent,
    TagsManagerComponent,
    WeatherDetailByCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    DragDropDirectiveModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    Ng2CompleterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
