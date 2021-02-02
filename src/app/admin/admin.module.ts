import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './question-list/question-list.component';
import { AllscoresComponent } from './allscores/allscores.component';

@NgModule({
  declarations: [AdminhomeComponent, QuestionListComponent, AllscoresComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule
  ]
})
export class AdminModule { }
