import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  constructor() { }
  userconnect = localStorage.getItem('username')

  ngOnInit() {
    this.userconnect = localStorage.getItem('username')
  }

  testlocal(){
  }



  
}
