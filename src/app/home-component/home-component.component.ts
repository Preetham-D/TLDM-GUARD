import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  getStart(){
    console.log("start it");
    this.router.navigate(['/getStarted']);
  }

  getLogged(){
    console.log("log in");
    this.router.navigate(['/login']);
  }

}
