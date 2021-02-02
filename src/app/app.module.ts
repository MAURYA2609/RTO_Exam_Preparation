import { QuestionListComponent } from './admin/question-list/question-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GivetestComponent } from './users/givetest/givetest.component';
import { MyscoresComponent } from './users/myscores/myscores.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { AllscoresComponent } from './admin/allscores/allscores.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SignupComponent,
    HomeComponent,
    AdminhomeComponent,
    QuestionListComponent,
    GivetestComponent,
    MyscoresComponent,
    UserhomeComponent,
    AllscoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
