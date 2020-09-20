import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {userauth } from '../Model/userauth'
import {user} from '../Model/user'

//import {JwtHelper} from 'angular2-jwt'
import { JwtHelperService } from "@auth0/angular-jwt";




@Injectable()
export class AuthentificationService {
 

  private host :string="http://localhost:8585";
  private jwtToken = null ;
  private roles:Array<any>=[];

  constructor(private http: HttpClient) { }
  
  connect = localStorage.getItem('username')
  login(user:userauth){
   return this.http.post(this.host+'/login',user,{observe:'response'});
   console.log(user.username);
   
    console.log("COmpleted");
  }
  saveToken(jwt:string){
this.jwtToken=jwt;
localStorage.setItem('token',jwt);
let helper = new JwtHelperService();
this.roles=helper.decodeToken(this.jwtToken).roles;

  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  public generateToken(request){

    return this.http.post("http://localhost:8585/login",request,{responseType: 'text' as 'json'}) ;

  }
  public welcon(token){
    let tokenStr = 'Bearer'+token ;
    const header = new HttpHeaders().set("Authorization",tokenStr)
    return this.http.get("http://localhost:8585/hellowt",{responseType: 'text' as 'json'});
  }



//////////////////////////////////////////

getUser()  {
  return this.http.get<user>('http://localhost:8585/findUsers/'+localStorage.getItem('username'),{headers:new HttpHeaders({'authorization':this.jwtToken})})
}



}
