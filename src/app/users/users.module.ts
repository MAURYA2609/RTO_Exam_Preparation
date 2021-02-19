import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GivetestComponent } from './givetest/givetest.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MyscoresComponent } from './myscores/myscores.component';
import { LearnquestionsComponent } from './learnquestions/learnquestions.component';


@NgModule({
  declarations: [GivetestComponent, UserhomeComponent, MyscoresComponent, LearnquestionsComponent],
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
export class UsersModule { }
