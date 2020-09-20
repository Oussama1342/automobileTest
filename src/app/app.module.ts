import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { CarCellComponent } from './car-cell/car-cell.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop1DetailComponent } from './shop1-detail/shop1-detail.component';
import { Shop2DetailComponent } from './shop2-detail/shop2-detail.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Header1Component } from './header1/header1.component';
import { TetFComponent } from './tet-f/tet-f.component';
import {AuthentificationService} from './service/authentification.service';
import { Home2Component } from './home2/home2.component';
import { UserInfoComponent } from './user-info/user-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    AboutUsComponent,
    SignUpComponent,
    CarBookingComponent,
    CarCellComponent,
    ContactComponent,
    NotFoundComponent,
    Shop1Component,
    Shop2Component,
    Shop1DetailComponent,
    Shop2DetailComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    Header1Component,
    TetFComponent,
    Home2Component,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
