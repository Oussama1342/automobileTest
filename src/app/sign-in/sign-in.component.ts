import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms'
import {userauth} from '../Model/userauth'
import {AuthentificationService} from '../service/authentification.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  registerForm : FormGroup
  submitted = false;
  user : userauth
  constructor(private formBuilder: FormBuilder, private authS: AuthentificationService, private router : Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username :  ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],


    })
  }

  get f(){
    return this.registerForm.controls;
}


  onLogin(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  localStorage.setItem('username',this.registerForm.get('username').value);
  this.user= new userauth ; 
  this.user.username=this.registerForm.get('username').value;
  this.user.password = this.registerForm.get('password').value;
  this.authS.login(this.user).
          subscribe(resp=>{
          let jwt = resp.headers.get('Authorization');
          this.authS.saveToken(jwt);
          this.authS.login(this.user);
    this.router.navigateByUrl("/home2");

  },
  err=>{
    alert("Veillez verifier votre login/password")
  })

}



}