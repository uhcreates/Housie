import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.css']
})
export class MatchlistComponent implements OnInit {

  matchList = ['1', '2','3', '4'];
  constructor() { }

  ngOnInit() {
  }

}
