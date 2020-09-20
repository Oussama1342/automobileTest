import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import {user} from '../Model/user'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private ps:AuthentificationService, private router:Router) { }
use1 : user
  ngOnInit() {

    return this.ps.getUser().subscribe(
      data =>(this.use1=data)
    )

  }

}
