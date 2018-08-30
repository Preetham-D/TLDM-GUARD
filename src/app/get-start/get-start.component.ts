import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.css']
})
export class GetStartComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  getWorkspace(){
    console.log("start work");
    this.router.navigate(['/user']);
  }
}
