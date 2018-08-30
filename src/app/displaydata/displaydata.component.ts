import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  constructor(private router : Router, private projectservice : ProjectService) { }
  displaytoken : string;
  users = []

  ngOnInit() {

    //this.displaytoken = this.route.snapshot.paramMap.get('AccessToken')
    this.projectservice.getUsers().subscribe(data => this.users = data)
    this.displaytoken  = this.projectservice.AccessToken;
  }

}
