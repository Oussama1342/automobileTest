import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Header1Component } from './header1/header1.component';
import { CarCellComponent } from './car-cell/car-cell.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Home2Component } from './home2/home2.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
{path:"header", component: HeaderComponent} ,
{path : "signin" , component : SignInComponent},
{path: "test", component: Test2Component },
{path: '' , component: HomeComponent},
{ path:  'test1',component:  Test1Component},
{path: 'signup', component: SignUpComponent},
{path: 'header', component : Header1Component},
{path: 'car-cell', component: CarCellComponent},
{path: 'aboutus', component : AboutUsComponent},
{path: 'home2', component : Home2Component}, 
{path: 'userinfo', component : UserInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
