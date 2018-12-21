import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recipes = [];
  constructor() { }

  ngOnInit() {
  }

}
