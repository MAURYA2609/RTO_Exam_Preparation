import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GivetestComponent } from './givetest/givetest.component';
import { UserhomeComponent } from './userhome/userhome.component';


@NgModule({
  declarations: [GivetestComponent, UserhomeComponent],
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
