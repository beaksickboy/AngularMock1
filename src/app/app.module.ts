import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './app-routing.module';

import { BookingModule } from './booking/booking.module';
import { adminModule } from './admin/admin.module';


import { tiketSellerModule } from './tiket-seller/tiket-seller.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,

    AuthModule,
    BookingModule,
    RoutingModule,
    adminModule,
    tiketSellerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
